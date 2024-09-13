const connectToMongo = require("./db");
const express = require('express')
const app = express()
app.use(express.json())

const port = 5000
connectToMongo();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to NoteOnCloud");
});

app.use("/api/auth",require("./routes/auth"));
app.use("/api/notes",require("./routes/notes"));

app.listen(port, () => {
  console.log(`NoteOnCloud backend listening on port ${port}`);
});