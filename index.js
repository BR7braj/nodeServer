//Setting up exprees server and activating it
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server Started at 3000");
});

//Setting up request handlers
app.get("/greet", (req, res, next) => {
  res.json(["Brajesh", "Kumar", "Mondal"]);
});
