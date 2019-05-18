const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors')
//Routes
const {userRouter} = require('./routes/users');

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRouter);

module.exports = {app}