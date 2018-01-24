
var Word = require ("./word.js");
var prompt = require ("prompt");
prompt.start();

var game = {
  wordBank: ["bazooka", "cloister", "rampart", "bilge", "bungalow", "shampoo", "cherub", "mauve", "brackish", "aloof", "fjord", "muesli", "sauna", "lager"],
  guessesLeft: 10,
  currentWord: null,
  startGame: function(wrd){
    var randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    console.log(randomWord);
    this.currentWord = new Word(randomWord);
    this.currentWord.getLetters();
    this.keepPrompting();
},
keepPrompting: function(){
  
  prompt.get(["guessaletter"],function(err,result){
    console.log("You guessed: " + result.guessaletter);
    var userGuess = this.currentWord.guess(result.guessLetter);
    console.log("You have guessed " + userGuess + "times.");
    if (userGuess === 0) {
      console.log("Wrong guess!");
      this.guessesLeft -=1;
    } else {
      console.log ("Correct guess!");
      if (this.currentWord.findWord()){
        console.log ("You win!");
        return 1;
      }else {
        console.log ("Guesses left: " + this.guessesLeft);
        console.log(this.currentWord.revealWord());
        if (this.guessesLeft > 0 && this.currentWord.found === false){
          this.keepPrompting();
        }else {
          if (this.guessesLeft === 0){
            console.log("Game over.");
            console.log("The word you wanted was: " + this.randomWord);

          }else{
            console.log(this.currentWord.revealWord());
          }
        }
      }
    }
  });
}
}
function startGame() {
  console.log("\nHangman! Words in English that aren't.\n");
  console.log("Current word: " + word.revealWord());
  console.log("Guesses left: " + guessesLeft);
  console.log("Letters guessed: " + guessedLetters);
  
}
game.startGame();
