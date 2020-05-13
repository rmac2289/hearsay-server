CREATE TABLE hearsay_reviews (
    id SERIAL PRIMARY KEY,
    state TEXT NOT NULL,
    department TEXT NOT NULL,
    nature TEXT NOT NULL,
    rating INTEGER NOT NULL,
    date TIMESTAMPTZ DEFAULT now() NOT NULL,
    comments TEXT NOT NULL,
    user_id INTEGER REFERENCES hearsay_users(id) ON DELETE CASCADE NOT NULL
);