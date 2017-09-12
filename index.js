const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIo(server);

const players = [];
// server talks with all clients
// Serve files from directory public
app.use(express.static('public'));

// Set up what we are listening to on socket server
io.on('connection', (socket) => {
  socket.on('newMessage', (data, username, cookies) => {
    socket.emit('message', data, username, cookies);
    socket.broadcast.emit('message', data, username, cookies);
  });


  // Test. get info outside newMessage  By Johan
  socket.on('attack', (skill, username, target) => {
    console.log(players.length);
    console.log('DOSE IT WORK' + skill + ' ' + username + ' ' + target);
    players.forEach((player) => {
      player.socketObj.emit('attack', (skill, username, target));
    });
  });
  //   //end By Johan
});

//Add players to server-object "players"
io.on('connection', (socket) => {
  console.log(socket.id);
  const player = { id: socket.id, socketObj: socket, username: '', score: 0 };
  players.push(player);
  //Update clients with new list of players
  // socket.emit('users-receive', players);
  let sendPlayers = [];
  players.forEach((player) => {
    sendPlayers.push({ id: player.id, username: player.username, score: player.score });
  })
  players.forEach((player) => {
    player.socketObj.emit('users', sendPlayers);
  });
});


server.listen(8080);
