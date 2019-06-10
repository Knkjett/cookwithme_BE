DROP DATABASE IF EXISTS cookwithme;
CREATE DATABASE cookwithme;

\c cookwithme;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  token TEXT NOT NULL,
  recentlyViewed TEXT []
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id),
  title VARCHAR NOT NULL,
  source_img TEXT,
  source_url TEXT,
  ingredients TEXT [],
  steps TEXT []
);

CREATE TABLE groceries (
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id),
  quantity INT,
  item VARCHAR NOT NULL
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id),
  recipe_id INT REFERENCES recipes(id)
);

