create table trainers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(60),
    password VARCHAR(60)
)

create table team (
name varchar(60),
trainer_id int REFERENCES trainers(id),
api_id int
)