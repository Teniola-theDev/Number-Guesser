// set game values
let min = 1,
  max = 10,
  winningNum = 3;
guessesLeft = 3;
// get ui values
const game = document.querySelector('.game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;
// add event listener

guessBtn.addEventListener('click', function () {
  guess = parseInt(guessInput.value);
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
      gameOver(false, `Game over. You lost. The correct number is ${winningNum}`);
    } else {
      //game over continue
      guessInput.value = '';
      gameOver(false, `${guess} is not correct. You have ${guessesLeft} guesses left`);
    }
  }
});
function setMessage(msg, color) {
  // message.style.color = color;
  message.textContent = msg;
}

// optimizing code
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');
  guessInput.disabled = won;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg, color);
}
