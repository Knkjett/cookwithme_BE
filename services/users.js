const {db} = require('./dbConnect');
const userService = {};


// CREATE
userService.create = (email,token,recentlyViewed) =>{
  return db.one('INSERT INTO users (email,token,recentlyViewed) VALUES (${email}, ${token},${recentlyViewed}) RETURNING id;',{
    email,
    token,
    recentlyViewed
  });
}

// READ
userService.read = (email) =>{
  return db.one ('SELECT id from users WHERE email=${email}',{
    email
  });
}

//UPDATE
userService.update = (id,recentlyViewed) =>{
  return db.none('UPDATE users SET recentlyViewed = ${recentlyViewed} WHERE id=${id}',{
    id,
    recentlyViewed
  })
}

module.exports = userService;