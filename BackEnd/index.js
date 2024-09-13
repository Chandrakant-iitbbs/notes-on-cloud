const connectToMongo = require("./db");
const express = require('express')
const app = express()

const port = 5000
connectToMongo();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to NoteOnCloud");
});

app.listen(port, () => {
  console.log(`NoteOnCloud backend listening on port ${port}`);
});