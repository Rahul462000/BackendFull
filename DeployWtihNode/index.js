// dot env is a production ready package
require("dotenv").config;
import express from "express";
const app = express();
const portNumner = 5000;

app.get("/", (req, res) => {
  res.send("hello evryone");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});

// calling here the env with port number decalre on .env file
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${portNumner}`);
});
