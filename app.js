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
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct. YOU HAVE WON!`, 'green');
  }
});
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
