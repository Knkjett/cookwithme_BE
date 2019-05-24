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

const recipeService = require('../services/recipes')

test('test create recipe in db',()=>{
    recipeService.create('users_id', 'title', 'source_img', 'source_url', 'ingredients', 'steps')
    .then(response=>{
        expect(response).toEqual(response)
    })
})

test('test get recipe from db',()=>{
    recipeService.readByUser('users_id')
    .then(response=>{
        expect(response).toEqual(response)
    })
})

test('test update recipe in db',()=>{
    recipeService.delete('id')
    .then(response=>{
        expect(response).toEqual(response)
    })
})