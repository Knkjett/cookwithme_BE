const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use(cors());

// ROUTERS
const userRouter = require('./routes/users');
const recipeRouter = require('./routes/recipes');
const favoriteRouter = require('./routes/favorites');
const groceryRouter = require('./routes/groceries');
const webscrape = require('./routes/webscrape')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// BROWSER ROUTES
app.use('/users', userRouter);
app.use('/recipes', recipeRouter);
app.use('/favorites', favoriteRouter);
app.use('/groceries', groceryRouter);
app.use('/webscrape', webscrape)

module.exports = {app}