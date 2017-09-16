
/* global io */
// client
// const socket = io.connect('http://localhost:8080');
// listens on the server
const sendButton = document.querySelector('.send-button');
const messageTxt = document.querySelector('.message-txt');
const chatMessages = document.querySelector('.chat-messages');
const chatwindow = document.querySelector('.chat');
const autoClickButton = document.querySelector('.spell-1');
let username;

document.addEventListener('DOMContentLoaded', () => {
  username = prompt('Enter chat-name');
});

sendButton.addEventListener('click', () => {
  console.log('trycker på send');
  clickerwizard.data.socket.emit('newMessage', username, clickerwizard.game.counter, messageTxt.value);
});

clickerwizard.data.socket.on('message', (username, data, counter) => {
  const messageItem = document.createElement('li');
  messageItem.innerText = `${username}: ${data}: ${counter}`;
  chatMessages.appendChild(messageItem);
  chatwindow.scrollTop = chatwindow.scrollHeight;
});

messageTxt.addEventListener('keydown', (e) => {
  console.log('skickar med enterVafaaan');

  if (e.keyCode === 13) { // checks whether the pressed key is "Enter"
    socket.emit('newMessage', username, clickerwizard.game.counter, messageTxt.value);
    messageTxt.value = '';
    console.log('skickar med enterVafaaan');
  }
});

function myFunction() {
  document.getElementById('demo').innerHTML = add();
}
