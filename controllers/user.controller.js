const User = require("./../models/user.model");
const controllerUser = {};

controllerUser.lists = async (req, res) => {
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
};

controllerUser.one = async (req, res) => {
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
};

// app.post(
//   "/user",
//   body("email").isEmail().withMessage("Es requerido el correo"),
//   body("psw").isLength({ min: 7 }).withMessage("Ncesitas una Password"),
controllerUser.create = async (req, res) => {
  // validationResult(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
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
};
// );

controllerUser.update = async (req, res) => {
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
};

controllerUser.delete = async (req, res) => {
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
};

module.exports = controllerUser;
