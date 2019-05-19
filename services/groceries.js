const {db} = require('./dbConnect');
const groceryService = {};


// CREATE
groceryService.create = (users_id, quantity, item) => {
  const sql = `
  INSERT INTO groceries (users_id, quantity, item)
  VALUES ($[users_id], $[quantity], $[item])
  RETURNING id`;
  return db.one(sql, {users_id, quantity, item})
}


// READ BY USER_ID
groceryService.readByUser = (users_id) => {
  const sql = `
  SELECT * FROM groceries
  INNER JOIN users
  on groceries.users_id = users.id
  WHERE users.id=$[users_id]`;
  return db.any(sql, {users_id})
}

// DELETE
groceryService.delete = (id) => {
  const sql = `
  DELETE from groceries
  WHERE id=$[id]`;
  return db.none(sql, {id})
}


module.exports = groceryService;