-- F1 Django/MySQL bootstrap
-- Run this file once as a MySQL administrator before sql/01_create_staging.sql.
-- The application user/password are intentionally not created here so credentials
-- are never committed to the repository. Create them using your local policy.

CREATE DATABASE IF NOT EXISTS f1_pipeline
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

-- Required by sql/02_load_staging.sql and the pipeline's LOAD DATA statements.
SET GLOBAL local_infile = 1;

-- Required by stored functions in the validation/schema scripts.
SET GLOBAL log_bin_trust_function_creators = 1;
