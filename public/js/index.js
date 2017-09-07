/* global io */
const socket = io.connect('http://localhost:8080');

const sendButton = document.querySelector('.send-button');
const messageTxt = document.querySelector('.message-txt');
const chatMessages = document.querySelector('.chat-messages');
const chatwindow = document.querySelector('.test');

sendButton.addEventListener('click', () => {
  socket.emit('newMessage', messageTxt.value);
 });

socket.on('message', (data) => {

  const messageItem = document.createElement('li');
  messageItem.innerText = data;
  chatMessages.appendChild(messageItem);
  chatwindow.scrollTop = chatwindow.scrollHeight;

 });
