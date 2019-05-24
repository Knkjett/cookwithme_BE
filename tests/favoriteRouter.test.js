const request = require('supertest')

const {app} = require('../app')

jest.mock('../services/favorites')

const favoriteService = require('../services/favorites')

test('Testing GET favorite by id', done=>{
    favoriteService.read.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .get('/favorites/1')
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})

test('GET request fail test', done =>{
    favoriteService.read.mockImplementation(() => Promise.reject());
    request(app)
        .get('/favorites/1')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})

test('Testing GET favorites by a user', done=>{
    favoriteService.readByUser.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .get('/favorites/users/1')
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})

test('GET request fail test', done =>{
    favoriteService.readByUser.mockImplementation(() => Promise.reject());
    request(app)
        .get('/favorites/users/1')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})

test('Testing POST a user', done=>{
    favoriteService.create.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .post('/favorites')
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
    favoriteService.create.mockImplementation(() => Promise.reject());
    request(app)
        .post('/favorites')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})

test('Testing DELETE request', done=>{
    favoriteService.delete.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .delete('/favorites/1')
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})

test('DELETE request fail test', done =>{
    favoriteService.delete.mockImplementation(() => Promise.reject());
    request(app)
        .delete('/favorites/1')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})
