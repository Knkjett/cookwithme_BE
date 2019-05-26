const {db} = require('./dbConnect');
const recipeService = {};


// CREATE
recipeService.create = (users_id, title, source_img, source_url, ingredients, steps) => {
  const sql = `
  INSERT INTO recipes (users_id, title, source_img, source_url, ingredients, steps)
  VALUES ($[users_id], $[title], $[source_img], $[source_url], $[ingredients], $[steps])
  RETURNING id`;
  return db.one(sql, {users_id, title, source_img, source_url, ingredients, steps})
}


// READ BY USER_ID
recipeService.readByUser = (users_id) => {
  const sql = `
  SELECT * FROM recipes
  INNER JOIN users
  on recipes.users_id = users.id
  WHERE users.id=$[users_id]`;
  return db.any(sql, {users_id})
}

// DELETE
recipeService.delete = (id) => {
  const sql = `
  DELETE from recipes
  WHERE id=$[id]`;
  return db.none(sql, {id})
}


// CHECK RECIPE 
recipeService.checkRecipe = (url) => {
  const sql = ` 
   SELECT * FROM recipes WHERE source_url = $[url]`;
   return db.any(sql, {url})
}
module.exports = recipeService;