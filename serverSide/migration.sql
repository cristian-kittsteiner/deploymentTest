DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title TEXT,
    genre TEXT
);

INSERT INTO movies (title, genre) VALUES ('TOP GUN', 'Action');
INSERT INTO movies (title, genre) VALUES ('Hercules', 'Animation');
INSERT INTO movies (title, genre) VALUES ('The Notebook', 'Romance');