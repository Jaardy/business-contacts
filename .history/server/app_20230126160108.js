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

app.get("/contacts/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByPk(id);
    res.send(contact);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = app;
