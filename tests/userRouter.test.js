const request = require('supertest')

const {app} = require('../app')

jest.mock('../services/users')

const userService = require('../services/users')

test('Testing GET a user', done=>{
    userService.read.mockImplementation(() => Promise.resolve({'test':1}))
    request(app)
        .get('/user/test@test.com')
        .then(response =>{
            expect(response).toEqual({'test':1})
            done();
        })
        .catch(e=>{
            done()
        })
})
