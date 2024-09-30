const express = require("express");
const app = express();

const PORT = 3301;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/");
  //console.log(__dirname + "/src/views");
});
app.listen(PORT, () => {
  console.log("running...");
});
