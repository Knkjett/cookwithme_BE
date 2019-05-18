const {db} = require('./dbConnect');
const UserService = {};


UserService.create = (email,token,recentlyViewed) =>{
  return db.none('INSERT INTO users (email,token,recentlyViewed) VALUES (${email}, ${token},${recentlyViewed});',{
    email,
    token,
    recentlyViewed
  });
}
UserService.read = (email) =>{
  return db.one ('SELECT id from users WHERE email=${email}',{
    email
  });
}
UserService.update = (id,recentlyViewed) =>{
  return db.none('UPDATE users SET recentlyViewed = ${recentlyViewed} WHERE id=${id}',{
    id,
    recentlyViewed
  })
}

module.exports = UserService;