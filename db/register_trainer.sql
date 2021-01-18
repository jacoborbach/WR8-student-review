insert into trainers (name, password)
VALUES ($1, $2)
returning *;