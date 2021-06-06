import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function addUser(username){
    socket.emit('add user', username)
}