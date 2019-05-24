const request = require('supertest')

jest.mock('../services/webscrape.js')
const {app} = require('../app')
const webscrapeService = require('../services/webscrape')

test('Testing POST all ingredients',done=>{
    webscrapeService.readIngred.mockImplementation(()=>Promise.resolve({'test':1}))
    request(app)
    .post('/webscrape/allrecipe/ingredients')
    .send({
        'sourceurl':'url'
    })
    .then(response=>{
        expect(response).toEqual({'test':1})
    })
    .catch(e=>done())
})

test('Testing POST all steps',done=>{
    webscrapeService.readSteps.mockImplementation(()=>Promise.resolve({'test':1}))
    request(app)
    .post('/webscrape/allrecipe/steps')
    .send({
        'sourceurl':'url'
    })
    .then(response=>{
        expect(response).toEqual({'test':1})
    })
    .catch(e=>done())
})