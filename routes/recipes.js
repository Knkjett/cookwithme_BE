const express = require('express');
const recipeRouter = express.Router();
const recipeService = require('../services/recipes');

// CREATE
recipeRouter.post('/', (req, res, next) => {
  const {users_id, title, source_img, source_url, ingredients, steps} = req.body;
  recipeService.create(users_id, title, source_img, source_url, ingredients, steps)
    .then(data => res.json({success:`recipe created with ID ${id}`}))
    .catch(err => next(err));
})


// GET BY USER
recipeRouter.get('/users/:users_id', (req, res, next) => {
  const {users_id} = req.params;
  recipeService.readByUser(users_id)
    .then(data => res.json(data))
    .catch(err => next(err));
})


// DELETE
recipeRouter.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  recipeService.delete(id)
    .then(data => res.json({success: `Deleted recipe with ID ${id}`}))
    .catch(err => next(err));
})


module.exports = recipeRouter;