const clickerwizard.data.share = {
  const counterPoint = document.querySelector('#counter-window');

  let players = [];


  socket.on('users', (playersServer) => {
    players = playersServer;
  });
  // ('update', (id, name, score)
  const sendUpdate = () => {
    socket.emit('update', socket.id, username, parseInt(counterPoint.innerHTML));
  };

  window.setInterval(() => {
    sendUpdate();
  }, 500);
}
