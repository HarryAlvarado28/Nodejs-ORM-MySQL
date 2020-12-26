const express = require("express");
const app = express();
const User = require("./../models/user.model");

app.get("/user", async (req, res) => {
  try {
    await User.findAll().then((r) => {
      console.log(
        "User.findAll().then((r) established successfully.".bgGreen.black
      );
      return res.json({
        ok: true,
        msg: "GET Method - All Users",
        info: r,
      });
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    return res.json({
      ok: false,
      msg: "GET Method - All Users",
      info: err,
    });
  }
});

app.get("/user/:id", async (req, res) => {
  let id = req.params.id;
  try {
    await User.findAll({ where: { id } }).then((r) => {
      console.log(
        "User.findAll().then((r) established successfully.".bgGreen.black
      );
      return res.json({
        ok: true,
        msg: "GET Method - Single User",
        info: r,
      });
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    return res.json({
      ok: false,
      msg: "GET Method - Single User",
      info: err,
    });
  }
});

app.post("/user", async (req, res) => {
  try {
    let u = await User.create({
      email: req.body.email,
      psw: req.body.psw,
    });
    console.log("u:->", u);
    return res.json({
      ok: true,
      msg: "POST Method - Create User",
      info: u,
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    return res.json({
      ok: false,
      msg: "POST Method - DB STATUS",
      info: err,
    });
  }
});

app.put("/user/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let u = await User.update(
      {
        email: req.body.email,
        psw: req.body.psw,
        dateupdate: new Date(),
      },
      { where: { id } }
    );
    console.log("u:->", u);
    return res.json({
      ok: true,
      msg: "PUT Method - Update User",
      info: u,
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    return res.json({
      ok: false,
      msg: "PUT Method",
      info: err,
    });
  }
});

app.delete("/user/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let u = await User.destroy({ where: { id } });
    console.log("u:->", u);
    return res.json({
      ok: true,
      msg: "DELETE Method - Delete User",
      info: u,
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    return res.json({
      ok: false,
      msg: "DELETE Method",
      info: err,
    });
  }
});

module.exports = app;
