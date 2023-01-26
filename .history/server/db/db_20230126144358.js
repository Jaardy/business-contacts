const { Sequelize, Model } = require("sequelize");
const { HOST, USER, PASSWORD, DB, dialect } = require("./db.config");
console.log(HOST);

const db = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  logging: false,
  dialect: dialect,
});

module.exports = {
  Sequelize,
  db,
};
