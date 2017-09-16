/* global clickerwizard */

const target = '';

const skillType = 'skill';
const sendAttack = () => {
  clickerwizard.data.socket.emit('attack', skillType, clickerwizard.data.socket.id, target);
};


const testButtonForMassageAttack = document.querySelector('#testAttack');
const costMessageSpellWindow = document.querySelector('#cursorCost12');
let costMessageSpell = 10;
testButtonForMassageAttack.addEventListener('click', () => {
  if (clickerwizard.game.counter >= costMessageSpell) {
    clickerwizard.game.counter -= costMessageSpell;
    costMessageSpell += costMessageSpell * 1.5;
    costMessageSpellWindow.innerText = costMessageSpell;
    sendAttack();
  }
});


clickerwizard.data.socket.on('attack', (skill, id, target) => {
  // Uppcomming skills
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
