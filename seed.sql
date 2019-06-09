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
  email VARCHAR REFERENCES users(email),
  recipe_id INT REFERENCES recipes(id)
);

INSERT INTO users (email, token, recentlyViewed) VALUES
('john@email.com', 'token', ARRAY['']),
('jane@email.com', 'test', ARRAY['']),
('test@test.com', 'token', ARRAY['']);

INSERT INTO recipes(users_id, title, source_img, source_url, ingredients, steps) VALUES
(1,'Apple pie','https://images-gmi-pmc.edge-generalmills.com/75593ed5-420b-4782-8eae-56bdfbc2586b.jpg','',ARRAY['2lbs of Apples','Dough','1 tbsp Sugar'],ARRAY['Peel and dice apples','Combine apple slices and sugar','Layer Pie tin with dough and fill with apples','Cover pie tin with dough and poke air holes','Bake at 350 degrees F for 25mins or until brown']),
(2,'Homemade Focaccia Bread','https://images.media-allrecipes.com/userphotos/560x315/4486805.jpg','https://www.allrecipes.com/recipe/6780/homemade-focaccia-bread/',ARRAY['3 1/2 cups all-purpose flour','1 teaspoon white sugar','1 teaspoon salt1 tablespoon active dry yeast','1 cup water'],ARRAY['Combine 1 cup flour, sugar, salt, and yeast. Mix well. Heat water and vegetable oil until warm, and add to yeast mixture along with the egg. Blend with an electric mixer at low speed until moistened. Beat for 2 additional minutes. Stir in 1 3/4 cup flour while beating, until dough pulls away from side of bowl.','Knead in 3/4 cup flour on floured surface. Cover dough with a bowl, and let sit for 5 minutes. Place dough on a greased baking sheet. Roll out to 12 inch circle. Cover with greased plastic wrap and a cloth towel. Place in a warm place for 30 minutes.','Uncover dough, and poke holes in it with a spoon handle at 1 inch intervals. Drizzle olive oil on dough, and sprinkle with crushed rosemary.','Bake at 400 degrees F (205 degrees C) for 17 to 27 minutes, until just golden. Remove from baking sheet, and cool on rack.']),
(2,'Beef Wellington','https://www.simplyrecipes.com/wp-content/uploads/2009/06/beef-wellington-horiz-a2-1800.jpg','',ARRAY['Beef','Wellington'],ARRAY['Wellington','Beef']);

INSERT INTO groceries(users_id, quantity, item) VALUES
(1,1,'lb of apples'),
(2,1,'All Purpose flour'),
(1,1,'Bag of sugar'),
(3,1,'Everything'),
(3,2,'Everything else');

INSERT INTO favorites(users_id, recipe_id) VALUES
(1,1),
(3,1),
(3,2),
(3,3);
