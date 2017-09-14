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

function updateClientsScore(id, name, score) {
  players.forEach((player0) => {
    if (player0.id === id) {
      player0.name = name;
      player0.score = score;
    }
  });
}

// Update clients with new playersList
function updateClients() {
  // Cheate new playersList to send to clients
  const sendPlayers = [];
  players.forEach((player1) => {
    sendPlayers.push({ id: player1.id, username: player1.username, score: player1.score });
  });
  // Send light playersList to clients
  players.forEach((player2) => {
    player2.socketObj.emit('users', sendPlayers);
  });
}

// Set up what we are listening to on socket server
io.on('connection', (socket) => {
  socket.on('newMessage', (data, username, cookies) => {
    socket.emit('message', data, username, cookies);
    socket.broadcast.emit('message', data, username, cookies);
  });
  // Test. get info outside newMessage  By Johan
  socket.on('attack', (skill, id, target) => {
    players.forEach((player) => {
      if (target === '') {
        if (player.id !== id) {
          player.socketObj.emit('attack', skill, id, target);
        }
      } else if (target === player.id) {
        player.socketObj.emit('attack', skill, id, target);
      }
    });
  });

  socket.on('update', (id, name, score) => {
    players.forEach((player11) => {
      if (id === player11.id) {
        player11.username = name;
        player11.score = score;
      }
    });
    updateClientsScore(id, name, score);
    updateClients();
  });
});

// Add players to server-players-list "players"
io.on('connection', (socket) => {
  const player = { id: socket.id, socketObj: socket, username: '', score: 0 };
  players.push(player);
  updateClients();
});

server.listen(8080);
