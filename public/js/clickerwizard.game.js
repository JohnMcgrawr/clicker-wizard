
let counter = 0;

const clickMainImage = document.querySelector('#main-image');

function counterClick(number) {
  counter += number;
  document.getElementById('counter-window').innerHTML = counter;
}

clickMainImage.addEventListener('click', () => {
  counterClick(1);
  playAudio();
});
