/* PAGE1 M4 bundle: auth-gated friend ranking + daily ranking snapshots + login-address regional mascot. */
const mockCatalog = {
  "generated_at": "2026-09-11T19:00:00+09:00",
  "users": [
    {
      "id": 7,
      "nickname": "나",
      "friend_code": "USIM-7K29",
      "region_code": "11620",
      "region_name": "관악구",
      "province": "서울특별시",
      "address": "서울특별시 관악구 봉천동",
      "activity_score": 4180,
      "previous_activity_score": 3920,
      "color": "#c8ff3d"
    },
    {
      "id": 2,
      "nickname": "민수",
      "friend_code": "USIM-MINSU",
      "region_name": "강남구",
      "province": "서울특별시",
      "address": "서울특별시 강남구 역삼동",
      "activity_score": 4820,
      "previous_activity_score": 4700,
      "color": "#ffd75f"
    },
    {
      "id": 3,
      "nickname": "지훈",
      "friend_code": "USIM-JIHUN",
      "region_name": "마포구",
      "province": "서울특별시",
      "address": "서울특별시 마포구 서교동",
      "activity_score": 4510,
      "previous_activity_score": 4520,
      "color": "#74caff"
    },
    {
      "id": 4,
      "nickname": "서준",
      "friend_code": "USIM-SEOJUN",
      "region_name": "성동구",
      "province": "서울특별시",
      "address": "서울특별시 성동구 성수동",
      "activity_score": 3940,
      "previous_activity_score": 4010,
      "color": "#ff9b76"
    },
    {
      "id": 5,
      "nickname": "하늘",
      "friend_code": "USIM-HANEUL",
      "region_name": "송파구",
      "province": "서울특별시",
      "address": "서울특별시 송파구 잠실동",
      "activity_score": 3610,
      "previous_activity_score": 3520,
      "color": "#d2b0ff"
    }
  ],
  "friendships": {
    "7": [
      2,
      3
    ],
    "2": [
      7,
      3
    ],
    "3": [
      7,
      2
    ],
    "4": [
      7
    ],
    "5": [
      7
    ]
  },
  "activity_daily": [
    {
      "date": "2026-09-09",
      "window_days": 7,
      "regions": [
        {
          "province": "서울특별시",
          "region_name": "관악구",
          "national_rank": 27,
          "regional_rank": 5,
          "score": 8000,
          "metrics": {
            "걷기": 12,
            "생활체육": 8,
            "운동환경": 21
          }
        },
        {
          "province": "경기도",
          "region_name": "수원시",
          "national_rank": 2,
          "regional_rank": 1,
          "score": 9407,
          "metrics": {
            "걷기": 3,
            "생활체육": 1,
            "운동환경": 6
          }
        },
        {
          "province": "부산광역시",
          "region_name": "해운대구",
          "national_rank": 8,
          "regional_rank": 1,
          "score": 9224,
          "metrics": {
            "걷기": 7,
            "생활체육": 2,
            "운동환경": 4
          }
        },
        {
          "province": "대전광역시",
          "region_name": "유성구",
          "national_rank": 6,
          "regional_rank": 1,
          "score": 9011,
          "metrics": {
            "걷기": 9,
            "생활체육": 3,
            "운동환경": 5
          }
        },
        {
          "province": "강원특별자치도",
          "region_name": "춘천시",
          "national_rank": 17,
          "regional_rank": 1,
          "score": 8478,
          "metrics": {
            "걷기": 4,
            "생활체육": 11,
            "운동환경": 7
          }
        },
        {
          "province": "충청북도",
          "region_name": "청주시",
          "national_rank": 10,
          "regional_rank": 1,
          "score": 8600,
          "metrics": {
            "걷기": 10,
            "생활체육": 6,
            "운동환경": 12
          }
        },
        {
          "province": "인천광역시",
          "region_name": "연수구",
          "national_rank": 13,
          "regional_rank": 1,
          "score": 8537,
          "metrics": {
            "걷기": 8,
            "생활체육": 7,
            "운동환경": 13
          }
        },
        {
          "province": "대구광역시",
          "region_name": "수성구",
          "national_rank": 12,
          "regional_rank": 1,
          "score": 8314,
          "metrics": {
            "걷기": 13,
            "생활체육": 9,
            "운동환경": 11
          }
        },
        {
          "province": "전북특별자치도",
          "region_name": "전주시",
          "national_rank": 11,
          "regional_rank": 1,
          "score": 8211,
          "metrics": {
            "걷기": 14,
            "생활체육": 9,
            "운동환경": 18
          }
        },
        {
          "province": "울산광역시",
          "region_name": "남구",
          "national_rank": 18,
          "regional_rank": 1,
          "score": 8168,
          "metrics": {
            "걷기": 17,
            "생활체육": 12,
            "운동환경": 9
          }
        },
        {
          "province": "세종특별자치시",
          "region_name": "세종시",
          "national_rank": 11,
          "regional_rank": 1,
          "score": 8070,
          "metrics": {
            "걷기": 6,
            "생활체육": 15,
            "운동환경": 10
          }
        },
        {
          "province": "충청남도",
          "region_name": "천안시",
          "national_rank": 20,
          "regional_rank": 1,
          "score": 7957,
          "metrics": {
            "걷기": 16,
            "생활체육": 14,
            "운동환경": 15
          }
        },
        {
          "province": "경상북도",
          "region_name": "포항시",
          "national_rank": 16,
          "regional_rank": 1,
          "score": 8384,
          "metrics": {
            "걷기": 11,
            "생활체육": 10,
            "운동환경": 8
          }
        },
        {
          "province": "경상남도",
          "region_name": "창원시",
          "national_rank": 16,
          "regional_rank": 1,
          "score": 7891,
          "metrics": {
            "걷기": 18,
            "생활체육": 13,
            "운동환경": 16
          }
        },
        {
          "province": "전남광주통합특별시",
          "region_name": "광주권",
          "national_rank": 21,
          "regional_rank": 1,
          "score": 7768,
          "metrics": {
            "걷기": 15,
            "생활체육": 17,
            "운동환경": 19
          }
        },
        {
          "province": "제주특별자치도",
          "region_name": "제주시",
          "national_rank": 10,
          "regional_rank": 1,
          "score": 8760,
          "metrics": {
            "걷기": 2,
            "생활체육": 7,
            "운동환경": 3
          }
        }
      ]
    },
    {
      "date": "2026-09-10",
      "window_days": 7,
      "regions": [
        {
          "province": "서울특별시",
          "region_name": "관악구",
          "national_rank": 25,
          "regional_rank": 5,
          "score": 8200,
          "metrics": {
            "걷기": 12,
            "생활체육": 8,
            "운동환경": 21
          }
        },
        {
          "province": "경기도",
          "region_name": "수원시",
          "national_rank": 3,
          "regional_rank": 1,
          "score": 9607,
          "metrics": {
            "걷기": 3,
            "생활체육": 1,
            "운동환경": 6
          }
        },
        {
          "province": "부산광역시",
          "region_name": "해운대구",
          "national_rank": 7,
          "regional_rank": 1,
          "score": 9424,
          "metrics": {
            "걷기": 7,
            "생활체육": 2,
            "운동환경": 4
          }
        },
        {
          "province": "대전광역시",
          "region_name": "유성구",
          "national_rank": 4,
          "regional_rank": 1,
          "score": 9211,
          "metrics": {
            "걷기": 9,
            "생활체육": 3,
            "운동환경": 5
          }
        },
        {
          "province": "강원특별자치도",
          "region_name": "춘천시",
          "national_rank": 18,
          "regional_rank": 1,
          "score": 8678,
          "metrics": {
            "걷기": 4,
            "생활체육": 11,
            "운동환경": 7
          }
        },
        {
          "province": "충청북도",
          "region_name": "청주시",
          "national_rank": 9,
          "regional_rank": 1,
          "score": 8800,
          "metrics": {
            "걷기": 10,
            "생활체육": 6,
            "운동환경": 12
          }
        },
        {
          "province": "인천광역시",
          "region_name": "연수구",
          "national_rank": 11,
          "regional_rank": 1,
          "score": 8737,
          "metrics": {
            "걷기": 8,
            "생활체육": 7,
            "운동환경": 13
          }
        },
        {
          "province": "대구광역시",
          "region_name": "수성구",
          "national_rank": 13,
          "regional_rank": 1,
          "score": 8514,
          "metrics": {
            "걷기": 13,
            "생활체육": 9,
            "운동환경": 11
          }
        },
        {
          "province": "전북특별자치도",
          "region_name": "전주시",
          "national_rank": 10,
          "regional_rank": 1,
          "score": 8411,
          "metrics": {
            "걷기": 14,
            "생활체육": 9,
            "운동환경": 18
          }
        },
        {
          "province": "울산광역시",
          "region_name": "남구",
          "national_rank": 16,
          "regional_rank": 1,
          "score": 8368,
          "metrics": {
            "걷기": 17,
            "생활체육": 12,
            "운동환경": 9
          }
        },
        {
          "province": "세종특별자치시",
          "region_name": "세종시",
          "national_rank": 12,
          "regional_rank": 1,
          "score": 8270,
          "metrics": {
            "걷기": 6,
            "생활체육": 15,
            "운동환경": 10
          }
        },
        {
          "province": "충청남도",
          "region_name": "천안시",
          "national_rank": 19,
          "regional_rank": 1,
          "score": 8157,
          "metrics": {
            "걷기": 16,
            "생활체육": 14,
            "운동환경": 15
          }
        },
        {
          "province": "경상북도",
          "region_name": "포항시",
          "national_rank": 14,
          "regional_rank": 1,
          "score": 8584,
          "metrics": {
            "걷기": 11,
            "생활체육": 10,
            "운동환경": 8
          }
        },
        {
          "province": "경상남도",
          "region_name": "창원시",
          "national_rank": 17,
          "regional_rank": 1,
          "score": 8091,
          "metrics": {
            "걷기": 18,
            "생활체육": 13,
            "운동환경": 16
          }
        },
        {
          "province": "전남광주통합특별시",
          "region_name": "광주권",
          "national_rank": 20,
          "regional_rank": 1,
          "score": 7968,
          "metrics": {
            "걷기": 15,
            "생활체육": 17,
            "운동환경": 19
          }
        },
        {
          "province": "제주특별자치도",
          "region_name": "제주시",
          "national_rank": 8,
          "regional_rank": 1,
          "score": 8960,
          "metrics": {
            "걷기": 2,
            "생활체육": 7,
            "운동환경": 3
          }
        }
      ]
    },
    {
      "date": "2026-09-11",
      "window_days": 7,
      "regions": [
        {
          "province": "서울특별시",
          "region_name": "관악구",
          "national_rank": 17,
          "regional_rank": 5,
          "score": 8420,
          "metrics": {
            "걷기": 12,
            "생활체육": 8,
            "운동환경": 21
          }
        },
        {
          "province": "경기도",
          "region_name": "수원시",
          "national_rank": 1,
          "regional_rank": 1,
          "score": 9827,
          "metrics": {
            "걷기": 3,
            "생활체육": 1,
            "운동환경": 6
          }
        },
        {
          "province": "부산광역시",
          "region_name": "해운대구",
          "national_rank": 2,
          "regional_rank": 1,
          "score": 9644,
          "metrics": {
            "걷기": 7,
            "생활체육": 2,
            "운동환경": 4
          }
        },
        {
          "province": "대전광역시",
          "region_name": "유성구",
          "national_rank": 3,
          "regional_rank": 1,
          "score": 9431,
          "metrics": {
            "걷기": 9,
            "생활체육": 3,
            "운동환경": 5
          }
        },
        {
          "province": "강원특별자치도",
          "region_name": "춘천시",
          "national_rank": 8,
          "regional_rank": 1,
          "score": 8898,
          "metrics": {
            "걷기": 4,
            "생활체육": 11,
            "운동환경": 7
          }
        },
        {
          "province": "충청북도",
          "region_name": "청주시",
          "national_rank": 6,
          "regional_rank": 1,
          "score": 9020,
          "metrics": {
            "걷기": 10,
            "생활체육": 6,
            "운동환경": 12
          }
        },
        {
          "province": "인천광역시",
          "region_name": "연수구",
          "national_rank": 7,
          "regional_rank": 1,
          "score": 8957,
          "metrics": {
            "걷기": 8,
            "생활체육": 7,
            "운동환경": 13
          }
        },
        {
          "province": "대구광역시",
          "region_name": "수성구",
          "national_rank": 10,
          "regional_rank": 1,
          "score": 8734,
          "metrics": {
            "걷기": 13,
            "생활체육": 9,
            "운동환경": 11
          }
        },
        {
          "province": "전북특별자치도",
          "region_name": "전주시",
          "national_rank": 11,
          "regional_rank": 1,
          "score": 8631,
          "metrics": {
            "걷기": 14,
            "생활체육": 9,
            "운동환경": 18
          }
        },
        {
          "province": "울산광역시",
          "region_name": "남구",
          "national_rank": 12,
          "regional_rank": 1,
          "score": 8588,
          "metrics": {
            "걷기": 17,
            "생활체육": 12,
            "운동환경": 9
          }
        },
        {
          "province": "세종특별자치시",
          "region_name": "세종시",
          "national_rank": 13,
          "regional_rank": 1,
          "score": 8490,
          "metrics": {
            "걷기": 6,
            "생활체육": 15,
            "운동환경": 10
          }
        },
        {
          "province": "충청남도",
          "region_name": "천안시",
          "national_rank": 14,
          "regional_rank": 1,
          "score": 8377,
          "metrics": {
            "걷기": 16,
            "생활체육": 14,
            "운동환경": 15
          }
        },
        {
          "province": "경상북도",
          "region_name": "포항시",
          "national_rank": 9,
          "regional_rank": 1,
          "score": 8804,
          "metrics": {
            "걷기": 11,
            "생활체육": 10,
            "운동환경": 8
          }
        },
        {
          "province": "경상남도",
          "region_name": "창원시",
          "national_rank": 15,
          "regional_rank": 1,
          "score": 8311,
          "metrics": {
            "걷기": 18,
            "생활체육": 13,
            "운동환경": 16
          }
        },
        {
          "province": "전남광주통합특별시",
          "region_name": "광주권",
          "national_rank": 16,
          "regional_rank": 1,
          "score": 8188,
          "metrics": {
            "걷기": 15,
            "생활체육": 17,
            "운동환경": 19
          }
        },
        {
          "province": "제주특별자치도",
          "region_name": "제주시",
          "national_rank": 5,
          "regional_rank": 1,
          "score": 9180,
          "metrics": {
            "걷기": 2,
            "생활체육": 7,
            "운동환경": 3
          }
        }
      ]
    }
  ],
  "official": [
    {
      "province": "서울특별시",
      "region_name": "관악구",
      "national_rank": 21,
      "regional_rank": 7,
      "previous_rank": 23,
      "rank_change": 2,
      "is_hot": false,
      "state": "rising",
      "score": 79,
      "metrics": {
        "접근성": 15,
        "시설": 18,
        "프로그램": 26
      }
    },
    {
      "province": "경기도",
      "region_name": "수원시",
      "national_rank": 4,
      "regional_rank": 2,
      "previous_rank": 4,
      "rank_change": 0,
      "is_hot": false,
      "state": "top",
      "score": 92,
      "metrics": {
        "접근성": 4,
        "시설": 2,
        "프로그램": 7
      }
    },
    {
      "province": "부산광역시",
      "region_name": "해운대구",
      "national_rank": 1,
      "regional_rank": 1,
      "previous_rank": 2,
      "rank_change": 1,
      "is_hot": false,
      "state": "top",
      "score": 97,
      "metrics": {
        "접근성": 2,
        "시설": 1,
        "프로그램": 3
      }
    },
    {
      "province": "대전광역시",
      "region_name": "유성구",
      "national_rank": 2,
      "regional_rank": 1,
      "previous_rank": 3,
      "rank_change": 1,
      "is_hot": false,
      "state": "top",
      "score": 95,
      "metrics": {
        "접근성": 1,
        "시설": 4,
        "프로그램": 2
      }
    },
    {
      "province": "강원특별자치도",
      "region_name": "춘천시",
      "national_rank": 13,
      "regional_rank": 1,
      "previous_rank": 15,
      "rank_change": 2,
      "is_hot": false,
      "state": "rising",
      "score": 84,
      "metrics": {
        "접근성": 16,
        "시설": 12,
        "프로그램": 9
      }
    },
    {
      "province": "충청북도",
      "region_name": "청주시",
      "national_rank": 7,
      "regional_rank": 1,
      "previous_rank": 8,
      "rank_change": 1,
      "is_hot": false,
      "state": "rising",
      "score": 89,
      "metrics": {
        "접근성": 8,
        "시설": 7,
        "프로그램": 11
      }
    },
    {
      "province": "인천광역시",
      "region_name": "연수구",
      "national_rank": 6,
      "regional_rank": 1,
      "previous_rank": 7,
      "rank_change": 1,
      "is_hot": false,
      "state": "rising",
      "score": 90,
      "metrics": {
        "접근성": 5,
        "시설": 9,
        "프로그램": 8
      }
    },
    {
      "province": "대구광역시",
      "region_name": "수성구",
      "national_rank": 9,
      "regional_rank": 1,
      "previous_rank": 11,
      "rank_change": 2,
      "is_hot": false,
      "state": "rising",
      "score": 87,
      "metrics": {
        "접근성": 10,
        "시설": 10,
        "프로그램": 6
      }
    },
    {
      "province": "전북특별자치도",
      "region_name": "전주시",
      "national_rank": 10,
      "regional_rank": 1,
      "previous_rank": 9,
      "rank_change": -1,
      "is_hot": false,
      "state": "falling",
      "score": 86,
      "metrics": {
        "접근성": 12,
        "시설": 8,
        "프로그램": 14
      }
    },
    {
      "province": "울산광역시",
      "region_name": "남구",
      "national_rank": 11,
      "regional_rank": 1,
      "previous_rank": 13,
      "rank_change": 2,
      "is_hot": false,
      "state": "rising",
      "score": 85,
      "metrics": {
        "접근성": 11,
        "시설": 13,
        "프로그램": 12
      }
    },
    {
      "province": "세종특별자치시",
      "region_name": "세종시",
      "national_rank": 5,
      "regional_rank": 1,
      "previous_rank": 6,
      "rank_change": 1,
      "is_hot": false,
      "state": "rising",
      "score": 91,
      "metrics": {
        "접근성": 6,
        "시설": 3,
        "프로그램": 9
      }
    },
    {
      "province": "충청남도",
      "region_name": "천안시",
      "national_rank": 12,
      "regional_rank": 1,
      "previous_rank": 10,
      "rank_change": -2,
      "is_hot": false,
      "state": "falling",
      "score": 84,
      "metrics": {
        "접근성": 13,
        "시설": 11,
        "프로그램": 15
      }
    },
    {
      "province": "경상북도",
      "region_name": "포항시",
      "national_rank": 8,
      "regional_rank": 1,
      "previous_rank": 12,
      "rank_change": 4,
      "is_hot": false,
      "state": "rising",
      "score": 88,
      "metrics": {
        "접근성": 9,
        "시설": 6,
        "프로그램": 10
      }
    },
    {
      "province": "경상남도",
      "region_name": "창원시",
      "national_rank": 14,
      "regional_rank": 1,
      "previous_rank": 16,
      "rank_change": 2,
      "is_hot": false,
      "state": "rising",
      "score": 82,
      "metrics": {
        "접근성": 15,
        "시설": 14,
        "프로그램": 13
      }
    },
    {
      "province": "전남광주통합특별시",
      "region_name": "광주권",
      "national_rank": 15,
      "regional_rank": 1,
      "previous_rank": 14,
      "rank_change": -1,
      "is_hot": false,
      "state": "falling",
      "score": 81,
      "metrics": {
        "접근성": 14,
        "시설": 16,
        "프로그램": 17
      }
    },
    {
      "province": "제주특별자치도",
      "region_name": "제주시",
      "national_rank": 3,
      "regional_rank": 1,
      "previous_rank": 1,
      "rank_change": -2,
      "is_hot": false,
      "state": "top",
      "score": 94,
      "metrics": {
        "접근성": 3,
        "시설": 5,
        "프로그램": 1
      }
    }
  ]
};


