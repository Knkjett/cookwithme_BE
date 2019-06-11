const request = require('supertest')

jest.mock('../services/webscrape.js')
const {app} = require('../app')
const webscrapeService = require('../services/webscrape')

test('Testing POST all ingredients',done=>{
    webscrapeService.allrecipeIngred.mockImplementation(()=>Promise.resolve({'test':1}))
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
    webscrapeService.allrecipeSteps.mockImplementation(()=>Promise.resolve({'test':1}))
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

test('Testing POST foodnetwork/ingredients',done=>{
    webscrapeService.networkIngred.mockImplementation(()=>Promise.resolve({'test':1}))
    request(app)
    .post('/webscrape//foodnetwork/ingredients')
    .send({
        'sourceurl':'url'
    })
    .then(response=>{
        expect(response).toEqual({'test':1})
    })
    .catch(e=>done())
})

test('Testing POST foodnetwork/steps',done=>{
    webscrapeService.networkSteps.mockImplementation(()=>Promise.resolve({'test':1}))
    request(app)
    .post('/webscrape/foodnetwork/steps')
    .send({
        'sourceurl':'url'
    })
    .then(response=>{
        expect(response).toEqual({'test':1})
    })
    .catch(e=>done())
})

test('Testing POST pioneerwoman/ingredients',done=>{
    webscrapeService.pioneerIngred.mockImplementation(()=>Promise.resolve({'test':1}))
    request(app)
    .post('/webscrape/pioneerwoman/ingredients')
    .send({
        'sourceurl':'url'
    })
    .then(response=>{
        expect(response).toEqual({'test':1})
    })
    .catch(e=>done())
})

test('Testing POST pioneerwoman/steps',done=>{
    webscrapeService.pioneerSteps.mockImplementation(()=>Promise.resolve({'test':1}))
    request(app)
    .post('/webscrape/pioneerwoman/steps')
    .send({
        'sourceurl':'url'
    })
    .then(response=>{
        expect(response).toEqual({'test':1})
    })
    .catch(e=>done())
})

// test('Testing POST closetcooking/ingredients',done=>{
//     webscrapeService.closetIngred.mockImplementation(()=>Promise.resolve({'test':1}))
//     request(app)
//     .post('/webscrape/closetcooking/ingredients')
//     .send({
//         'sourceurl':'url'
//     })
//     .then(response=>{
//         expect(response).toEqual({'test':1})
//     })
//     .catch(e=>done())
// })

// test('Testing POST closetcooking/steps',done=>{
//     webscrapeService.closetSteps.mockImplementation(()=>Promise.resolve({'test':1}))
//     request(app)
//     .post('/webscrape/closetcooking/steps')
//     .send({
//         'sourceurl':'url'
//     })
//     .then(response=>{
//         expect(response).toEqual({'test':1})
//     })
//     .catch(e=>done())
// })