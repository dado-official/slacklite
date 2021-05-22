const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer();

const io = require("socket.io")(http, {
    cors: { origin: "*" },
});

// Static files
app.use(cors());

io.on("connection", (socket) => {
  console.log("Made socket connection");

  socket.on('room', (msg) => {
    console.log("message: " + msg)
    socket.emit("room", msg)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


http.listen(5000, () => console.log("listening on http://localhost:5000"));