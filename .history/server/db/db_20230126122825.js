const { Sequelize, Model } = require("sequelize");

const db = new Sequelize("postgres://user:password@localhost:5432");

module.exports = {
  Sequelize,
  db,
};
