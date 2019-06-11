const request = require('request')
const cheerio = require('cheerio')
const webscrapeService = {}

// ALLRECIPE
webscrapeService.allrecipeIngred = url =>{
    return new Promise((resolve) => {
        let ingred = []
        request(url, function (error, response, body) {
          const $ = cheerio.load(body);
          for (let i = 0; i < $('.checkList__line').length; i++) {
            if ($('.checkList__line')[i].children[1].attribs.title && !($('.checkList__line')[i].children[1].attribs.title).includes(':')) {
              ingred.push($('.checkList__line')[i].children[1].attribs.title)
            }
          }
          resolve(ingred)
        });
    })
}

webscrapeService.allrecipeSteps = url =>{
    return new Promise((resolve) => {
        let steps = []
        request(url, function (error, response, body) {
          const $ = cheerio.load(body);
          for (let i = 0; i < $('.recipe-directions__list--item').length; i++) {
            if (($('.recipe-directions__list--item')[i].children[0])) {
              steps.push(($('.recipe-directions__list--item')[i].children[0].data).trim())
            }
          }
          resolve(steps)
        });
      })
}

// FOOD NETWORK
webscrapeService.networkIngred = (url) => {
  return new Promise((resolve) => {
    let ingred = []
    request(url, function (error, response, body) {
      const $ = cheerio.load(body);
      for (let i = 0; i < $('.o-Ingredients__a-Ingredient').length; i++) {
        ingred.push($('.o-Ingredients__a-Ingredient')[i].children[0].data)
      }
      resolve(ingred)
    });
  })
}
webscrapeService.networkSteps = (url) => {
  return new Promise((resolve) => {
    let steps = []
    request(url, function (error, response, body) {
      const $ = cheerio.load(body);
      for (let i = 0; i < $('.o-Method__m-Step').length; i++) {
        steps.push(($('.o-Method__m-Step')[i].children[0].data).trim())
      }
      resolve(steps)
    });
  })
}

// PioneerWoman
webscrapeService.pioneerIngred = (url) => {
  return new Promise((resolve) => {
    let ingred = []
    request(url, function (error, response, body) {
      const $ = cheerio.load(body);
      for (let i = 1; i < $('.rich-pin-metadata')[0].children.length; i++) {
        if (($('.rich-pin-metadata')[0].children[i].attribs) &&
          ($('.rich-pin-metadata')[0].children[i].attribs.itemprop === 'recipeIngredient')) {
          ingred.push($('.rich-pin-metadata')[0].children[i].children[0].data)
        }
      }
      resolve(ingred)
    });
  })
}
webscrapeService.pioneerSteps = (url) => {
  return new Promise((resolve) => {
    let steps = []
    let metaSteps = '';
    request(url, function (error, response, body) {
      const $ = cheerio.load(body);
      for (let i = 1; i < $('.rich-pin-metadata')[0].children.length; i++) {
        if (($('.rich-pin-metadata')[0].children[i].attribs) &&
          ($('.rich-pin-metadata')[0].children[i].attribs.itemprop === 'recipeInstructions')) {
          metaSteps = ($('.rich-pin-metadata')[0].children[i].children[0].data)
          break;
        }
      }
      metaSteps.split('\n').map((e) => {
        if (e !== '') {
          steps.push(e)
        }
      })
      resolve(steps)
    });
  })
}

// CLOSET COOKING
// webscrapeService.closetIngred = (url) => {
//   return new Promise((resolve) => {
//     let ingred = []
//     request(url, function (error, response, body) {
//       const $ = cheerio.load(body);
//       for (let i = 0; i < $('.ingredients')[0].children.length; i++) {
//         ingred.push($('.ingredients')[0].children[i].children[0].data)
//       }
//       resolve(ingred);
//     });
//   })
// }
// webscrapeService.closetSteps = (url) => {
//   return new Promise((resolve) => {
//     let steps = []
//     request(url, function (error, response, body) {
//       const $ = cheerio.load(body);
//       for (let i = 0; i < $('.instructions')[0].children.length; i++) {
//         steps.push($('.instructions')[0].children[i].children[0].data)
//       }
//       resolve(steps);
//     });
//   })
// }


module.exports = webscrapeService