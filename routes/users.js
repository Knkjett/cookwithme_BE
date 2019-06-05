const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/users');

// POST - CREATE 
userRouter.post('/', (req, res) => {
  const {email, token} = req.body;
  UserService.create(email, token)
    .then(id => {
      console.log(id)
      res.status(201);
      res.send(id);
    })
    .catch(err => {
      res.status(400);
      res.send({"Message":err})
    })
});

// GET - READ 
userRouter.get('/:email', (req, res) => {
  const {email} = req.params;
  UserService.read(email)
    .then(data => {
      res.status(200);
      res.send(data);
    })
    .catch(err => {
      res.status(400);
      res.send({"Message":err})
    })
});

// PUT - UPDATE
userRouter.put('/:id', (req, res) => {
  const {id} = req.params;
  const {recentlyViewed} = req.body;

  UserService.update(id,recentlyViewed)
    .then(data => {
      res.status(201);
      res.send({success: `Updated user: ${id} with new data.`});
    })
    .catch(err => {
      res.status(400);
      res.send({"Message":err})
    })
});

module.exports = userRouter;