const mascotDefs = {
  "서울특별시": { short:"서울", kind:"star", body:"#f8fbff", accent:"#73bdf0", dark:"#40608c" },
  "부산광역시": { short:"부산", kind:"bird", body:"#f8fbff", accent:"#5aaee8", dark:"#355b84" },
  "대구광역시": { short:"대구", kind:"apple", body:"#ef8f78", accent:"#79b85b", dark:"#7a4d4f" },
  "인천광역시": { short:"인천", kind:"pilot", body:"#f8fbff", accent:"#6daedb", dark:"#425b84" },
  "광주광역시": { short:"광주", kind:"flower", body:"#ffd7e4", accent:"#ee8dae", dark:"#7e5671" },
  "대전광역시": { short:"대전", kind:"robot", body:"#f4f6ff", accent:"#738bd4", dark:"#43537d" },
  "울산광역시": { short:"울산", kind:"whale", body:"#81c7e8", accent:"#f0c45f", dark:"#355f7d" },
  "세종특별자치시": { short:"세종", kind:"scholar", body:"#fff8ec", accent:"#303847", dark:"#6e584b" },
  "경기도": { short:"경기", kind:"dog", body:"#fffaf4", accent:"#5d9fe4", dark:"#5d5969" },
  "강원특별자치도": { short:"강원", kind:"bear", body:"#fffdf9", accent:"#79b977", dark:"#5b6870" },
  "충청북도": { short:"충북", kind:"turtle", body:"#a7d69e", accent:"#5fae8f", dark:"#4f6c64" },
  "충청남도": { short:"충남", kind:"cow", body:"#d7a36a", accent:"#f3d382", dark:"#745649" },
  "전북특별자치도": { short:"전북", kind:"rice", body:"#fff9ed", accent:"#e2a85a", dark:"#7f654d" },
  "전라남도": { short:"전남", kind:"dolphin", body:"#77bfe6", accent:"#f0c66d", dark:"#3e6b88" },
  "경상북도": { short:"경북", kind:"scholar-book", body:"#f5e6c9", accent:"#303847", dark:"#735e4d" },
  "경상남도": { short:"경남", kind:"bird-cap", body:"#f8fbff", accent:"#5f9ee0", dark:"#455e86" },
  "제주특별자치도": { short:"제주", kind:"stone", body:"#74747b", accent:"#f29a57", dark:"#4f5058" }
};

