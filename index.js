const express = require("express");
const app = express();

const PORT = 3303;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
  //console.log(__dirname + "/src/views/index.html");
});

app.listen(PORT, () => {
  console.log("running...");
});
