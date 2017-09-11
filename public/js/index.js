/* global io */
//client
const socket = io.connect('http://localhost:8080');
//listens on the server
const sendButton = document.querySelector('.send-button');
const messageTxt = document.querySelector('.message-txt');
const chatMessages = document.querySelector('.chat-messages');
const chatwindow = document.querySelector('.chat');
const autoClickButton = document.querySelector('.spell-1');


let username;
var initDamage = 1;
let counter = 0;
let autoclickness;
var add = (function () {

        return function () {return counter += initDamage;}
})();

// autoClickButton.addEventListener('click', () => {
// autoclickness = 1000;
// counter += autoclickness;
// console.log('JOHAN ÄR SÅ JÄVLA GRYM! OM DET HÄR FUNKAR BJUDER JAG PÅ EN DIRTY LATTE!!!!');
// });

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

messageTxt.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
  socket.emit('newMessage', username, counter,  messageTxt.value);
  messageTxt.value = '';
 }
});

document.addEventListener('DOMContentLoaded', () =>  {
 username = prompt('Enter chat-name');
});

// socket.on('loggedIn', (username) => {
//   console.log(username);
// });

// let counter = 0;
// var add = (function () {
//
//         return function () {return counter += initDamage;}
// })();

function myFunction(){

    document.getElementById("demo").innerHTML = add();
 }
