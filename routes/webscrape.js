const express = require('express');
const webscraper = express.Router();
const request = require('request')
const cheerio = require('cheerio')

// ALL RECIPE
webscraper.post('/allrecipe/ingredients', (req, res) => {
  const {sourceurl} = req.body;
    return new Promise((resolve) => {
      let ingred = []
      request(sourceurl, function (error, response, body) {
        const $ = cheerio.load(body);
        for (let i = 0; i < $('.checkList__line').length; i++) {
          if ($('.checkList__line')[i].children[1].attribs.title && !($('.checkList__line')[i].children[1].attribs.title).includes(':')) {
            ingred.push($('.checkList__line')[i].children[1].attribs.title)
          }
        }
        resolve(ingred)
      });
    })
    .then((ingred)=>{
      res.send(ingred)
    })
});
webscraper.post('/allrecipe/steps', (req, res) => {
  const {sourceurl} = req.body;
  return new Promise((resolve) => {
    let steps = []
    request(sourceurl, function (error, response, body) {
      const $ = cheerio.load(body);
      for (let i = 0; i < $('.recipe-directions__list--item').length; i++) {
        if (($('.recipe-directions__list--item')[i].children[0])) {
          steps.push(($('.recipe-directions__list--item')[i].children[0].data).trim())
        }
      }
      resolve(steps)
    });
  })
    .then((ingred)=>{
      res.send(ingred)
    })
});


module.exports = webscraper;
