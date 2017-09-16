/* global clickerwizard */
clickerwizard.sounds = {};

clickerwizard.sounds.myAudio = new Audio('/sounds/epic_sax_guy.mp3');
clickerwizard.sounds.myAudio.addEventListener('ended', () => {
  this.currentTime = 0;
  this.play();
}, false);
clickerwizard.sounds.myAudio.play();

clickerwizard.sounds.playAudio = () => {
  const audio = document.getElementById('myAudio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
};
