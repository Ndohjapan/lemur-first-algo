const express = require('express');
const { algoTrader } = require('./server');

const openId = "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"

const app = express();

app.use(express.json())

app.get("/", async(req, res, next) => {
  res.send("Welcome to my chatbot");
});

app.post("/start", async(req, res, next) => {
  const {keyId, secretKey, paper} = req.body;
  algoTrader(keyId, secretKey, openId, paper)
  res.send("Connected")
});

app.listen(2001, () => {
  console.log("App is running")
});