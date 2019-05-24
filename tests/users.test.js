jest.mock('pg-promise')
const pgp = require('pg-promise')

pgp.mockImplementation(()=>{
    return function(){
        return {
            one: () => Promise.resolve(),
            none: () => Promise.resolve()
        }
    }
})

const userService = require('../services/users')

test('test create user in db',()=>{
    userService.create('email','token','recentlyViewed')
    .then(response=>{
        expect(response).toEqual(response)
    })
})

test('test get user from db',()=>{
    userService.read('email')
    .then(response=>{
        expect(response).toEqual(response)
    })
})

test('test update user in db',()=>{
    userService.update('id','recently viewed')
    .then(response=>{
        expect(response).toEqual(response)
    })
})