const express = require('express');

const { createTask,getTasks } = require('../controller/userController.js'); // Change here
const route = express.Router();

// Define your routes here
route.get("/", (req, res) => {
  res.send("Welcome to the API");
});
module.exports = route;

route.post("/addTask", createTask);
route.get('/Tasks',getTasks);