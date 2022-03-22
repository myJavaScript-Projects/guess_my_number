'use strict';

// event listener -- an event happens on the page

// define the secret number
const secretNumber = Math.trunc(Math.random() * 20 + 1); // trunc for not having the decimals

// defining the variable score, which can be reused within the our eventhandler function
let score = 20;
let highscore = 0;
const originalMSG = `Start guessing...`;

// Reseting the user interface by clicking on the AGAIN button
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // resetting the score to 20
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = originalMSG; // resetting to the original message
  document.querySelector('.guess').value = ` `;
  document.querySelector('body').style.backgroundColor = '#222'; // resetting to the background color
  document.querySelector('.number').style.width = '15rem';
});

// Refactoring our code by creating some functions

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Click onEvent listener for check button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // if we put 0 as an input, we know that this is a Falsy value, so we can use it as follows
  if (!guess) {
    // !guess so here with ! this will be true
    // document.querySelector('.message').textContent = `No number :(`;
    displayMessage(`No number :(`);

    // In this scenario, the player WINS THE GAME
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = `Correct number!!`;
    displayMessage(`Correct number!!`);

    // Manipulating styles using css within javascript file
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    // Guess is too high.

    // update your highscore. It will be the same as the score at the moment we make the correct guess
    // the highscore should remain in every case it is smaller than the score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? `Too damn high!!` : `Too low!!`;
      displayMessage(guess > secretNumber ? `Too damn high!!` : `Too low!!`);
      score = score - 1;
      //or score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = `You LOST THE GAME`;
    }
  }
});
