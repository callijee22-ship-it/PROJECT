-- F1 TO-BE 물리 데이터베이스 스키마
-- 대상: MySQL 8.0+
-- 기준: data/standard_dictionary/ 및 TO_BE_model_design.md

CREATE DATABASE IF NOT EXISTS f1_raw CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
CREATE DATABASE IF NOT EXISTS f1_stg CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
CREATE DATABASE IF NOT EXISTS f1_core CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
CREATE DATABASE IF NOT EXISTS f1_quality CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
CREATE DATABASE IF NOT EXISTS f1_mart CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE f1_core;

-- 레이어별 공통 관리 테이블. 원본·스테이징 데이터는 별도 적재 배치로 관리한다.
CREATE TABLE IF NOT EXISTS f1_raw.ingestion_file (
    ingestion_file_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    source_file VARCHAR(128) NOT NULL,
    source_path VARCHAR(512),
    source_checksum CHAR(64),
    row_count BIGINT,
    loaded_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
);
CREATE TABLE IF NOT EXISTS f1_stg.load_batch (
    load_batch_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ingestion_file_id BIGINT NOT NULL,
    table_name VARCHAR(64) NOT NULL,
    load_status VARCHAR(16) NOT NULL DEFAULT 'LOADED',
    loaded_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    INDEX ix_stg_batch_file (ingestion_file_id, table_name)
);
CREATE TABLE IF NOT EXISTS f1_quality.validation_issue (
    quality_issue_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    source_file VARCHAR(64) NOT NULL,
    issue_kind VARCHAR(32) NOT NULL,
    session_key VARCHAR(64),
    driver_number VARCHAR(3),
    row_key VARCHAR(128),
    field_name VARCHAR(128),
    issue_message VARCHAR(1000) NOT NULL,
    detected_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    resolved_at DATETIME(6),
    INDEX ix_quality_lookup (source_file, issue_kind, session_key)
);
CREATE TABLE IF NOT EXISTS f1_quality.repair_detail (
    repair_detail_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    source_file VARCHAR(64) NOT NULL,
    session_key VARCHAR(64),
    driver_number VARCHAR(3),
    row_key VARCHAR(128),
    field_name VARCHAR(128) NOT NULL,
    old_value TEXT,
    new_value TEXT,
    repair_method VARCHAR(64) NOT NULL,
    confidence_code VARCHAR(16) NOT NULL,
    repair_reason VARCHAR(1000) NOT NULL,
    repaired_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    INDEX ix_repair_lookup (source_file, session_key, field_name)
);
CREATE OR REPLACE VIEW f1_mart.v_session_quality AS
SELECT s.session_key, s.meeting_key, s.session_type_code, q.issue_kind, q.field_name, q.issue_message
FROM f1_core.session s
LEFT JOIN f1_quality.validation_issue q ON q.session_key = s.session_key;

