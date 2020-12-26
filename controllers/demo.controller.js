// const Product = require("../models/demo.model");
const { Product, User, Address } = require("./../models/demo.model");
const controllerDemo = {};

controllerDemo.demo = async (req, res) => {
  try {
    await Product.create(
      {
        title: "Chair",
        user: {
          firstName: "Mick",
          lastName: "Broadstone",
          addresses: [
            {
              type: "home",
              line1: "100 Main St.",
              city: "Austin",
              state: "TX",
              zip: "78704",
            },
          ],
        },
      },
      {
        include: [
          {
            association: Product.User,
            include: [User.Addresses],
          },
        ],
      }
    ).then((r) => {
      return res.json({
        ok: true,
        msg:
          "POST Method - Create Users BelongsTo / HasMany / HasOne association",
        info: r,
      });
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    return res.json({
      ok: false,
      msg: "POST Method - CREATE Users",
      info: err,
    });
  }
};

module.exports = controllerDemo;