const provinceAliases = [
  ["서울특별시", ["서울특별시","서울시","서울"]],
  ["부산광역시", ["부산광역시","부산시","부산"]],
  ["대구광역시", ["대구광역시","대구시","대구"]],
  ["인천광역시", ["인천광역시","인천시","인천"]],
  ["광주광역시", ["광주광역시","광주시","광주"]],
  ["대전광역시", ["대전광역시","대전시","대전"]],
  ["울산광역시", ["울산광역시","울산시","울산"]],
  ["세종특별자치시", ["세종특별자치시","세종시","세종"]],
  ["경기도", ["경기도","경기"]],
  ["강원특별자치도", ["강원특별자치도","강원도","강원"]],
  ["충청북도", ["충청북도","충북"]],
  ["충청남도", ["충청남도","충남"]],
  ["전북특별자치도", ["전북특별자치도","전라북도","전북"]],
  ["전라남도", ["전라남도","전남"]],
  ["경상북도", ["경상북도","경북"]],
  ["경상남도", ["경상남도","경남"]],
  ["제주특별자치도", ["제주특별자치도","제주도","제주"]]
];

function flattenAddress(value){
  if(!value) return "";
  if(typeof value === "string") return value;
  if(Array.isArray(value)) return value.map(flattenAddress).join(" ");
  if(typeof value === "object") return Object.values(value).map(flattenAddress).join(" ");
  return String(value);
}

