const { contacts } = require("./seedData");
const { Contact } = require("./Contact");

const runSeed = async () => {
  await db.sync({ force: true });
  await Contact.bulkCreate(contacts);
};

runSeed();
