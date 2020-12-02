const express = require("express");
const app = express();
const ip = require("ip");
const address = ip.address();
const port = 3000;

// app.use("/", express.static("public"));
app.use("/", express.static("./"));

app.listen(port, address, () => {
  console.log(`Example app listening at http://${address}:${port}`);
});
