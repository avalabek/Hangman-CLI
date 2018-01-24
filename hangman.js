
var Word = require ("./word.js");
var prompt = require ("prompt");
prompt.start();

var game = {
  wordBank: ["bazooka", "cloister", "rampart", "bilge", "bungalow", "shampoo", "cherub", "mauve", "brackish", "aloof", "fjord", "muesli", "sauna", "lager"];
  guessesLeft: 10,
  currentWord: null,
  startGame: function(wrd){
    var randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    console.log(randomWord);
    this.currentWord: new Word(randomWord);
    this.currentWord.getLetters();
    this.keepPrompting();
},
keepPrompting: function(){
  var self = this;
  prompt.get(["guessLetter",]function(err,result){
    console.log("You guessed: " + result.guessLetter);
    var userGuess = self.currentWord.guess(result.guessLetter);
    console.log("You have guessed " + userGuess + "times.");
    if (userGuess === 0) {
      console.log("Wrong guess!");
      self.guessesLeft -=1;
    } else {
      console.log ("Correct guess!");
      if (self.currentWord.findWord()){
        console.log ("You win!");
        return 1;
      }else {
        console.log ("Guesses left: " + self.guessesLeft);
        console.log(self.currentWord.revealWord());
        if (self.guessesLeft > 0 && self.currentWord.found === false){
          self.keepPrompting();
        }else {
          if (self.guessesLeft === 0){
            console.log("Game over.");
            console.log("The word you wanted was: " + self.randomWord);

          }else{
            console.log(self.currentWord.revealWord());
          }
        }
      }
    }
  });
}
}
game.startGame();
