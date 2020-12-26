const { DataTypes } = require("sequelize");
const { sequelize } = require("./../config/database");
const User = sequelize.define(
  "tuser",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    psw: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    datecreate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    dateupdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = User;
