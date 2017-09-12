let players = [];

console.log('funkar du?');

const sendData = () => {
  socket.emit('attack', 'skill', 'johan', 123456);
};

socket.on('attack', (skill, username, target) => {
  console.log(`${skill} ${username} ${target}`);
});

socket.on('users', (playersServer) => {
  players = playersServer;
  console.log(`${players.length}   Får klienten sina players?`);
});