function resolveProvinceFromProfile(profile){
  if(!profile) return null;
  const haystack=[profile.province,profile.sido,profile.address,profile.road_address,profile.jibun_address,profile.region_name]
    .map(flattenAddress).filter(Boolean).join(" ");
  for(const [province,aliases] of provinceAliases){
    if(aliases.some(alias=>haystack.includes(alias))) return province;
  }
  return profile.province || null;
}

function mascotMeta(province){ return mascotDefs[province] || null; }

function face(cx=60,cy=49){
  return `<circle cx="${cx-10}" cy="${cy}" r="3.4" fill="#303544"/><circle cx="${cx+10}" cy="${cy}" r="3.4" fill="#303544"/><path d="M54 ${cy+10} Q60 ${cy+15} 66 ${cy+10}" fill="none" stroke="#303544" stroke-width="2.4" stroke-linecap="round"/><circle cx="44" cy="${cy+8}" r="4" fill="#f6a9b5" opacity=".72"/><circle cx="76" cy="${cy+8}" r="4" fill="#f6a9b5" opacity=".72"/>`;
}
function baseBody(body,accent,dark){
  return `<ellipse cx="60" cy="75" rx="28" ry="28" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M38 80 Q27 86 30 94 Q37 96 43 89" fill="${accent}" opacity=".9"/><path d="M82 80 Q93 86 90 94 Q83 96 77 89" fill="${accent}" opacity=".9"/><ellipse cx="60" cy="101" rx="18" ry="6" fill="${dark}" opacity=".08"/>`;
}
function kindMarkup(def){
  const {kind,body,accent,dark}=def;
  switch(kind){
    case "star": return `<path d="M60 13 70 36 96 38 76 54 82 81 60 66 38 81 44 54 24 38 50 36Z" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M43 73 Q32 81 37 90 Q46 90 51 82" fill="${accent}"/>${face(60,49)}<path d="M38 82 Q60 94 82 82" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>`;
    case "bird": return `${baseBody(body,accent,dark)}<path d="M39 57 Q46 27 60 30 Q74 27 81 57 Q74 38 60 40 Q46 38 39 57" fill="${dark}"/>${face(60,57)}<path d="M55 66 65 66 60 72Z" fill="#f0b24a"/><path d="M43 35 Q59 23 77 36" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>`;
    case "apple": return `<path d="M33 52 Q31 28 51 25 Q58 24 61 30 Q69 22 82 28 Q94 39 87 61 Q82 86 60 95 Q38 86 33 52Z" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M59 28 Q61 14 74 10 Q76 23 63 30" fill="${accent}"/><path d="M55 29 Q48 17 39 17 Q43 30 55 34" fill="${accent}" opacity=".9"/>${face(60,53)}`;
    case "pilot": return `${baseBody(body,accent,dark)}<path d="M42 44 Q60 29 78 44" fill="none" stroke="${accent}" stroke-width="7"/><circle cx="50" cy="39" r="8" fill="none" stroke="${dark}" stroke-width="3"/><circle cx="70" cy="39" r="8" fill="none" stroke="${dark}" stroke-width="3"/><path d="M58 39H62" stroke="${dark}" stroke-width="3"/>${face(60,61)}<path d="M37 78 25 69M83 78 95 69" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>`;
    case "flower": return `<g fill="${body}" stroke="#fff" stroke-width="3"><ellipse cx="60" cy="27" rx="14" ry="19"/><ellipse cx="83" cy="41" rx="14" ry="19" transform="rotate(55 83 41)"/><ellipse cx="77" cy="70" rx="14" ry="19" transform="rotate(120 77 70)"/><ellipse cx="43" cy="70" rx="14" ry="19" transform="rotate(-120 43 70)"/><ellipse cx="37" cy="41" rx="14" ry="19" transform="rotate(-55 37 41)"/></g><circle cx="60" cy="50" r="25" fill="#fff9fb"/>${face(60,50)}<path d="M55 77 60 93 65 77" fill="${accent}"/>`;
    case "robot": return `<rect x="29" y="29" width="62" height="56" rx="24" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M60 29V17M60 17l7-6" stroke="${accent}" stroke-width="4" stroke-linecap="round"/><circle cx="68" cy="10" r="4" fill="${accent}"/><rect x="38" y="40" width="44" height="27" rx="12" fill="${dark}"/>${face(60,52)}<path d="M39 84 Q60 102 81 84" fill="${accent}" opacity=".9"/>`;
    case "whale": return `<path d="M25 65 Q29 34 62 36 Q88 37 91 58 Q94 75 79 87 Q64 98 44 88 Q31 82 25 65Z" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M85 64 Q99 55 104 64 Q99 77 87 78" fill="${accent}"/><path d="M48 34 Q48 20 43 14M54 34 Q58 20 63 15" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>${face(58,60)}`;
    case "scholar": case "scholar-book": return `${baseBody(body,accent,dark)}<path d="M38 35 82 35 75 25 45 25Z" fill="${accent}"/><path d="M44 25 Q60 15 76 25" fill="${dark}"/>${face(60,57)}${kind==="scholar-book"?`<path d="M45 78 Q60 73 60 91 Q45 86 45 78ZM75 78 Q60 73 60 91 Q75 86 75 78Z" fill="#5b7398" stroke="#fff" stroke-width="2"/>`:`<path d="M51 79h18v13H51z" fill="#5b7398" rx="2"/>`}`;
    case "dog": return `${baseBody(body,accent,dark)}<path d="M37 48 Q25 35 30 60 Q36 69 43 61M83 48 Q95 35 90 60 Q84 69 77 61" fill="${dark}" opacity=".85"/>${face(60,58)}<path d="M41 80 Q60 91 79 80" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/><circle cx="60" cy="83" r="4" fill="#fff"/>`;
    case "bear": return `${baseBody(body,accent,dark)}<circle cx="40" cy="39" r="11" fill="${body}" stroke="#fff" stroke-width="3"/><circle cx="80" cy="39" r="11" fill="${body}" stroke="#fff" stroke-width="3"/>${face(60,58)}<path d="M38 82 Q60 96 82 82" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>`;
    case "turtle": return `<ellipse cx="60" cy="67" rx="31" ry="29" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M37 49 Q60 31 83 49 Q76 73 60 87 Q44 73 37 49Z" fill="${accent}" opacity=".55"/><circle cx="60" cy="52" r="20" fill="#dff1d9"/>${face(60,53)}<path d="M27 67h-8M93 67h8" stroke="${dark}" stroke-width="6" stroke-linecap="round"/>`;
    case "cow": return `${baseBody(body,accent,dark)}<path d="M42 40 31 28 Q29 45 41 51M78 40 89 28 Q91 45 79 51" fill="${accent}"/><path d="M48 34 Q60 26 72 34" fill="${body}"/>${face(60,57)}<ellipse cx="60" cy="72" rx="10" ry="7" fill="#f3c6ae"/><circle cx="56" cy="72" r="1.8" fill="${dark}"/><circle cx="64" cy="72" r="1.8" fill="${dark}"/>`;
    case "rice": return `${baseBody(body,accent,dark)}<path d="M40 74 Q60 63 80 74 L75 91 H45Z" fill="${accent}"/><path d="M44 75 Q60 61 76 75" fill="#fff" stroke="#fff" stroke-width="5"/>${face(60,54)}<path d="M31 45 Q44 35 53 37" stroke="#e0ba67" stroke-width="4" stroke-linecap="round"/>`;
    case "dolphin": return `<path d="M25 68 Q35 35 67 39 Q84 40 94 29 Q95 50 84 57 Q94 72 82 84 Q65 98 43 88 Q28 82 25 68Z" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M80 82 Q95 89 98 77" fill="${accent}"/>${face(58,61)}<path d="M46 38 Q53 27 61 38" fill="${accent}" opacity=".8"/>`;
    case "bird-cap": return `${baseBody(body,accent,dark)}<path d="M39 56 Q47 30 60 32 Q73 30 81 56 Q72 40 60 42 Q48 40 39 56" fill="${dark}"/>${face(60,60)}<path d="M38 35 Q58 19 80 34 L72 42 Q54 33 38 44Z" fill="${accent}"/><circle cx="74" cy="27" r="5" fill="#f0b65d"/>`;
    case "stone": return `<path d="M36 93 Q30 67 35 38 Q39 18 60 18 Q81 18 85 38 Q90 67 84 93Z" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M45 32H75M42 42H78" stroke="${dark}" stroke-width="3" stroke-linecap="round" opacity=".55"/>${face(60,57)}<circle cx="84" cy="79" r="9" fill="${accent}"/><path d="M84 70 Q87 61 94 62" stroke="#5ea35e" stroke-width="3"/>`;
    default: return `${baseBody(body,accent,dark)}${face(60,57)}`;
  }
}

