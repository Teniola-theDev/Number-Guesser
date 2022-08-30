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
//set validation
//check if winning or losing
