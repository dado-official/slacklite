const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.post('/login', (req, res) => {
  console.log("ghj")
  res.send({
    token: 'test123'
  });
});

app.post('/register', (req, res) => {
  console.log("ghj")
  res.send({
    token: 'test123'
  });
});

app.listen(5000, () => console.log('API is running on http://localhost:5000/login'));

/* const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer;
const io = require("socket.io")(http, {
    cors: { origin: "*" },
});

console.log("hallo")
app.use(cors)

app.post('/login', (req, res) => {
  console.log("login")
  res.send({
    token: 'test123'
  });
});

io.on("connection", (socket) => {
  console.log("new user connected")
  socket.on("message", (msg) => {
    console.log(msg)
  })
})

app.listen(5000, () => console.log("Listening on Port 5000"));*/