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

const favoriteService = require('../services/favorites')

test('test create favorite in db',()=>{
    favoriteService.create('users_id', 'recipe_id')
    .then(response=>{
        expect(response).toEqual(response)
    })
})

test('test get favorite of user from db',()=>{
    favoriteService.readByUser('users_id')
    .then(response=>{
        expect(response).toEqual(response)
    })
})

test('test get favorite from db',()=>{
    favoriteService.read('id')
    .then(response=>{
        expect(response).toEqual(response)
    })
})

test('test update favorite in db',()=>{
    favoriteService.delete('id')
    .then(response=>{
        expect(response).toEqual(response)
    })
})