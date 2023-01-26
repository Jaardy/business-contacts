const { Sequelize, Model } = require("sequelize");
console.log(HOST);

const db = new Sequelize("postgres://user:password@db:5432", {
  logging: false,
});

module.exports = {
  Sequelize,
  db,
};
