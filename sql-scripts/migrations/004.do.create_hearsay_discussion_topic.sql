CREATE TYPE topic_category AS ENUM (

    'Police Brutality',
    'Criminal Justice Reform',
    'War on Drugs',
    'What the System is Doing Well',
    'Capital Punishment',
    'Crime Prevention',
    'Juvenile Justice',
    'Police-Community Relations',
    'Prison System',
    'Race',
    'Random'
);
ALTER TABLE hearsay_discussion 
    ADD COLUMN
        topic_name topic_category;
