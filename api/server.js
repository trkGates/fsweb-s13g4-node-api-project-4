const express = require("express");
const server = express();
const router = require("./users/users-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h2>Server aktif</h2>`);
});

server.use("/api", router);

module.exports = server;

