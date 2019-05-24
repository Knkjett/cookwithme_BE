const {app} = require('./app')
const port = 5001;


app.get('/', (req, res) => {
  res.json(`Welcome to Cook With Me!`);
})

app.listen(process.env.PORT || port, ()=>{
  console.log(`Listening. CookWithMe on port: ${port}`)
})
