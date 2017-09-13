/* global io */
//client
const socket = io.connect('http://localhost:8080');
//listens on the server
const sendButton = document.querySelector('.send-button');
const messageTxt = document.querySelector('.message-txt');
const chatMessages = document.querySelector('.chat-messages');
const chatwindow = document.querySelector('.chat');
const autoClickButton = document.querySelector('.spell-1');
// var username;

  myAudio = new Audio('/sounds/epic_sax_guy.mp3');
  myAudio.addEventListener('ended', function() {
      this.currentTime = 0;
    this.play();
  }, false);
  myAudio.play();

  function playAudio() {
      var audio = document.getElementById('myAudio');
      if (audio.paused) {
          audio.play();
      }
      else{
          audio.pause();
          audio.currentTime = 0
      }
  }


document.addEventListener('DOMContentLoaded', () =>  {
 username = prompt('Enter chat-name');


});

sendButton.addEventListener('click', () => {
  console.log('trycker på send');
   socket.emit('newMessage', messageTxt.value , username, cookies);
});

// data ,username, cookies);
 socket.on('message', (data ,username, cookies  ) => {
    const messageItem = document.createElement('li');
    // clickable username fuckery

    const usernameElement = document.createElement('span');
    usernameElement.innerText = username;
    usernameElement.addEventListener('click', (event) => {

      var scoreInfo = new Object();
      scoreInfo.playerScore         =  cookies ;
      console.log(scoreInfo.playerScore);
    });
      // end of clickable username fuckery
    messageItem.innerText = ': ' + data + ': ' + cookies;

    messageItem.prepend(usernameElement);
   chatMessages.appendChild(messageItem);
   chatwindow.scrollTop = chatwindow.scrollHeight;
  });

messageTxt.addEventListener("keydown", function (e) {
  console.log('skickar med enterVafaaan');

   if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
  socket.emit('newMessage',  messageTxt.value, username, cookies);
  messageTxt.value = '';
  console.log('skickar med enterVafaaan');

  }
});

function myFunction(){
    document.getElementById("demo").innerHTML = add();
 }
// the new magic fuckery

 socket.on('connect', function (data) {
     socket.emit('storeClientInfo', { customId: username , score: cookies });
     console.log('triggers?!');
 });

 socket.on('update',function(usersInfo){

         usersInfo.forEach(function(single_user){
           //now you can use userinfo object according to your requirement
           console.log('stuff');
         });

         });


 // end of new magic fuckery
