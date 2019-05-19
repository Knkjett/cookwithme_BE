const express = require('express');
const groceryRouter = express.Router();
const groceryService = require('../services/groceries');

// CREATE
groceryRouter.post('/', (req, res, next) => {
  const {users_id, quantity, item} = req.body;
  groceryService.create(users_id, quantity, item)
    .then(data => res.json({success:`grocery created with ID ${id}`}))
    .catch(err => next(err));
})


// GET BY USER
groceryRouter.get('/users/:users_id', (req, res, next) => {
  const {users_id} = req.params;
  groceryService.readByUser(users_id)
    .then(data => res.json(data))
    .catch(err => next(err));
})


// DELETE
groceryRouter.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  groceryService.delete(id)
    .then(data => res.json({success: `Deleted groceries with ID ${id}`}))
    .catch(err => next(err));
})


module.exports = groceryRouter;