require("dotenv").config();
require("./config/process.env");
const db = require("./config/database");
const cors = require("cors");
const colors = require("colors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    ok: true,
    msg: "GET Method - Cool!",
  });
});

app.post("/", function (req, res) {
  return res.json({
    ok: true,
    msg: "POST Method - Cool!",
  });
});

app.get("/dbstatus", async (req, res) => {
  //   db.a;
  try {
    await db.sa;
    console.log("Connection has been established successfully.".bgGreen.black);
    return res.json({
      ok: true,
      msg: "GET Method - DB STATUS",
      info: "Connection has been established successfully.",
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    return res.json({
      ok: false,
      msg: "GET Method - DB STATUS",
      info: err,
    });
  }
});

const User = require("./models/user.model");
app.get("/user", async (req, res) => {
  try {
    await User.findAll().then((r) => {
      console.log(
        "User.findAll().then((r) established successfully.".bgGreen.black
      );
      return res.json({
        ok: true,
        msg: "GET Method - DB STATUS",
        info: r,
      });
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    return res.json({
      ok: false,
      msg: "GET Method - DB STATUS",
      info: err,
    });
  }
});

let port = process.env.PORT;

app.listen(port, () => {
  console.log(`Express Server PORT[${port}]--[ONLINE]-------------`.yellow);
});

module.exports = app;
