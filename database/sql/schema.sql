CREATE DATABASE IF NOT EXISTS movies;

USE movies;

-- DROP TABLE IF EXISTS movies;

CREATE TABLE IF NOT EXISTS movies (
  id          INTEGER,
  title       VARCHAR(100),
  year        VARCHAR(4),
  overview    TEXT(250),
  rating      DECIMAL(6,4),
  thumbnail   VARCHAR(250),
  genre       VARCHAR(30),
  watched     INT(1),

  UNIQUE KEY (id),
  PRIMARY KEY (id)
);
