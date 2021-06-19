const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: { origin: "*" },
});
const port = process.env.PORT || 3333;

app.get('/', (req, res) => {
  
});

io.on('connection', (socket) => {
  console.log("client connected")

  //client join all saved rooms
  socket.on('joinRooms', msg => {
      msg.map((room) => socket.join(room.roomId))
  })

  //client join specific room
  socket.on('joinRoom', msg => {
       socket.join(msg.roomId) 
  })

  //handle messages from clients
  socket.on('chat message', msg => {
    console.log("message from client" , msg)
    io.to(msg.room.roomId).emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});