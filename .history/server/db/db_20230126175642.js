const { Sequelize, Model } = require("sequelize");
console.log(process.env.HOST);

const db = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    logging: false,
    dialect: "postgres",
  }
);

module.exports = {
  Sequelize,
  db,
};
