const express = require('express');
const { algoTrader } = require('./server');

const openId = "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"

const app = express();

app.use(express.json())

app.post("/", async(req, res, next) => {
  const {keyId, secretKey, paper} = req.body;
  algoTrader(keyId, secretKey, openId, paper)
  res.send("Connected")
});

app.listen(2001, () => {
  console.log("App is running")
});