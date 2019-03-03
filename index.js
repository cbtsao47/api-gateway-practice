//import express
const express = require("express");
// starts a server with express();
const app = express();
const router = require("./router");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Simple API Gateway");
});

app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`API Gateway running on localhost ${port}`);
});
