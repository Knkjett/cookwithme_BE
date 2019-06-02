
jest.mock('request')

const request = require('request')

const webscrapeService = require('../services/webscrape')

test('testing allrecipeIngred', done=>{
    request.mockImplementation((sourceurl, cb) => cb({}, {}, `
    <html>
    <div class="checkList__line">
    <span  title="foo"></span>
    <div title="foo"></div>
    </div>
    <div class="checkList__line">
    <span  title="bar"></span>
    <div title="bar"></div>
    </div>
    </html>
    `))
    webscrapeService.allrecipeIngred('test').then(data => {
        console.log("HERE", data)
        done()
    })
})

test('Testing allrecipeSteps ', done=>{
    request.mockImplementation((sourceurl, cb) => cb({}, {}, `
    <html>
    <div class="recipe-directions__list--item">
    <span  title="foo"></span>
    <div title="foo"></div>
    </div>
    <div class="recipe-directions__list--item">
    <span  title="bar"></span>
    <div title="bar"></div>
    </div>
    </html>
    `))
    webscrapeService.allrecipeSteps ('test').then(data => {
        console.log("HERE 2", data)
        done()
    })
})

test('Testing networkIngred ', done=>{
    request.mockImplementation((sourceurl, cb) => cb({}, {}, `
    <html>
    <div class="o-Ingredients__a-Ingredient">
    <span  title="foo"></span>
    <div title="foo"></div>
    </div>
    <div class="o-Ingredients__a-Ingredient">
    <span  title="bar"></span>
    <div title="bar"></div>
    </div>
    </html>
    `))
    webscrapeService.networkIngred ('test').then(data => {
        console.log("HERE 2", data)
        done()
    })
})

test('Testing networkSteps ', done=>{
    request.mockImplementation((sourceurl, cb) => cb({}, {}, `
    <html>
    <div class="o-Method__m-Step">
    <span title="foo"></span>
    <div title="foo"></div>
    </div>
    <div class="o-Method__m-Step">
    <span  title="bar"></span>
    <div title="bar"></div>
    </div>
    </html>
    `))
    webscrapeService.networkSteps ('test').then(data => {
        console.log("HERE 2", data)
        done()
    })
})

test('Testing pioneerIngreds ', done=>{
    request.mockImplementation((sourceurl, cb) => cb({}, {}, `
    <html>
    <div class="rich-pin-metadata">
    <span title="foo"></span>
    <div title="foo"></div>
    </div>
    <div class="rich-pin-metadata">
    <span  title="bar"></span>
    <div title="bar"></div>
    </div>
    </html>
    `))
    webscrapeService.pioneerIngred('test').then(data => {
        console.log("HERE 2", data)
        done()
    })
})

test('Testing pioneerSteps ', done=>{
    request.mockImplementation((sourceurl, cb) => cb({}, {}, `
    <html>
    <div class="rich-pin-metadata">
    <span title="foo"></span>
    <div title="foo"></div>
    </div>
    <div class="rich-pin-metadata">
    <span  title="bar"></span>
    <div title="bar"></div>
    </div>
    </html>
    `))
    webscrapeService.pioneerSteps('test').then(data => {
        console.log("HERE 2", data)
        done()
    })
})


