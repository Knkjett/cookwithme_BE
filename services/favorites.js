const {db} = require('./dbConnect');
const favoriteService = {};


// CREATE
favoriteService.create = (users_id, recipe_id) => {
  const sql = `
  INSERT INTO favorites (users_id, recipe_id)
  VALUES ($[users_id], $[recipe_id])
  RETURNING id`; 
  return db.one(sql, {users_id, recipe_id})
}


// READ
favoriteService.read = (id) => {
  const sql = `
  SELECT * FROM favorites
  WHERE id=$[id]`;
  return db.one(sql, {id})
}

favoriteService.getIDfrmEmail = (email) => {
  const sql = `
  SELECT id FROM users
  WHERE email=$[email]`;
  return db.one(sql, {email})
}

favoriteService.getFavID = (users_id,recipe_id) =>{
  const sql = `SELECT id from favorites WHERE users_id=$[users_id] and recipe_id=$[recipe_id]`;
  return db.one(sql,{users_id,recipe_id})
}

// READ BY USER_ID
favoriteService.readByUser = (users_id) => {
  const sql = `
  SELECT * FROM favorites
  INNER JOIN users
  on favorites.users_id = users.id
  WHERE users.id=$[users_id]`;
  return db.any(sql, {users_id})
}

// DELETE
favoriteService.delete = (id) => {
  const sql = `
  DELETE from favorites
  WHERE id=$[id]`;
  return db.none(sql, {id})
}


module.exports = favoriteService;