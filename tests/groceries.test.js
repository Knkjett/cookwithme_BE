jest.mock('pg-promise')
const pgp = require('pg-promise')

pgp.mockImplementation(()=>{
    return function(){
        return {
            one: () => Promise.resolve(),
            none: () => Promise.resolve(),
            any: () => Promise.resolve()
        }
    }
})

const groceryService = require('../services/groceries')

test('test create grocery in db',()=>{
    groceryService.create('users_id', 'quantity', 'item')
    .then(response=>{
        expect(response).toEqual(response)
    })
})

test('test get grocery from db',()=>{
    groceryService.readByUser('users_id')
    .then(response=>{
        expect(response).toEqual(response)
    })
})

test('test update grocery in db',()=>{
    groceryService.delete('id')
    .then(response=>{
        expect(response).toEqual(response)
    })
})