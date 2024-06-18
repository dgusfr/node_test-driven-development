let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.json({ sucess: "true" });
});

app.get("/color/:person", (req, res) => {
  let person = req.params.person;
  if (person === "diego") {
    res.json({ color: "blue" });
  }
});

module.exports = app;
