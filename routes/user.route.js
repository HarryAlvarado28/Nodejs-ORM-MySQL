const controllerUser = require("./../controllers/user.controller");
const { checkValidator } = require("./../middlewares/check.validator");
const { body, param } = require("express-validator");
const express = require("express");
const app = express();

app.get("/user", controllerUser.lists);

app.get(
  "/user/:id",
  [
    param("id")
      .isNumeric()
      .withMessage("Este campo debe ser unicamente numerico"),
    checkValidator,
  ],
  controllerUser.one
);

app.post(
  "/user",
  [
    body("email").isEmail().withMessage("Es requerido el correo"),
    body("psw").isLength({ min: 7 }).withMessage("Necesitas una Password"),
    checkValidator,
  ],
  controllerUser.create
);

app.put(
  "/user/:id",
  [
    param("id")
      .isNumeric()
      .withMessage("Este campo debe ser unicamente numerico"),
    body("email").isEmail().withMessage("Es requerido el correo"),
    body("psw").isLength({ min: 7 }).withMessage("Necesitas una Password"),
    checkValidator,
  ],
  controllerUser.update
);

app.delete(
  "/user/:id",
  param("id")
    .isNumeric()
    .withMessage("Este campo debe ser unicamente numerico"),
  controllerUser.delete
);

module.exports = app;
