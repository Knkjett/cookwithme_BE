const request = require('supertest')

const {app} = require('../app')

jest.mock('../services/users')

const userService = require('../services/users')

test('Testing GET a user', done=>{
    userService.read.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .get('/users/test@test.com')
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})

test('GET request fail test', done =>{
    userService.read.mockImplementation(() => Promise.reject());
    request(app)
        .get('/users/test@test.com')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})

test('Testing POST a user', done=>{
    userService.create.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .post('/users')
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
    userService.create.mockImplementation(() => Promise.reject());
    request(app)
        .post('/users')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})

test('Testing PUT user', done=>{
    userService.update.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .put('/users/1')
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

test('PUT request fail test', done =>{
    userService.update.mockImplementation(() => Promise.reject());
    request(app)
        .put('/users/1')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})
