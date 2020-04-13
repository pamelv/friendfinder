const express = require("express");
const app = express();
const API = require("./app/routing/apiRoutes");
const pages = require("./app/routing/htmlRoutes");

app.use(API);

app.use(pages);

app.get("/home", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT || 3001);
