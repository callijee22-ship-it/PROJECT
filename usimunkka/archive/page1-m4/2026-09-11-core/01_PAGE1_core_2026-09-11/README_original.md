# 우심운까 M4 · PAGE 1

지역·친구 운동 경쟁 랜딩 화면의 현재 기준본입니다.

## 이번 변경
- 친구 운동 랭킹은 로그인 후에만 이용
- 로그인 사용자에 등록된 친구만 랭킹에 노출
- 친구 코드 등록 UI/Mock 동작 추가
- 지역 운동열기는 일자별 snapshot 구조로 변경하여 하루 단위 데이터 누적에 따라 순위/상승폭이 바뀔 수 있도록 구성

## 중요
Mock 모드의 로그인/친구 저장은 UI 검증용 브라우저 저장소 구현입니다. 실제 인증과 DB 영속화는 Backend 통합이 필요합니다.

## 문서
- `PROJECT_GUIDELINES.md`
- `docs/PAGE1_M4_STATUS.md`
- `docs/API.md`
- `docs/RANKING_DAILY.md`

## 실행
정적 서버에서 `dist/`를 서비스합니다. 기본은 Mock 모드입니다. Live 연동 시 페이지 로드 전에 `globalThis.USIMUNKKA_USE_MOCK = false`와 `globalThis.USIMUNKKA_API_BASE`를 설정합니다.
