const express = require("express");

const app = express();

app.use(express.static("public")); //use this method after require but before the routes

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/views/works.html");
});
app.listen(3000, () => {
  console.log("server listening");
});
