const { db, Sequelize } = require("./db");

const Contact = db.define("contact", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  department: Sequelize.STRING,
  position: Sequelize.STRING,
});

module.exports = { Contact };
