var Game = require("./game.js");
var Word = require ("./word.js");
var inquirer = require ("inquirer");

var guess;
var guessesLeft;
var guessedLetters = [];
var wins = 0;
var losses = 0;

var arrayWords = ["bazooka", "cloister", "rampart", "bilge","bungalow","shampoo","cherub","mauve", "brackish","aloof", "fjord", "muesli", "sauna", "lager"];
//creates new game object
var game = new Game(arrayWords);
//chooses random word from array for game 
var getWord = game.chooseWord();
//creates new object for new word
var word = new Word(getWord);

function startGame(){
  console.log("\nHangman! Words in English that aren't.\n");
  console.log("Current word: " + word.showWord());
  console.log("Guesses left: " + guessesLeft);
  console.log("Letters guessed: " + guessedLetters);
  console.log("Wins: " + wins);
  console.log("Losses: "+ losses);
}
function startOver(){
  
  game = new Game(arrayWords);
  word = new Word(getWord);
  lettersGuessed = [];
  guessesLeft = 10;
  startGame();
  
}
//need a function or two to tell if word is
// guessed correctly and increment scores etc
// and restart game or end it 

startGame();
function begin(){
  inquirer.prompt([{
    type: "input",
    message: "Guess a letter.",
    name: "guess",
    choices: ["A", "B", "C", "D", "E", "F", "G","H", "I","J","K","L","M", "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  // validate: //ok what to do here if input matches a letter
// in the randomly chosen word, then, 

//code below modified from class activity with very little understanding
//for example why "user" as parameter 
}].then(function (user) {
    
    //if user input from inquirer equals  a letter
    // if (user.choices === //same as random word chosen) {
      var userGuess = answers.guess;
      if (guessesLeft>1){
        word.userGuess(userGuess);
        lettersGuessed.push(userGuess);
        guessesLeft -=1;
      }
      startGame();
      //need functions to
      //check if guesses left < 0
      //check if incorrect guess
    


   begin();