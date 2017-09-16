

let target = '';
const testButtonForMassageAttack = document.querySelector('#testAttack');


let skillType = 'skill';
const sendAttack = () => {
  clickerwizard.data.socket.emit('attack', skillType, socket.id, target);
};


testButtonForMassageAttack.addEventListener('click', () => {
  sendAttack();
});

clickerwizard.data.socket.on('attack', (skill, id, target) => {
  // Uppcomming skills
  console.log(`${'Nu Vart du Attackerad!! ' + ' , '}${skill} , ${id} , ${target}`);
  switch (skill) {
    case 'skill':
      prompt('AAAATTAAAACKERAAADDD!!!!');
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
