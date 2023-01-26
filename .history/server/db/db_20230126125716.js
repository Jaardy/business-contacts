const { Sequelize, Model } = require("sequelize");

const db = new Sequelize("postgres://user:password@localhost:5432/mydb");

module.exports = {
  Sequelize,
  db,
};
