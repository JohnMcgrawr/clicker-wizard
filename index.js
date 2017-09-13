
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIo(server);


 //server talks with all clients sköter vad som händer vid connection och pruttar ut allt till blarghaflöö
 // Serve files from directory public
app.use(express.static('public'));

// Set up what we are listening to on socket server
io.on('connection', (socket) => {
  socket.on('newMessage', (data , username , cookies) => {
    socket.emit('message', data ,username, cookies);
    socket.broadcast.emit('message', data , username  , cookies);

  })});



  // the new magic fuckery



      var clients =[];

      io.sockets.on('connection', function (socket) {
           socket.on('storeClientInfo', function (data) {
              var clientInfo = new Object();
              clientInfo.customId         = data.customId;
              clientInfo.clientId     = socket.id;
              clientInfo.score = data.score;
              socket.broadcast.emit(clientInfo);
              console.log(clientInfo.customId + ' Has connected' + ' on socket id ' + clientInfo.clientId + '  score ' + clientInfo.score);
          });
          socket.on('disconnect', function (data) {
            console.log('on disconnect');
              for( var i=0, len=clients.length; i<len; ++i ){
                  var c = clients[i];

                  if(c.clientId == socket.id){
                      clients.splice(i,1);
                      break;
                  }
              }

          });
      });

    //   function updateClients(usersInfo) {
    //       //io.emit('update', usersInfo);
    //       io.to(socket.channel).emit('update', usersInfo);
    //       console.log('users list is ', users);
    //     }
    //  }




// end of the new magic fuckery






server.listen(8080);
