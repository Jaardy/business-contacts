const { contacts } = require("./seedData");
const { Contact } = require("./Contact");
const { db } = require("./db");

module.exports.runSeed = async () => {
  await db.sync({ force: true });
  await Contact.bulkCreate(contacts);
};
