const express = require('express');
const { algoTrader } = require('./server');

const PORT = process.env.PORT || 2001

const openId = "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"

const app = express();

app.use(express.json())

app.get("/", async(req, res, next) => {
  res.send("Welcome to my chatbot");
});

app.post("/start", async(req, res, next) => {
  const {token, paper, amount} = req.body;
  algoTrader(token, openId, paper)
  res.send("Connected")
});

app.listen(PORT, () => {
  console.log("App is running")
});