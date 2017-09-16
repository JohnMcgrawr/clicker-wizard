/* global clickerwizard */
clickerwizard.skills.attack = {};
clickerwizard.skills.attack.target = '';
clickerwizard.skills.attack.SkillAttributs = class {
  constructor(button, window, cost) {
    this.attackButton = document.querySelector(button);
    this.costWindow = document.querySelector(window);
    this.spellCost = cost;
  }
};

// Send attack through socket
clickerwizard.skills.attack.sendAttack = (skillType) => {
  clickerwizard.data.socket.emit('attack',
    skillType,
    clickerwizard.data.socket.id,
    clickerwizard.skills.attack.target,
  );
};

// General addEventListener function
function clickFunctionLogic(spellCost, multiplyBy, skillType) {
  if (clickerwizard.game.counter >= spellCost) {
    clickerwizard.game.counter -= spellCost;
    spellCost += spellCost * multiplyBy;
    clickerwizard.skills.attack.sendAttack(skillType);
  }
  return spellCost;
}

// First skill
const firstSkill = new clickerwizard.skills.attack.SkillAttributs('#testAttack', '#cursorCost12', 10);
firstSkill.attackButton.addEventListener('click', () => {
  firstSkill.spellCost = clickFunctionLogic(firstSkill.spellCost, 1.5, 'skill');
  firstSkill.costWindow.innerText = firstSkill.spellCost;
});

// Second skill
const secondSkill = new clickerwizard.skills.attack.SkillAttributs('#testAttack2', '#cursorCost122', 20);
secondSkill.attackButton.addEventListener('click', () => {
  secondSkill.spellCost = clickFunctionLogic(secondSkill.spellCost, 2.5, 'skill2');
  secondSkill.costWindow.innerText = secondSkill.spellCost;
});

// third skill
const thirdSkill = new clickerwizard.skills.attack.SkillAttributs('#testAttack3', '#cursorCost123', 30);
thirdSkill.attackButton.addEventListener('click', () => {
  thirdSkill.spellCost = clickFunctionLogic(thirdSkill.spellCost, 3.5, 'skill3');
  thirdSkill.costWindow.innerText = thirdSkill.spellCost;
});

clickerwizard.data.socket.on('attack', (skill, id, target) => {
  // Upcomming skills
  switch (skill) {
    case 'skill':
      prompt('AAAATTAAAACKERAAADDD!!!!');
      break;
    case 'skill2':
      // DO COOL STUFF
      prompt('AAAATTAAAACKERAAADDD!!!! en till attack!! AAAHAHHAAAAAAaaaAAaA');
      break;
    case 'skill3':
      // DO COOL STUFF
      prompt('AAAATTAAAACKERAAADDD!!!!   3:e gångeNNN!!!!!!');
      break;
    default:
  }
});
