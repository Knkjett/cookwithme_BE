const request = require('supertest')
const {app} = require('../app')
jest.mock('../services/groceries')
const groceryService = require('../services/groceries')

test('Testing GET user groceries',done=>{
    groceryService.readByUser.mockImplementation(()=>Promise.resolve({'test':1}))
    request(app)
        .get('/groceries/users/1')
        .then(response=>{
            expect(response).toEqual({'test':1})
            done()
        })
        .catch(e=>{
            done()
        })
})

test('Testing fail GET user groceries',done=>{
    groceryService.readByUser.mockImplementation(()=>Promise.reject())
    request(app)
        .get('/groceries/users/1')
        .then(response=>{
            done()
        })
        .catch(e=>{
            expect(response).toEqual({'test':1})
            done()
        })
})

test('Testing POST user groceries',done=>{
    groceryService.create.mockImplementation(()=>Promise.resolve({'test':1}))
    request(app)
        .get('/groceries')
        .then(response=>{
            expect(response).toEqual({'test':1})
            done()
        })
        .catch(e=>{
            done()
        })
})

test('Testing fail POST user groceries',done=>{
    groceryService.readByUser.mockImplementation(()=>Promise.reject())
    request(app)
        .get('/groceries')
        .then(response=>{
            done()
        })
        .catch(e=>{
            expect(response).toEqual({'test':1})
            done()
        })
})

test('Testing DELETE request', done=>{
    groceryService.delete.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .delete('/groceries/1')
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})

test('DELETE request fail test', done =>{
    groceryService.delete.mockImplementation(() => Promise.reject());
    request(app)
        .delete('/groceries/1')
        .then(response => {
            done();
        })
        .catch(e => {
            expect(response).toBe(undefined)
            done();
          })
})
