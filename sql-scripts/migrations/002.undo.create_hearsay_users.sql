ALTER TABLE hearsay_reviews
    DROP COLUMN IF EXISTS user_id;
    
DROP TABLE IF EXISTS hearsay_users CASCADE;