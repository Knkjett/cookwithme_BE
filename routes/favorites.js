const express = require('express');
const favoriteRouter = express.Router();
const favoriteService = require('../services/favorites');

// CREATE
favoriteRouter.post('/', (req, res, next) => {
  const {users_id, recipe_id} = req.body;

  favoriteService.create(users_id, recipe_id)
    .then(data => res.json(data))
    .catch(err => next(err));
})



// GET
favoriteRouter.get('/:id', (req, res, next) => {
  const {id} = req.params;

  favoriteService.read(id)
    .then(data => res.json(data))
    .catch(err => next(err));
})


// GET BY USER
favoriteRouter.get('/users/:users_id', (req, res, next) => {
  const {users_id} = req.params;

  favoriteService.readByUser(users_id)
    .then(data => res.json(data))
    .catch(err => next(err));
})

favoriteRouter.get('/:users_id/favID/:recipe_id',(req,res,next)=>{
  const {users_id,recipe_id} = req.params;
  favoriteService.getFavID(users_id,recipe_id)
  .then(data=>res.json(data))
  .catch(err => next(err));
})

favoriteRouter.get('/:email/email', (req, res, next) => {
  const {email} = req.params;

  favoriteService.getIDfrmEmail(email)
    .then(data => res.json(data))
    .catch(err => next(err));
})


// DELETE
favoriteRouter.delete('/:id', (req, res, next) => {
  const {id} = req.params;
  console.log('gggg',id)
  favoriteService.delete(id)
    .then(data => res.json({success: `Deleted favorites with ID ${id}`}))
    .catch(err => next(err));
})


module.exports = favoriteRouter;