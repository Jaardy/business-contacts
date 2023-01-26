const { Sequelize, Model } = require("sequelize");

const db = new Sequelize("postgres://db:5432", {
  dialect: pg,
});

module.exports = {
  Sequelize,
  db,
};