CREATE TABLE IF NOT EXISTS f1_core.ref_compound (
    compound_code VARCHAR(16) PRIMARY KEY,
    compound_name VARCHAR(64) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS f1_core.ref_session_type (
    session_type_code VARCHAR(32) PRIMARY KEY,
    session_type_name VARCHAR(64) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS f1_core.ref_repair_status (
    repair_status_code VARCHAR(16) PRIMARY KEY,
    description VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS f1_core.ref_repair_confidence (
    confidence_code VARCHAR(16) PRIMARY KEY,
    description VARCHAR(128) NOT NULL
);

INSERT INTO f1_core.ref_compound(compound_code, compound_name) VALUES
('SOFT','소프트'),('MEDIUM','미디엄'),('HARD','하드'),
('INTERMEDIATE','인터미디어트'),('WET','웻'),('UNKNOWN','미상')
;
INSERT INTO f1_core.ref_session_type(session_type_code, session_type_name) VALUES
('Race','레이스'),('Sprint','스프린트'),('Qualifying','예선'),('Practice','연습')
;
INSERT INTO f1_core.ref_repair_status VALUES
('UNCHANGED','원본값 유지'),('REPAIRED','복구됨')
;
INSERT INTO f1_core.ref_repair_confidence VALUES
('HIGH','직접 키 조인 또는 명확한 원천값'),
('MEDIUM','그룹 통계 기반 추정'),
('LOW','근거 부족 상태의 명시적 대체')
;

CREATE TABLE IF NOT EXISTS f1_core.meeting (
    meeting_key VARCHAR(64) PRIMARY KEY,
    circuit_key VARCHAR(64),
    circuit_short_name VARCHAR(64),
    country_key VARCHAR(64),
    country_code VARCHAR(3),
    country_name VARCHAR(64) NOT NULL,
    location VARCHAR(128) NOT NULL,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
);

CREATE TABLE IF NOT EXISTS f1_core.session (
    session_key VARCHAR(64) PRIMARY KEY,
    meeting_key VARCHAR(64) NOT NULL REFERENCES f1_core.meeting(meeting_key),
    session_name VARCHAR(64) NOT NULL,
    session_type_code VARCHAR(32) NOT NULL REFERENCES f1_core.ref_session_type(session_type_code),
    date_start DATETIME(6) NOT NULL,
    date_end DATETIME(6) NOT NULL,
    gmt_offset VARCHAR(16),
    is_cancelled BOOLEAN NOT NULL DEFAULT FALSE,
    year SMALLINT NOT NULL CHECK (year BETWEEN 1900 AND 2200),
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CHECK (date_end >= date_start)
);

CREATE TABLE IF NOT EXISTS f1_core.driver (
    driver_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(128) NOT NULL,
    first_name VARCHAR(64),
    last_name VARCHAR(64),
    name_acronym VARCHAR(3),
    country_code VARCHAR(3),
    headshot_url VARCHAR(512),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS f1_core.session_driver (
    session_key VARCHAR(64) NOT NULL REFERENCES f1_core.session(session_key),
    driver_number VARCHAR(3) NOT NULL,
    driver_id BIGINT NOT NULL REFERENCES f1_core.driver(driver_id),
    meeting_key VARCHAR(64) NOT NULL REFERENCES f1_core.meeting(meeting_key),
    broadcast_name VARCHAR(128),
    team_name VARCHAR(128),
    team_colour VARCHAR(8),
    repair_status_code VARCHAR(16) NOT NULL DEFAULT 'UNCHANGED' REFERENCES f1_core.ref_repair_status(repair_status_code),
    repair_method VARCHAR(64) NOT NULL DEFAULT 'NONE',
    repair_confidence_code VARCHAR(16) NOT NULL DEFAULT 'HIGH' REFERENCES f1_core.ref_repair_confidence(confidence_code),
    repair_reason VARCHAR(1000) NOT NULL DEFAULT '원본값 유지',
    PRIMARY KEY (session_key, driver_number),
    UNIQUE (session_key, driver_id)
);

CREATE TABLE IF NOT EXISTS f1_core.lap (
    session_key VARCHAR(64) NOT NULL,
    driver_number VARCHAR(3) NOT NULL,
    lap_number INTEGER NOT NULL CHECK (lap_number > 0),
    date_start DATETIME(6),
    duration_sector_1 NUMERIC(12,6) CHECK (duration_sector_1 IS NULL OR duration_sector_1 >= 0),
    duration_sector_2 NUMERIC(12,6) CHECK (duration_sector_2 IS NULL OR duration_sector_2 >= 0),
    duration_sector_3 NUMERIC(12,6) CHECK (duration_sector_3 IS NULL OR duration_sector_3 >= 0),
    i1_speed NUMERIC(12,3) CHECK (i1_speed IS NULL OR i1_speed >= 0),
    i2_speed NUMERIC(12,3) CHECK (i2_speed IS NULL OR i2_speed >= 0),
    st_speed NUMERIC(12,3) CHECK (st_speed IS NULL OR st_speed >= 0),
    lap_duration NUMERIC(12,6) CHECK (lap_duration IS NULL OR lap_duration >= 0),
    is_pit_out_lap BOOLEAN,
    segments_sector_1 TEXT,
    segments_sector_2 TEXT,
    segments_sector_3 TEXT,
    repair_status_code VARCHAR(16) NOT NULL DEFAULT 'UNCHANGED' REFERENCES f1_core.ref_repair_status(repair_status_code),
    repair_method VARCHAR(64) NOT NULL DEFAULT 'NONE',
    repair_confidence_code VARCHAR(16) NOT NULL DEFAULT 'HIGH' REFERENCES f1_core.ref_repair_confidence(confidence_code),
    repair_reason VARCHAR(1000) NOT NULL DEFAULT '원본값 유지',
    PRIMARY KEY (session_key, driver_number, lap_number),
    FOREIGN KEY (session_key, driver_number) REFERENCES f1_core.session_driver(session_key, driver_number)
);

CREATE TABLE IF NOT EXISTS f1_core.stint (
    session_key VARCHAR(64) NOT NULL,
    driver_number VARCHAR(3) NOT NULL,
    stint_number INTEGER NOT NULL CHECK (stint_number > 0),
    compound_code VARCHAR(16) REFERENCES f1_core.ref_compound(compound_code),
    lap_start INTEGER CHECK (lap_start IS NULL OR lap_start > 0),
    lap_end INTEGER CHECK (lap_end IS NULL OR lap_end > 0),
    tyre_age_at_start INTEGER CHECK (tyre_age_at_start IS NULL OR tyre_age_at_start >= 0),
    repair_status_code VARCHAR(16) NOT NULL DEFAULT 'UNCHANGED' REFERENCES f1_core.ref_repair_status(repair_status_code),
    repair_method VARCHAR(64) NOT NULL DEFAULT 'NONE',
    repair_confidence_code VARCHAR(16) NOT NULL DEFAULT 'HIGH' REFERENCES f1_core.ref_repair_confidence(confidence_code),
    repair_reason VARCHAR(1000) NOT NULL DEFAULT '원본값 유지',
    PRIMARY KEY (session_key, driver_number, stint_number),
    FOREIGN KEY (session_key, driver_number) REFERENCES f1_core.session_driver(session_key, driver_number),
    CHECK (lap_start IS NULL OR lap_end IS NULL OR lap_end >= lap_start)
);

CREATE TABLE IF NOT EXISTS f1_core.pit_event (
    session_key VARCHAR(64) NOT NULL,
    driver_number VARCHAR(3) NOT NULL,
    lap_number INTEGER NOT NULL CHECK (lap_number > 0),
    event_date DATETIME(6) NOT NULL,
    lane_duration NUMERIC(12,6) CHECK (lane_duration IS NULL OR lane_duration >= 0),
    pit_duration NUMERIC(12,6) CHECK (pit_duration IS NULL OR pit_duration >= 0),
    stop_duration NUMERIC(12,6) CHECK (stop_duration IS NULL OR stop_duration >= 0),
    PRIMARY KEY (session_key, driver_number, lap_number),
    FOREIGN KEY (session_key, driver_number) REFERENCES f1_core.session_driver(session_key, driver_number)
);

CREATE TABLE IF NOT EXISTS f1_core.weather_observation (
    session_key VARCHAR(64) NOT NULL REFERENCES f1_core.session(session_key),
    observed_at DATETIME(6) NOT NULL,
    air_temperature NUMERIC(12,3),
    track_temperature NUMERIC(12,3),
    humidity NUMERIC(12,3) CHECK (humidity IS NULL OR humidity BETWEEN 0 AND 100),
    pressure NUMERIC(12,3),
    rainfall INTEGER,
    wind_direction INTEGER CHECK (wind_direction IS NULL OR wind_direction BETWEEN 0 AND 360),
    wind_speed NUMERIC(12,3) CHECK (wind_speed IS NULL OR wind_speed >= 0),
    PRIMARY KEY (session_key, observed_at)
);

CREATE TABLE IF NOT EXISTS f1_core.quality_issue (
    quality_issue_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    source_file VARCHAR(64) NOT NULL,
    issue_kind VARCHAR(32) NOT NULL,
    session_key VARCHAR(64),
    driver_number VARCHAR(3),
    row_key VARCHAR(128),
    field_name VARCHAR(128),
    issue_message VARCHAR(1000) NOT NULL,
    detected_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    resolved_at DATETIME(6)
);

CREATE INDEX IF NOT EXISTS ix_session_meeting_type ON f1_core.session(meeting_key, session_type_code);
CREATE INDEX IF NOT EXISTS ix_session_driver_driver ON f1_core.session_driver(session_key, driver_number);
CREATE INDEX IF NOT EXISTS ix_lap_driver_lap ON f1_core.lap(session_key, driver_number, lap_number);
CREATE INDEX IF NOT EXISTS ix_stint_range ON f1_core.stint(session_key, driver_number, lap_start, lap_end);
CREATE INDEX IF NOT EXISTS ix_pit_driver_lap ON f1_core.pit_event(session_key, driver_number, lap_number);
CREATE INDEX IF NOT EXISTS ix_weather_session_date ON f1_core.weather_observation(session_key, observed_at);
CREATE INDEX IF NOT EXISTS ix_quality_issue_lookup ON f1_core.quality_issue(source_file, issue_kind, session_key);

ALTER TABLE f1_core.lap MODIFY segments_sector_1 TEXT COMMENT '목록 형태 원문을 보존하며 임의 JSON 변환을 하지 않음';
ALTER TABLE f1_core.session_driver MODIFY driver_number VARCHAR(3) NOT NULL COMMENT '영구 드라이버 ID가 아닌 세션 맥락의 차량 번호';

