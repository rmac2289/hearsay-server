ALTER TABLE hearsay_discussion 
    DROP COLUMN likes;

ALTER TABLE hearsay_discussion 
    ADD COLUMN likes INTEGER DEFAULT 0;

ALTER TABLE hearsay_discussion
    ADD COLUMN dislikes INTEGER DEFAULT 0;