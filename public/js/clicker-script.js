var initDamage = 1;
let counter = 0;
var add = (function () {

        return function () {return counter += initDamage;}
})();

function myFunction(){

    document.getElementById("demo").innerHTML = add();
 }

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
function logFunc () {
  if(counter === 10) {
    window.alert('STOP PLAYING YOU MAD MAN')
  }
}

myAudio = new Audio('/sounds/epic_sax_guy.mp3');
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();
