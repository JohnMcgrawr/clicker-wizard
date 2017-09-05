/* global io */
const socket = io.connect('http://localhost:8080');

const sendButton = document.querySelector('.send-button');
const messageTxt = document.querySelector('.message-txt');
const chatMessages = document.querySelector('.chat-messages');

sendButton.addEventListener('click', () => {
  socket.emit('newMessage', messageTxt.value);
});

socket.on('message', (data) => {
  const messageItem = document.createElement('li');
  messageItem.innerText = data;
  chatMessages.appendChild(messageItem);
});
