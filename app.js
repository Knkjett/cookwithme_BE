const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

// MIDDLEWARE
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next()
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use(cors());

// ROUTERS
const userRouter = require('./routes/users');
const recipeRouter = require('./routes/recipes');
const favoriteRouter = require('./routes/favorites');
const groceryRouter = require('./routes/groceries');
const webscrape = require('./routes/webscrape')


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
// });

// BROWSER ROUTES
app.use('/users', userRouter);
app.use('/recipes', recipeRouter);
app.use('/favorites', favoriteRouter);
app.use('/groceries', groceryRouter);
app.use('/webscrape', webscrape)

module.exports = {app}