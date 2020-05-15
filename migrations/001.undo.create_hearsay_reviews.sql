DROP TABLE IF EXISTS hearsay_reviews CASCADE;

ALTER TABLE hearsay_reviews
    DROP COLUMN IF EXISTS user_id;
    
DROP TABLE IF EXISTS hearsay_users CASCADE;

DROP TABLE IF EXISTS hearsay_discussion;
DROP TABLE IF EXISTS hearsay_topics;


ALTER TABLE hearsay_discussion
    DROP COLUMN IF EXISTS topic_name;

ALTER TABLE hearsay_reviews 
    DROP COLUMN IF EXISTS incident_date;
ALTER TABLE hearsay_reviews
    DROP COLUMN IF EXISTS review_date;