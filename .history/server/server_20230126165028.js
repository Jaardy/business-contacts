const app = require("./app");
const { runSeed } = require("./db/seed");

const { PORT = 3000 } = process.env;

app.listen(PORT, async () => {
  await runSeed();
  console.log(`Server listening at http://localhost:${PORT}`);
});
