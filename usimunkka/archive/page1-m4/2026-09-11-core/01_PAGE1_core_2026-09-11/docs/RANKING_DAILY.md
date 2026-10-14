# 일별 지역 랭킹 Snapshot 설계

## 목적
PAGE1의 `이번 주 운동열기`가 하루가 지날 때마다 새 활동 데이터에 따라 변할 수 있도록, 지역 랭킹을 일자별 snapshot으로 누적한다.

## 저장 원칙
- 과거 랭킹을 UPDATE로 덮어쓰지 않는다.
- 하루 1회 이상 집계 결과를 `ranking_date` 단위로 저장한다.
- PAGE1은 가장 최신 snapshot을 읽는다.
- 상승/하락은 직전 snapshot과 비교해서 계산한다.
- 공식 공공데이터 지표와 우심운까 활동지표는 별도 metric/source로 유지한다.

## 권장 region_ranking 필드 (Migration 전 협의 필요)
- `ranking_date`
- `region_code`
- `scope` (`SIDO`, `SIGUNGU`)
- `metric_type` (`ACTIVITY`, `OFFICIAL`)
- `window_start`, `window_end`
- `score`
- `national_rank`
- `regional_rank`
- `created_at`

권장 Unique Key: `(ranking_date, region_code, metric_type)`

## 집계 흐름
`activity_log` → 일별/최근 7일 집계 → 점수 산출 → 전국/시도 내 순위 계산 → `region_ranking` snapshot INSERT → PAGE1 API 조회

## Mock 구현
`dist/mock/rankings.js`의 `activity_daily[]`에 날짜별 snapshot을 추가하면 최신 일자의 값이 자동 선택되고, 바로 전 일자와의 순위 차이가 화면에 반영된다.