let mascotSvgSeq = 0;
const mascotRasterAssets={"서울특별시":"./assets/mascots/seoul.webp","부산광역시":"./assets/mascots/busan.webp","대구광역시":"./assets/mascots/daegu.webp","인천광역시":"./assets/mascots/incheon.webp","광주광역시":"./assets/mascots/gwangju.webp","대전광역시":"./assets/mascots/daejeon.webp","울산광역시":"./assets/mascots/ulsan.webp","세종특별자치시":"./assets/mascots/sejong.webp","경기도":"./assets/mascots/gyeonggi.webp","강원특별자치도":"./assets/mascots/gangwon.webp","충청북도":"./assets/mascots/chungbuk.webp","충청남도":"./assets/mascots/chungnam.webp","전북특별자치도":"./assets/mascots/jeonbuk.webp","전라남도":"./assets/mascots/jeonnam.webp","경상북도":"./assets/mascots/gyeongbuk.webp","경상남도":"./assets/mascots/gyeongnam.webp","제주특별자치도":"./assets/mascots/jeju.webp"};
function regionMascotSvg(province){
  const def=mascotDefs[province] || {short:"지역",kind:"bear",body:"#f8fbff",accent:"#9ab8d8",dark:"#5b6678"};
  const asset=mascotRasterAssets[province];
  if(asset) return `<img class="region-mascot-svg region-mascot-raster" src="${asset}" alt="${def.short} 지역 마스코트">`;
  const shadowId=`mascotShadow-${++mascotSvgSeq}`;
  return `<svg class="region-mascot-svg" viewBox="0 0 120 120" role="img" aria-label="${def.short} 지역 마스코트"><defs><filter id="${shadowId}" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#61708f" flood-opacity=".18"/></filter></defs><g filter="url(#${shadowId})">${kindMarkup(def)}</g></svg>`;
}



const API_BASE = globalThis.USIMUNKKA_API_BASE || "";
const USE_MOCK = globalThis.USIMUNKKA_USE_MOCK !== false;
const SESSION_KEY = "usimunkka.mock.session.userId";
const FRIENDSHIP_KEY = "usimunkka.mock.friendships";
let memorySession = null;
let memoryFriendships = null;

