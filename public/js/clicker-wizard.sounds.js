

myAudio = new Audio('/sounds/epic_sax_guy.mp3');
myAudio.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);
myAudio.play();

function playAudio() {
  const audio = document.getElementById('myAudio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
