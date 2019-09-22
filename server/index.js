const express = require("express");
const app = express();
const port = 8000;
const db = require("./model");

app.get("/", (req, res) => {
  res.send("ok");
});
app.get("/reviews", (req, res) => {
  db.review().then(dbresults => res.status(200).send(dbresults));
});

app.listen(port, () => console.log("server listening at: ", port));