const clone = value => structuredClone(value);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function storageGet(key) {
  try { return globalThis.localStorage?.getItem(key) ?? null; } catch { return null; }
}
function storageSet(key, value) {
  try { globalThis.localStorage?.setItem(key, value); } catch { /* file preview may deny storage */ }
}
function storageRemove(key) {
  try { globalThis.localStorage?.removeItem(key); } catch { /* ignore */ }
}
function getMockSessionId() {
  const stored = storageGet(SESSION_KEY);
  if (stored) return Number(stored);
  return memorySession;
}
function setMockSessionId(id) {
  memorySession = id;
  if (id == null) storageRemove(SESSION_KEY); else storageSet(SESSION_KEY, String(id));
}
function getMockFriendships() {
  if (memoryFriendships) return memoryFriendships;
  const stored = storageGet(FRIENDSHIP_KEY);
  if (stored) {
    try { memoryFriendships = JSON.parse(stored); return memoryFriendships; } catch { /* use defaults */ }
  }
  memoryFriendships = clone(mockCatalog.friendships);
  return memoryFriendships;
}
function saveMockFriendships(value) {
  memoryFriendships = value;
  storageSet(FRIENDSHIP_KEY, JSON.stringify(value));
}
function getUser(id) { return mockCatalog.users.find(user => user.id === Number(id)) || null; }
function buildActivityPayload() {
  const history=[...mockCatalog.activity_daily].sort((a,b)=>a.date.localeCompare(b.date));
  const latest=history.at(-1), previous=history.at(-2);
  const prevByProvince=new Map((previous?.regions||[]).map(row=>[row.province,row]));
  const activity=(latest?.regions||[]).map(row=>{
    const prev=prevByProvince.get(row.province);
    const previousRank=prev?.national_rank ?? row.national_rank;
    const rankChange=previousRank-row.national_rank;
    const scoreChange=prev?.score ? (row.score-prev.score)/prev.score : 0;
    const isHot=scoreChange>=0.035 || rankChange>=5;
    let state="";
    if (row.national_rank<=3) state="top";
    else if (isHot) state="hot";
    else if (rankChange>0) state="rising";
    else if (rankChange<0) state="falling";
    return {...clone(row),previous_rank:previousRank,rank_change:rankChange,is_hot:isHot,state,score_change_rate:scoreChange};
  });
  return {generated_at:mockCatalog.generated_at,snapshot_date:latest?.date||null,window_days:latest?.window_days||7,activity,official:clone(mockCatalog.official)};
}
function buildFriendRanking(userId) {
  const me=getUser(userId);
  if (!me) throw Object.assign(new Error("UNAUTHENTICATED"),{status:401});
  const ids=[me.id,...(getMockFriendships()[String(me.id)]||[])];
  const members=[...new Set(ids)].map(getUser).filter(Boolean);
  const current=[...members].sort((a,b)=>b.activity_score-a.activity_score);
  const previous=[...members].sort((a,b)=>b.previous_activity_score-a.previous_activity_score);
  const previousRank=new Map(previous.map((u,i)=>[u.id,i+1]));
  return current.map((user,i)=>({
    rank:i+1,nickname:user.nickname,activity_score:user.activity_score,
    rank_change:(previousRank.get(user.id)||i+1)-(i+1),is_me:user.id===me.id,color:user.color
  }));
}
async function liveRequest(path, options={}) {
  const response=await fetch(`${API_BASE}${path}`,{
    credentials:"include",
    headers:{Accept:"application/json",...(options.body?{"Content-Type":"application/json"}:{}),...(options.headers||{})},
    ...options
  });
  if (response.status===401) throw Object.assign(new Error("UNAUTHENTICATED"),{status:401});
  if (!response.ok) throw Object.assign(new Error(`API ${response.status}`),{status:response.status});
  if (response.status===204) return null;
  return response.json();
}

const rankingApi = {
  isMock: USE_MOCK,
  async getRankings() {
    if (USE_MOCK) { await sleep(120); return buildActivityPayload(); }
    return liveRequest("/api/rankings");
  },
  async getMe() {
    if (USE_MOCK) { await sleep(60); const id=getMockSessionId(); return id?clone(getUser(id)):null; }
    try { return await liveRequest("/api/users/me"); } catch (error) { if (error.status===401) return null; throw error; }
  },
  async getFriendRanking() {
    if (USE_MOCK) { await sleep(90); return buildFriendRanking(getMockSessionId()); }
    const payload = await liveRequest("/api/friends/ranking");
    return Array.isArray(payload) ? payload : (payload?.ranking || []);
  },
  async addFriend(friendCode) {
    const code=String(friendCode||"").trim().toUpperCase();
    if (!code) throw Object.assign(new Error("친구 코드를 입력해 주세요."),{status:400});
    if (USE_MOCK) {
      await sleep(90);
      const me=getUser(getMockSessionId());
      if (!me) throw Object.assign(new Error("로그인이 필요합니다."),{status:401});
      const friend=mockCatalog.users.find(user=>user.friend_code.toUpperCase()===code);
      if (!friend) throw Object.assign(new Error("해당 친구 코드를 찾지 못했어요."),{status:404});
      if (friend.id===me.id) throw Object.assign(new Error("내 친구 코드는 등록할 수 없어요."),{status:400});
      const all=getMockFriendships(), key=String(me.id), list=all[key]||[];
      if (list.includes(friend.id)) return {friend:clone(friend),already_exists:true};
      all[key]=[...list,friend.id]; saveMockFriendships(all);
      return {friend:clone(friend),already_exists:false};
    }
    return liveRequest("/api/friends",{method:"POST",body:JSON.stringify({friend_code:code})});
  },
  async loginForPreview() {
    if (!USE_MOCK) return {redirect:"/login?next=/"};
    const requested = Number(new URLSearchParams(globalThis.location?.search || "").get("mockUser"));
    const user = getUser(requested) || getUser(7);
    setMockSessionId(user.id); return clone(user);
  },
  async logout() {
    if (USE_MOCK) { setMockSessionId(null); return; }
    try { await liveRequest("/api/auth/logout",{method:"POST"}); } catch (error) { if (error.status!==404) throw error; }
  },
  getLoginUrl() { return "/login?next=/"; },
  getMockFriendCodes() { return USE_MOCK?mockCatalog.users.filter(u=>u.id!==7).map(u=>u.friend_code):[]; }
};



