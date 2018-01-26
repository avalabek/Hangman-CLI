
var Word = require ("./word.js");
var prompt = require ("prompt");

    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("\nHangman! Words in English that aren't.\n");
    
    console.log("Learn how enriched English is by other languages!");
console.log("Guess a letter.");
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
prompt.start();


var game = {
  wordBank: ["bazooka", "cloister", "rampart", "bilge", "bungalow", "shampoo", "cherub", "mauve", "brackish", "aloof", "fjord", "muesli", "sauna", "lager"],
  wordsWon:0,
  guessesRemaining: 10,
  currentWrd: null,
  startGame: function(wrd){
    this.resetGuesses();
    this.currentWrd = new Word (this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
    this.currentWrd.getLet();
    this.promptUser();
  },
resetGuesses: function(){
  this.guessesRemaining = 10;
},

promptUser: function(){
  var self= this;
  // testing: to show correct word to make guess easy
  // console.log("The word was: " + JSON.stringify(self.currentWrd.target));
  prompt.get(["guessLet"],function(err,result){
    console.log("You guessed: " + result.guessLet);
    var manyGuessed = self.currentWrd.checkLetter(result.guessLet);
    
    
    if (manyGuessed === 0) {
      console.log("Wrong guess!");
      self.guessesRemaining --;
      //here need to console.log the blanks with letters or in game object
    } else {
      console.log ("Correct guess!");
      if (self.currentWrd.findWord()){
        console.log ("You win!");
        console.log("The word that was a language immigrant is: " + JSON.stringify(self.currentWrd.target));
        
        console.log ("*********************");
        return;
      }
      }

        console.log ("Guesses left: " + self.guessesRemaining);
        console.log("__________________________");
        if ((self.guessesRemaining > 0) && (self.currentWrd.found === false)){
          self.promptUser();
        }else if 
          (self.guessesRemaining === 0){
            console.log("Game over.");
          console.log("The correct word that has immigrated from another language is: ", self.currentWrd.target);

          }else{
            console.log(self.currentWrd.wordRender());
          }
        });
      }
    };

game.startGame();
