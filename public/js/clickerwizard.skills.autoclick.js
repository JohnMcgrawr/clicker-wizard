// const { ns } = require('./clickerwizard.game.js');
//
// const clickerwizard = ns();


let cursors = 0;

function buyCursor() {
  const cursorCost = Math.floor(10 * Math.pow(1.1, cursors)); // works out the cost of this cursor
  if (clickerwizard.game.counter >= cursorCost) { // checks that the player can afford the cursor
    cursors += 1; // increases number of cursors
    clickerwizard.game.counter -= cursorCost; // removes the cookies spent
    document.getElementById('cursors-level').innerText = cursors; // updates the number of cursors for the user
    document.getElementById('counter-window').innerText = clickerwizard.game.counter; // updates the number of cookies for the user
  }
  const nextCost = Math.floor(10 * Math.pow(1.1, cursors)); // works out the cost of the next cursor
  document.getElementById('cursorCost').innerHTML = nextCost; // updates the cursor cost for the user
}

window.setInterval(() => {
  clickerwizard.game.counterClick(cursors);
}, 1000);
