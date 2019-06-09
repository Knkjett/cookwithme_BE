const express = require('express');
const recipeRouter = express.Router();
const recipeService = require('../services/recipes');

// CREATE
recipeRouter.post('/', (req, res, next) => {
  const {users_id, title, source_img, source_url, ingredients, steps} = req.body;
  recipeService.create(users_id, title, source_img, source_url, ingredients, steps)
    .then(data => res.json(data))
    .catch(err => next(err))
})


// GET BY USER
recipeRouter.get('/users/:users_id', (req, res, next) => {
  const {users_id} = req.params;
  recipeService.readByUser(users_id)
    .then(data => res.json(data))
    .catch(err => next(err));
})

// GET ALL RECIPE FROM USERS 
recipeRouter.get('/users/', (req, res, next) => { 
  recipeService.readAll()
  .then(data => res.json(data))
  .catch(err => next(err)); 
})

// DELETE
recipeRouter.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  recipeService.delete(id)
    .then(data => res.json({success: `Deleted recipe with ID ${data.id}`}))
    .catch(err => next(err));
})


// CHECK RECIPE 
recipeRouter.post('/check', (req,res, next) => {
   const { url } = req.body;
 recipeService.checkRecipe(url)
 .then( data => {
   if(data.length === 0 ){
     res.send(false)
   }
   else {
     res.send(data)
   }
 })
})

module.exports = recipeRouter;