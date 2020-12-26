const controllerDemo = require("./../controllers/demo.controller");
// const { checkValidator } = require("./../middlewares/check.validator");
// const { body, param } = require("express-validator");
const express = require("express");
const app = express();

app.post("/demo", controllerDemo.demo);

module.exports = app;
