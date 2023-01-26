const { Sequelize, Model } = require("sequelize");

const db = new Sequelize("postgres://localhost:8080");

module.exports = {
  Sequelize,
  db,
};
