<<<<<<< HEAD
const couterPoint = document.querySelector('#counter');
=======
const couterPoint = document.querySelector('#cookies');
>>>>>>> 6dfb76cf885e06fcd0bbdb19cd94755bc0fc761b
let players = [];

const target = '';
const testButtonForMassageAttack = document.querySelector('#testAttack');

const sendAttack = () => {
  socket.emit('attack', 'skill', socket.id, target);
};

testButtonForMassageAttack.addEventListener('click', () => {
  sendAttack();
});

socket.on('attack', (skill, id, target) => {
  // Uppcomming skills
  console.log(`${'Nu Vart du Attackerad!! ' + ' , '}${skill} , ${id} , ${target}`);
  switch (expression) {
    case 'skill1':
      // DO COOL STUFF
      break;
    case 'skill2':
      // DO COOL STUFF
      break;
    case 'skill3':
      // DO COOL STUFF
      break;
    default:
  }
});

socket.on('users', (playersServer) => {
  players = playersServer;
});
// ('update', (id, name, score)
const sendUpdate = () => {
  socket.emit('update', socket.id, username, parseInt(couterPoint.innerHTML));
};
