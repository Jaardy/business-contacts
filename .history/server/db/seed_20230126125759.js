const { contacts } = require("./seedData");
const { Contact } = require("./Contact");
const { db } = require("./db");

const runSeed = async () => {
  await db.sync({ force: true });
  await Contact.bulkCreate(contacts);
};

runSeed();
