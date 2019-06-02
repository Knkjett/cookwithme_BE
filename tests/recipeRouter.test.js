const request = require('supertest')

const {app} = require('../app')

jest.mock('../services/recipes')

const recipeService = require('../services/recipes')

test('Testing GET a user', done=>{
    recipeService.readByUser.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .get('/recipes/users/1')
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})



test('GET request fail test', done =>{
    recipeService.readByUser.mockImplementation(() => Promise.reject());
    request(app)
        .get('/recipes/users/1')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})

test('Testing GET All user', done=>{
    recipeService.readAll.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .get('/recipes/users/')
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})

test('GET all users request fail test', done =>{
    recipeService.readAll.mockImplementation(() => Promise.reject());
    request(app)
        .get('/recipes/users/')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})

test('Testing POST a user', done=>{
    recipeService.create.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .post('/recipes')
        .send({
            'name':'name'
        })
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})

test('POST request fail test', done =>{
    recipeService.create.mockImplementation(() => Promise.reject());
    request(app)
        .post('/recipes')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})

test('Testing DELETE request', done=>{
    recipeService.delete.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .delete('/recipes/1')
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})

test('DELETE request fail test', done =>{
    recipeService.delete.mockImplementation(() => Promise.reject());
    request(app)
        .delete('/recipes/1')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})

test('Testing check recipe route a user', done=>{
    recipeService.checkRecipe.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .post('/check')
        .send({
            url:'name'
        })
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})