const positions = {
  "서울특별시":[151,145],"경기도":[176,174],"인천광역시":[103,148],"강원특별자치도":[303,107],"충청북도":[244,238],
  "세종특별자치시":[203,255],"충청남도":[145,278],"대전광역시":[203,281],"전북특별자치도":[190,350],
  "전남광주통합특별시":[149,424],"대구광역시":[320,345],"경상북도":[334,295],"경상남도":[278,415],
  "울산광역시":[367,365],"부산광역시":[351,407],"제주특별자치도":[111,610]
};
const shortNames={"서울특별시":"서울","경기도":"경기","인천광역시":"인천","강원특별자치도":"강원","충청북도":"충북","세종특별자치시":"세종","충청남도":"충남","대전광역시":"대전","전북특별자치도":"전북","전남광주통합특별시":"광주권","대구광역시":"대구","경상북도":"경북","경상남도":"경남","울산광역시":"울산","부산광역시":"부산","제주특별자치도":"제주"};
const stateLabel={hot:"🔥 HOT",top:"🏆 TOP",rising:"▲ RISING",falling:"▼ FALLING"};
let payload=null,mode="activity",selectedProvince="서울특별시",lastFocusedRegion=null,currentUser=null;
const $=selector=>document.querySelector(selector); const $$=selector=>[...document.querySelectorAll(selector)];
const modeData=()=>payload?.[mode]||[]; const findRegion=province=>modeData().find(item=>item.province===province);
const formatDate=date=>date?date.replaceAll("-","."):"";
const rankingProvinceFor=province=>{
  if(!province) return null;
  if(payload?.activity?.some(row=>row.province===province)) return province;
  if(["광주광역시","전라남도"].includes(province) && payload?.activity?.some(row=>row.province==="전남광주통합특별시")) return "전남광주통합특별시";
  return province;
};
const popupMascotProvinceFor=province=>province==="전남광주통합특별시"?"광주광역시":province;

const mascotLabelFor=province=>mascotMeta(province)?.short||shortNames[province]||province||'지역';
function championDecorMarkup(){
  return `<span class="champion-aura" aria-hidden="true"></span><span class="champion-prop champion-medal" aria-hidden="true">🥇</span><span class="champion-prop champion-trophy" aria-hidden="true">🏆</span><span class="champion-caption" aria-hidden="true"><b>TOP 1</b></span>`;
}
function renderMascotWithMotion(container,province,{champion=false,label='지역 마스코트'}={}){
  if(!container)return;
  container.classList.toggle('is-champion',Boolean(champion));
  container.innerHTML=`<div class="mascot-stage">${regionMascotSvg(province)}${champion?championDecorMarkup():''}</div>`;
  container.setAttribute('aria-label',champion?`${label} · 1위 축하 모션`:label);
}

