const express = require("express");
const app = express();
const { Contact } = require("./db/Contact");
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/contacts", async (req, res, next) => {
  try {
    const contacts = await Contact.findAll();
    res.send(contacts);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = app;
