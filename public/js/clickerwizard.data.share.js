/* global clickerwizard */
clickerwizard.data.share = {};

clickerwizard.data.share.players = [];


clickerwizard.data.socket.on('users', (playersServer) => {
  clickerwizard.data.share.players = playersServer;
});
// ('update', (id, name, score)
clickerwizard.data.share.sendUpdate = () => {
  clickerwizard.data.socket.emit('update', clickerwizard.data.socket.id, clickerwizard.chat.imports.username, parseInt(clickerwizard.game.counter));
};

window.setInterval(() => {
  clickerwizard.data.share.sendUpdate();
}, 500);
