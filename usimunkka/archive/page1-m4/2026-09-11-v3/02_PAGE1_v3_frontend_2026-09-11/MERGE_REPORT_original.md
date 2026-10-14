# PAGE1 / WOW 병합 비교 기록

## PAGE1에서 유지한 것
- 최종 파스텔 UI와 지도 디자인
- 울릉도/독도 포함 지도
- 지역 선택 팝업 UI
- 지역별 마스코트 이미지
- `우리 동네는 지금` 마스코트/순위 UI
- 전국 1위 마스코트 직접 모션 및 `TOP 1` 표시
- 기존 반응형 CSS

## WOW에서 가져온 기능 코드
- Django API 라우팅
- 개발용 signed-cookie 로그인 세션
- 사용자 프로필 API
- 친구 등록 및 로그인 사용자별 친구 랭킹
- 일별 RegionActivitySnapshot 기반 지역 랭킹 계산
- 활동 완료 기록 API
- Repository / Service Layer 구조
- 아직 데이터가 없는 facility/recommendation/pipeline의 PENDING_DATA 처리

## 병합 중 호환성 수정
WOW backend의 `GET /api/friends/ranking` 응답은 `{ "ranking": [...] }` 형태인데 기존 frontend LIVE adapter는 배열 자체를 기대했습니다.
디자인/DOM을 바꾸지 않고 adapter에서 `payload.ranking`을 안전하게 꺼내도록 수정했습니다.

## 통합 실행 방식
Django가 PAGE1 `frontend/dist`를 같은 Origin에서 그대로 서비스합니다.
Django로 접근할 때만 `USIMUNKKA_USE_MOCK=false`를 주입하여 WOW backend API를 사용합니다.
원본 `frontend/dist/index.html`은 수정 없이 정적/Mock 검증에도 사용할 수 있습니다.
