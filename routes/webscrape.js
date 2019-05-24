const express = require('express');
const webscraper = express.Router();

const webscrapeService = require('../services/webscrape')

// ALL RECIPE
webscraper.post('/allrecipe/ingredients', (req, res) => {
  const {sourceurl} = req.body;
  webscrapeService.readIngred(sourceurl)
  .then((ingred)=> res.send(ingred) )
});

webscraper.post('/allrecipe/steps', (req, res) => {
  const {sourceurl} = req.body;
  webscrapeService.readSteps(sourceurl)
  .then((ingred)=> res.send(ingred))
});


module.exports = webscraper;
