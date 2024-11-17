let guessnum = Math.floor(Math.random() * 100 + 1);
console.log(guessnum);

const input = document.querySelector("#input");
const submit = document.querySelector("#subt");
const last_guess = document.querySelector(".last_guess");
const last_result = document.querySelector(".last_result");
const LOWorHi = document.querySelector(".LOWorHi");
const showresult = document.querySelector(".result");

const p = document.createElement("p");
let prevGuess = [];
let numGuesses = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //chek if it is num or not
  if (isNaN(guess)) {
    alert("Please Give Valid Number");
  } else if (guess < 1) {
    alert("Please Enter Number above 1");
  } else if (guess > 100) {
    alert("Please Enter Number Below 100");
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random Number was ${guessnum}`);
      endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
      }
  }
}

function checkGuess(guess) {
  //check number if it is num matching or not hight or lo
  if (guess === guessnum) {
    displayMessage("yoohooooo!!!! Your Guess is Right");
    endGame();
  } else if (guessnum < guess) {
    displayMessage("Your Number is Smaller than Guess Number. Please Try again")
  } else if (guessnum > guess) {
    displayMessage("Your Number is Greater than Guess Number. Please Try again")
  } 
}

function displayGuess(guess) {
  //display guess number
  input.value = ''
  last_guess.innerHTML += `${guess}, `
  numGuesses++
  last_result.innerHTML = `${11 - numGuesses }`
}

function displayMessage(message) {
  //display message
  LOWorHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(guess) {
  //game end
  input.value = '';
  input.setAttribute('disabled', '')
  p.innerHTML = `<h2 id="Newgame"> Start New Game </h2>`
  showresult.appendChild(p)
  playGame = false
  newGame()

}

function newGame() {
    const NewgameButton = document.querySelector('#Newgame')
    NewgameButton.addEventListener('click',(e)=>{
        guessnum = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numGuesses = 1;
        last_guess.innerHTML = []
        last_result.innerHTML = `${11 - numGuesses }`
        input.removeAttribute('disabled');
        showresult.removeChild(p);
        playGame = true;
    })
    //new game starts
}
