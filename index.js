const express = require('express');
const http = require('http');
const socketIo = require('socket.io');


const app = express();
const server = http.Server(app);
const io = socketIo(server);

 // Serve files from directory public
app.use(express.static('public'));

// Set up what we are listening to on socket server
io.on('connection', (socket) => {

  socket.on('newMessage', (data , username) => {
     socket.emit('message', data ,username);
    socket.broadcast.emit('message', data , username);
    console.log(username);
  })});


server.listen(8080);
