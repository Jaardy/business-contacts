const { Sequelize, Model } = require("sequelize");

const db = new Sequelize("postgres://user:password@db:5432");

module.exports = {
  Sequelize,
  db,
};
