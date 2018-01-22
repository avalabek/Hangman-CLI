var Game = require("./game.js");
var Word = require ("./word.js");
var inquirer = require ("inquirer");

var guess;
var guessesLeft;
var guessedLetters = [];
var wins = 0;
var losses = 0;

var arrayWords = ["bazooka", "cloister", "rampart", "bilge","bungalow","shampoo","cherub","mauve", "brackish","aloof", "fjord", "muesli", "sauna", "lager"];

var game = new Game(arrayWords);
var getWord = game.chooseWord();
var word = new Word(getWord);

var index = arrayWord.indexOf(getWord);
console.log(index);
function startGame(){
  console.log("\nHangman! Words in English that aren't.\n");
  console.log("Current word: " + word.showWord());
  console.log("Guesses left: " + guessesLeft);
  console.log("Letters guessed: " + guessedLetters);
  console.log("Wins: " + wins);
  console.log("Losses: "+ losses);
}
function startOver(){
  index = "";
  game = new Game(arrayWords);
  word = new Word(getWord);
  index = arrayWords.indexOf(getWord);
  lettersGuessed = [];
  guessesLeft = 10;
  startGame();
  guess();
}

function correctWord(){
  if (word.gameOver()){
    if (index != -1){
      arrayWord.splice(index, 1);
    }
  }
}