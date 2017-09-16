/* global clickerwizard */
// const socket = io.connect('http://localhost:8080');
// listens on the server
clickerwizard.chat = {};
clickerwizard.chat.Imports = class {
  constructor() {
    this.sendButton = document.querySelector('.send-button');
    this.messageTxt = document.querySelector('.message-txt');
    this.chatMessages = document.querySelector('.chat-messages');
    this.chatwindow = document.querySelector('.chat');
    // const autoClickButton = document.querySelector('.spell-1');
    this.username = '';
  }
};
clickerwizard.chat.imports = new clickerwizard.chat.Imports();

document.addEventListener('DOMContentLoaded', () => {
  clickerwizard.chat.imports.username = prompt('Enter chat-name');
});

clickerwizard.chat.imports.sendButton.addEventListener('click', () => {
  clickerwizard.data.socket.emit('newMessage',
    clickerwizard.chat.imports.username,
    clickerwizard.game.counter,
    clickerwizard.chat.imports.messageTxt.value,
  );
});

clickerwizard.data.socket.on('message', (username, data, counter) => {
  const messageItem = document.createElement('li');
  messageItem.innerText = `${username}: ${data}: ${counter}`;
  clickerwizard.chat.imports.chatMessages.appendChild(messageItem);
  clickerwizard.chat.imports.chatwindow.scrollTop = clickerwizard.chat.imports.chatwindow.scrollHeight;
});

clickerwizard.chat.imports.messageTxt.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) { // checks whether the pressed key is "Enter"
    clickerwizard.data.socket.emit('newMessage',
      clickerwizard.chat.imports.username,
      clickerwizard.game.counter,
      clickerwizard.chat.imports.messageTxt.value,
    );
    clickerwizard.chat.imports.messageTxt.value = '';
  }
});
