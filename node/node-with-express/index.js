const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hey there Express!");
});

app.listen(3000);
