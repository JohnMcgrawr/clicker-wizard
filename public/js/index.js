/* global io */
const socket = io.connect('http://localhost:8080');
//
const sendButton = document.querySelector('.send-button');
const messageTxt = document.querySelector('.message-txt');
const chatMessages = document.querySelector('.chat-messages');
const chatwindow = document.querySelector('.chat');
let username;


sendButton.addEventListener('click', () => {
  socket.emit('newMessage', username, counter,  messageTxt.value);
  console.log('fires???');
 });

socket.on('message', (username ,data, counter) => {

  const messageItem = document.createElement('li');
  messageItem.innerText = username + ': ' + data +': ' + counter;
  chatMessages.appendChild(messageItem);
  chatwindow.scrollTop = chatwindow.scrollHeight;
 });

document.addEventListener('DOMContentLoaded', () =>  {
 username = prompt('Enter chat-name');
});

let counter = 0;
var add = (function () {

        return function () {return counter += initDamage;}
})();

function myFunction(){

    document.getElementById("demo").innerHTML = add();
 }
