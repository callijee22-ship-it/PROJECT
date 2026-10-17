# F1 데이터 스키마

F1 원천 데이터 6개 테이블의 구조를 관리하는 폴더입니다.

- `schema.json`: 테이블별 컬럼 목록과 기본 관계 정의
- `f1_to_be_schema.sql`: MySQL 8.0 기준 레이어형 TO-BE 물리 스키마
- 상세한 타입·길이·허용값·검증 규칙은 `../standard_dictionary/column_dictionary.csv`를 기준으로 합니다.
