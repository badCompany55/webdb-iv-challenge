const express = require("express");
const helm = require("helmet");
const morg = require("morgan");
const cookBookRouter = require("./routes/cookbook.js");

const server = express();

server.use(helm(), express.json(), morg("dev"));
server.use("/cookbook", cookBookRouter);

server.get("/", (req, res) => {
  res.send(`<h1> Testing Home Page</h1>`);
});

module.exports = server;
