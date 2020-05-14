ALTER TABLE hearsay_reviews
    ADD COLUMN 
        incident_date DATE DEFAULT now() NOT NULL;

ALTER TABLE hearsay_reviews
    DROP COLUMN date;

ALTER TABLE hearsay_reviews
    ADD COLUMN review_date TIMESTAMPTZ DEFAULT now() NOT NULL;