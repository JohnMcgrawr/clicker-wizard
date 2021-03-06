const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIo(server);
 //server talks with all clients
 // Serve files from directory public
app.use(express.static('public'));

// Set up what we are listening to on socket server
io.on('connection', (socket) => {
  socket.on('newMessage', (data , username , cookies) => {
     socket.emit('message', data ,username, cookies);
    socket.broadcast.emit('message', data , username  , cookies);

  })});




server.listen(8080);
