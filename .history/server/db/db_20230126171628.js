const { Sequelize, Model } = require("sequelize");
const { HOST, USER, PASSWORD, DB, dialect } = require("./db.config");
console.log(HOST);

const db = new Sequelize("postgres://user:password@db:5432");

module.exports = {
  Sequelize,
  db,
};
