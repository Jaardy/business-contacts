const { Sequelize, Model } = require("sequelize");

const db = new Sequelize("postgres://db:password%40localhost:5432/mydb", {
  logging: false,
  dialect: "postgres",
});

module.exports = {
  Sequelize,
  db,
};
