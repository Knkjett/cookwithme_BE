const { app } = require("./app");
const port = process.env.PORT || 5002;

app.get("/", (req, res) => {
  res.json(`Welcome to Cook With Me!`);
});

app.listen(port, () => {
  console.log(`Listening. CookWithMe on port: ${port}`);
});
