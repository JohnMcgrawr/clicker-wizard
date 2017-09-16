clickerwizard.game = {};
clickerwizard.game.counter = 0;

clickerwizard.game.counterClick = (number) => {
  clickerwizard.game.counter += number;
  document.getElementById('counter-window').innerHTML = clickerwizard.game.counter;
};

document.querySelector('#main-image').addEventListener('click', () => {
  clickerwizard.game.counterClick(1);
  clickerwizard.sounds.playAudio();
});