function renderMarkers(){
  const svg=$(".map-stage"); svg.querySelector(".dynamic-markers")?.remove();
  const ns="http://www.w3.org/2000/svg",layer=document.createElementNS(ns,"g"); layer.classList.add("dynamic-markers");
  $$(".region").forEach(region=>{const data=findRegion(region.dataset.region);region.dataset.state=data?.state||""});
  modeData().forEach(item=>{const point=positions[item.province];if(!point)return;const g=document.createElementNS(ns,"g");g.setAttribute("class",`map-marker ${item.state}`);g.setAttribute("transform",`translate(${point[0]} ${point[1]-25})`);const circle=document.createElementNS(ns,"circle");circle.setAttribute("class","marker-bg");circle.setAttribute("r","15");g.append(circle);const text=document.createElementNS(ns,"text");text.setAttribute("y","1");text.textContent=item.national_rank;g.append(text);if(item.is_hot){const fire=document.createElementNS(ns,"text");fire.setAttribute("class","flame");fire.setAttribute("x","14");fire.setAttribute("y","-12");fire.textContent="🔥";g.append(fire)}if(item.national_rank<=3){[[-17,-13],[18,-9],[17,16]].forEach(([x,y],i)=>{const s=document.createElementNS(ns,"circle");s.setAttribute("class","spark");s.setAttribute("cx",x);s.setAttribute("cy",y);s.setAttribute("r",i===1?"2.3":"1.8");s.style.animationDelay=`${i*160}ms`;g.prepend(s)})}layer.append(g)});svg.append(layer)
}
function renderRegion(province){
  const data=findRegion(province)||modeData()[0];if(!data)return;selectedProvince=data.province;$$('.region').forEach(r=>r.setAttribute('aria-pressed',String(r.dataset.region===data.province)));$('#regionProvince').textContent=data.province;$('#regionName').textContent=data.region_name;const popupMascot=$('#regionPopupMascot');if(popupMascot){const mascotProvince=popupMascotProvinceFor(data.province);renderMascotWithMotion(popupMascot,mascotProvince,{champion:data.national_rank===1,label:`${mascotLabelFor(mascotProvince)} 지역 마스코트`})}$('#nationalRank').textContent=`전국 ${data.national_rank}위`;const sign=data.rank_change>0?'▲':data.rank_change<0?'▼':'—';$('#rankChange').innerHTML=`${data.previous_rank}위 → ${data.national_rank}위 <b>${sign} ${Math.abs(data.rank_change)}</b>`;const status=$('#regionStatus');status.className=`status-chip ${data.state}`;status.textContent=stateLabel[data.state]||'💪 ACTIVE';const max=Math.max(...Object.values(data.metrics),30);$('#metricList').innerHTML=Object.entries(data.metrics).map(([name,rank])=>`<div class="metric"><span>${name}</span><i style="--fill:${Math.max(12,100-rank/max*78)}%"></i><strong>${rank}위</strong></div>`).join('');$('#updatedAt').textContent=mode==='activity'?`최근 ${payload?.window_days||7}일 활동 · ${formatDate(payload?.snapshot_date)} 기준`:'공공데이터 기준 · 2026년';
}
function openRegionPopup(trigger){const popup=$('#regionPopup');if(!popup)return;lastFocusedRegion=trigger||document.activeElement;popup.hidden=false;document.body.classList.add('region-popup-open');requestAnimationFrame(()=>$('.close-detail')?.focus())}
function closeRegionPopup(){const popup=$('#regionPopup');if(!popup||popup.hidden)return;popup.hidden=true;document.body.classList.remove('region-popup-open');if(lastFocusedRegion?.focus)lastFocusedRegion.focus()}
function renderTicker(){const items=modeData().filter(x=>x.rank_change>0).sort((a,b)=>b.rank_change-a.rank_change).slice(0,5);$('#risingTicker').innerHTML=items.length?items.map(x=>`<span class="ticker-item">${shortNames[x.province]||x.province} ${x.region_name}<b>▲ ${x.rank_change}</b></span>`).join(''):"<span class='ticker-item'>상승 지역 데이터가 아직 없어요.</span>"}
function renderMyRegion(){
  const panel=$('#myRegionPanel'), mascot=$('#myRegionMascot');
  if(!currentUser){
    panel?.classList.add('is-guest');
    $('#myRegionProvince').textContent='LOGIN';$('#myRegionRank').textContent='—';$('#myRegionChange').textContent='';
    $('#myRegionName').textContent='로그인 후 확인';$('#myRegionHeatCopy').textContent='';
    $('#myRegionAddress').textContent='로그인 정보의 주소지를 기준으로 보여줘요.';
    $('#myRegionSummary').textContent='로그인하면 내 지역 순위와 마스코트가 보여요.';
    if(mascot) renderMascotWithMotion(mascot,null,{champion:false,label:'내 지역 마스코트'});
    return;
  }
  panel?.classList.remove('is-guest');
  const resolvedProvince=resolveProvinceFromProfile(currentUser);
  const rankingProvince=rankingProvinceFor(resolvedProvince);
  const data=payload?.activity?.find(row=>row.province===rankingProvince);
  const meta=mascotMeta(resolvedProvince);
  $('#myRegionProvince').textContent=meta?.short||shortNames[rankingProvince]||resolvedProvince||'지역';
  $('#myRegionAddress').textContent=currentUser.address||currentUser.road_address||`${resolvedProvince||''} ${currentUser.region_name||''}`.trim();
  $('#myRegionName').textContent=currentUser.region_name||data?.region_name||meta?.short||'내 지역';
  $('#myRegionHeatCopy').textContent=' 운동 열기가';
  if(mascot) renderMascotWithMotion(mascot,resolvedProvince,{champion:data?.national_rank===1,label:`${mascotLabelFor(resolvedProvince)} 지역 마스코트`});
  if(!data){
    $('#myRegionRank').textContent='—';$('#myRegionChange').textContent='';
    $('#myRegionSummary').textContent='아직 이 지역의 랭킹 데이터가 없어요.';
    return;
  }
  $('#myRegionRank').textContent=data.regional_rank||data.national_rank;
  const sign=data.rank_change>0?'▲':data.rank_change<0?'▼':'—';$('#myRegionChange').textContent=`${sign} ${Math.abs(data.rank_change)}`;
  const rate=Math.round(Math.abs((data.score_change_rate||0)*100));
  $('#myRegionSummary').textContent=data.score_change_rate>0?`이번 주 ${rate}% 올랐어요.`:data.score_change_rate<0?`이번 주 ${rate}% 내려갔어요.`:'이번 주 순위를 유지하고 있어요.';
}
function renderProfile(){const avatar=$('#profileAvatar'),text=$('#profileText');if(currentUser){avatar.textContent=currentUser.nickname.slice(0,1);text.textContent=`${currentUser.nickname} · ${currentUser.region_name||''}`;}else{avatar.textContent='↪';text.textContent='로그인';}}
function setFriendGate(loggedIn){$('#friendAuthGate').hidden=loggedIn;$('#friendMemberArea').hidden=!loggedIn;if(!loggedIn){$('#friendList').innerHTML='';$('#rivalMessage').hidden=true;}}
async function renderFriends(){
  setFriendGate(Boolean(currentUser)); if(!currentUser)return;
  try{
    const friends=await rankingApi.getFriendRanking();
    $('#friendList').innerHTML=friends.length?friends.map(friend=>`<div class="friend-row ${friend.is_me?'is-me':''}"><span class="friend-rank">${friend.rank}</span><span class="avatar" style="--avatar:${friend.color}">${friend.nickname[0]}</span><span class="friend-name"><strong>${friend.nickname}${friend.is_me?' (나)':''}</strong><small>${friend.rank_change>0?`▲ ${friend.rank_change}계단`:friend.rank_change<0?`▼ ${Math.abs(friend.rank_change)}계단`:'순위 유지'}</small></span><span class="friend-score"><strong>${friend.activity_score.toLocaleString()}점</strong><small>${friend.rank===1?'🔥 선두':friend.is_me?'추격 중':''}</small></span></div>`).join(''):"<div class='friend-empty'>아직 등록된 친구가 없어요.</div>";
    const me=friends.find(x=>x.is_me),above=me&&friends.find(x=>x.rank===me.rank-1),rival=$('#rivalMessage');
    if(me&&above){rival.hidden=false;rival.innerHTML=`<span>⚡</span><p><strong>${above.nickname}까지 ${(above.activity_score-me.activity_score).toLocaleString()}점 남았어요.</strong><br>오늘 운동하면 차이를 줄일 수 있어요.</p>`}else{rival.hidden=true;rival.innerHTML=''}
  }catch(error){if(error.status===401){currentUser=null;renderProfile();setFriendGate(false);return}throw error}
}
async function refreshSession(){currentUser=await rankingApi.getMe();renderProfile();setFriendGate(Boolean(currentUser));renderMyRegion();await renderFriends();if(rankingApi.isMock){const codes=rankingApi.getMockFriendCodes();$('#friendCodeHint').textContent=`MOCK 친구 코드: ${codes.slice(0,4).join(' · ')}`}}
async function handleLogin(){if(!rankingApi.isMock){location.href=rankingApi.getLoginUrl();return}currentUser=await rankingApi.loginForPreview();renderProfile();renderMyRegion();await renderFriends()}
async function handleProfile(){if(!currentUser){await handleLogin();return}if(rankingApi.isMock){if(confirm('MOCK 로그인 상태를 종료할까요?')){await rankingApi.logout();currentUser=null;renderProfile();setFriendGate(false);renderMyRegion();}}}
async function handleFriendAdd(event){event.preventDefault();const input=$('#friendCodeInput'),feedback=$('#friendAddFeedback'),code=input.value.trim();feedback.className='friend-add-feedback';feedback.textContent='';try{const result=await rankingApi.addFriend(code);feedback.classList.add('is-success');feedback.textContent=result.already_exists?`${result.friend.nickname}님은 이미 친구예요.`:`${result.friend.nickname}님을 친구로 추가했어요.`;input.value='';await renderFriends()}catch(error){feedback.classList.add('is-error');feedback.textContent=error.message||'친구 추가 중 문제가 발생했어요.'}}
function setMode(next){mode=next;$$('.rank-tab').forEach(tab=>{const active=tab.dataset.mode===mode;tab.classList.toggle('is-active',active);tab.setAttribute('aria-pressed',String(active))});$('#modeKicker').textContent=mode==='activity'?'WEEKLY HEAT MAP':'OFFICIAL SPORTS INDEX';$('#map-heading').textContent=mode==='activity'?'지역별 운동 열기':'지역 생활체육 랭킹';renderMarkers();renderRegion(selectedProvince);renderTicker()}
function bind(){
  $$('.rank-tab').forEach(tab=>tab.addEventListener('click',()=>setMode(tab.dataset.mode)));$$('.region').forEach(region=>{const select=()=>{renderRegion(region.dataset.region);openRegionPopup(region)};region.addEventListener('click',select);region.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select()}})});$('.close-detail').addEventListener('click',closeRegionPopup);$('#regionPopup').addEventListener('click',e=>{if(e.target===e.currentTarget)closeRegionPopup()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeRegionPopup()});$('#retryButton').addEventListener('click',load);$('#friendLoginButton').addEventListener('click',handleLogin);$('#profileButton').addEventListener('click',handleProfile);$('#friendAddForm').addEventListener('submit',handleFriendAdd)
}
async function load(){
  $('#mapLoading').hidden=false;$('#mapError').hidden=true;try{payload=await rankingApi.getRankings();renderMarkers();renderRegion(selectedProvince);renderTicker();await refreshSession();renderMyRegion()}catch(error){console.error(error);$('#mapError').hidden=false}finally{$('#mapLoading').hidden=true}
}
bind();load();

