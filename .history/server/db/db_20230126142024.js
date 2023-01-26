const { Sequelize, Model } = require("sequelize");

const db = new Sequelize("localhost:5432/mydb");

module.exports = {
  Sequelize,
  db,
};
