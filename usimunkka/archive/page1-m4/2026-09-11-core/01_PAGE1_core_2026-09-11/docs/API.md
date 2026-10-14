# PAGE1/M4 API Contract — 로그인 친구랭킹 + 일별 지역랭킹

## 원칙
- 지역 랭킹은 비로그인 사용자도 조회 가능하다.
- 친구 랭킹/친구 추가는 인증된 사용자만 가능하다.
- 실제 인증은 M2/통합 백엔드가 담당하며 이 정적 패키지는 로그인 페이지를 `/login?next=/`로 연결한다.
- Mock 모드에서는 기능 검증을 위해 브라우저 저장소 기반 데모 세션을 사용한다. 실제 인증으로 간주하지 않는다.

## GET /api/rankings
공개. 최신 일별 snapshot 기준 PAGE1 지역 랭킹을 반환한다.

응답 핵심 필드:
```json
{
  "snapshot_date": "2026-09-11",
  "window_days": 7,
  "activity": [{
    "province": "서울특별시",
    "region_name": "관악구",
    "national_rank": 17,
    "previous_rank": 25,
    "rank_change": 8,
    "score": 8420
  }],
  "official": []
}
```

`previous_rank`는 직전 snapshot의 동일 지역 순위를 기준으로 계산한다. 데이터가 없는 경우 현재 순위와 동일하게 처리하고 `rank_change=0`으로 응답한다.

## GET /api/users/me
인증 필요. 로그인 사용자의 최소 프로필을 반환한다. 미인증은 `401`.

## GET /api/friends/ranking
인증 필요. 로그인 사용자 본인 + 해당 사용자의 friendship에 등록된 사용자만 반환한다.

## POST /api/friends
인증 필요.
```json
{"friend_code":"USIM-XXXX"}
```
성공 시 등록된 친구를 반환한다. 자기 자신/없는 코드/중복 등록은 명확한 상태로 응답한다.

## POST /api/auth/logout
통합 백엔드에 로그아웃 API가 있는 경우 사용한다. 현재 프론트는 미구현 서버에서도 동작하도록 404는 허용한다.

## 변경 영향
이 문서는 프론트 연동을 위한 Contract 제안/기준이다. 실제 서버 API와 DB Migration은 M2·M4 담당자 협의 후 확정한다.


## 로그인 사용자 주소지 → MY REGION 표시 계약

`GET /api/users/me` 응답은 MY REGION 판별을 위해 아래 중 가능한 값을 제공한다.

```json
{
  "id": 7,
  "nickname": "나",
  "province": "서울특별시",
  "region_code": "11620",
  "region_name": "관악구",
  "address": "서울특별시 관악구 봉천동"
}
```

우선순위는 `province/sido` → `address/road_address/jibun_address` 문자열 판별 순이다. 프론트엔드는 17개 시·도 별칭을 정규화한 후, 최신 일별 지역 랭킹 Snapshot에서 로그인 사용자의 지역 순위를 찾는다. 주소가 있으나 랭킹 데이터가 없으면 마스코트는 표시하고 순위는 `—`로 표시한다.
