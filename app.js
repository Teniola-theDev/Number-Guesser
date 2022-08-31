// set game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max);
guessesLeft = 3;
console.log(winningNum);
// get ui values
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

//declare function to get random number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// add event listener to reload page
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});
// add event listener to start project
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  //set validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage('Kindly input a number between 1 and 10', 'red');
    console.log(guessInput.value);
  }
  //check if winning or losing
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct. YOU HAVE WON!`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //game over lost
      guessInput.value = '';
      gameOver(false, `Game over. You lost. The correct number was ${winningNum}`);
    } else {
      //game over continue
      guessInput.value = '';
      guessInput.style.borderColor = 'red';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

// optimizing code
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

  // Hides input bar
  guessInput.style.display = 'none';
  guessBtn.display = 'block'; 
}
