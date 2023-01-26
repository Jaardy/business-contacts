const { Sequelize, Model } = require("sequelize");
console.log(HOST);

const db = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    logging: false,
    dialect: dialect,
  }
);

module.exports = {
  Sequelize,
  db,
};
