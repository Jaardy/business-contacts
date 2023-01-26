const app = require("./app");
const seed = require("./db/seed");

const { PORT = 3000 } = process.env;

app.listen(PORT, async () => {
  await seed();
  console.log(`Server listening at http://localhost:${PORT}`);
});
