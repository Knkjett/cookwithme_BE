const express = require('express');
const webscraper = express.Router();

const webscrapeService = require('../services/webscrape')

// ALL RECIPE
webscraper.post('/allrecipe/ingredients', (req, res) => {
  const {sourceurl} = req.body;
  webscrapeService.allrecipeIngred(sourceurl)
  .then((ingred)=> res.send(ingred) )
});

webscraper.post('/allrecipe/steps', (req, res) => {
  const {sourceurl} = req.body;
  webscrapeService.allrecipeSteps(sourceurl)
  .then((ingred)=> res.send(ingred))
});
// FOOD NETWORK
webscraper.post('/foodnetwork/ingredients', (req, res) => {
  const {sourceurl} = req.body;
  webscrapeService.networkIngred(sourceurl)
  .then((ingred)=> res.send(ingred) )
});

webscraper.post('/foodnetwork/steps', (req, res) => {
  const {sourceurl} = req.body;
  webscrapeService.networkSteps(sourceurl)
  .then((ingred)=> res.send(ingred))
});
// PIONEER WOMAN
webscraper.post('/pioneerwoman/ingredients', (req, res) => {
  const {sourceurl} = req.body;
  webscrapeService.pioneerIngred(sourceurl)
  .then((ingred)=> res.send(ingred) )
});

webscraper.post('/pioneerwoman/steps', (req, res) => {
  const {sourceurl} = req.body;
  webscrapeService.pioneerSteps(sourceurl)
  .then((ingred)=> res.send(ingred))
});

// CLOSET COOKING
webscraper.post('/closetcooking/ingredients', (req, res) => {
  const {sourceurl} = req.body;
  webscrapeService.closetIngred(sourceurl)
  .then((ingred)=> res.send(ingred) )
});

webscraper.post('/closetcooking/steps', (req, res) => {
  const {sourceurl} = req.body;
  webscrapeService.closetSteps(sourceurl)
  .then((ingred)=> res.send(ingred))
});



module.exports = webscraper;
