# PAGE1 / M4 현재 구현 상태

## 1. 현재 구현된 기능
- 기존 PAGE1 지도/랭킹/팝업/파스텔 UI 유지
- 지역 클릭 시 시군구 랭킹 팝업
- 활동지표 / 공공데이터지표 탭
- 상승 지역 티커
- **친구 운동 랭킹 로그인 게이트**
- **로그인 사용자 기준 친구 목록 조회**
- **친구 코드 등록 후 해당 사용자 친구 랭킹 즉시 갱신**
- **지역 운동열기 일별 snapshot 누적 및 최신/직전 snapshot 비교**
- PAGE2 CTA, 울릉도/독도 표시, 로딩/오류 UI 유지

## 2. Mock / Live 경계
Mock 모드에서는 브라우저 저장소 기반 데모 로그인과 친구 등록을 제공한다. 이는 UI/Interaction 검증용이다. 실제 서비스의 회원 인증/친구 영속 저장은 M2 Backend와 MySQL 연동이 필요하다.

## 3. Live API 연동 기준
- `GET /api/rankings`
- `GET /api/users/me`
- `GET /api/friends/ranking` (인증 필요)
- `POST /api/friends` (인증 필요)
- 로그인 진입 `/login?next=/`

상세 Contract는 `docs/API.md` 참조.

## 4. Ranking 일별 누적
`dist/mock/rankings.js`의 `activity_daily`는 날짜별 최근 7일 활동 snapshot 예시다. 실제 서비스에서는 `region_ranking`에 일별 결과를 INSERT하고 과거 snapshot을 유지하는 구조를 권장한다. 상세는 `docs/RANKING_DAILY.md`.

## 5. 미완료/통합 필요
- 실제 로그인 인증 Backend
- 실제 friendship DB 저장/조회
- 실제 `activity_log` 기반 일별 지역 랭킹 집계 Scheduler/Job
- DB Migration 및 팀 리뷰

정적 패키지 단독으로 위 서버 기능이 완료되었다고 간주하면 안 된다.


## 2026-09-11 추가 변경 — MY REGION 마스코트
- 로그인 사용자 주소지 기반 시·도 판별 추가
- 17개 시·도용 우심운까 오리지널 2D SVG 마스코트 코드 추가
- `우리 동네는 지금` 영역에 로그인 사용자 지역 순위 + 마스코트 표시
- 로그아웃 상태에서는 개인 지역 정보를 노출하지 않고 로그인 안내 표시
- 기존 친구 로그인/친구추가/일별 지역랭킹 Snapshot 구조 유지

- 지역 선택 시 시군구 랭킹 팝업의 지역명 옆에 해당 지역 마스코트 노출 추가.
