var colors = require ("colors/safe");
var prompt = require ("prompt");
var Word = require("./word.js");

var game = {
    wordBank: ["bazooka", "cloister", "rampart", "bilge", "bungalow", "shampoo", "cherub", "mauve", "brackish", "aloof", "fjord", "muesli", "sauna", "lager"],
    wordsWon: 0,
    guessesRemaining: 10,
    currentWrd: null,
    startGame: function (wrd) {
        this.resetGuesses();
        this.currentWrd = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.currentWrd.getLet();
        this.promptUser();
    },
    resetGuesses: function () {
        this.guessesRemaining = 10;
    },

    promptUser: function () {
        //the below neither harms nor helps code; trying to validate letter
        // When line 51 changed to read 
        // prompt.get(schema,["guessLet"],function(err,result){
        //then it will prompt user to make a letter entry if she types a number; however, the rest of
        // game doesn't work; come back if time.
        var schema = {
            properties: {
                guessLet: {
                    pattern: /^[a-zA-Z\s\-]+$/,
                    message: "Please make sure you guess only letters",
                    required: true
                }
            }
        };
        var self = this;
        // testing: to show correct word to make guess easy
        // console.log("The word was: " + JSON.stringify(self.currentWrd.target));
        console.log(colors.blue("What's your guess?"))
        prompt.get(["guessLet"], function (err, result) {
            console.log("You guessed: " + result.guessLet);

            var manyGuessed = self.currentWrd.checkLetter(result.guessLet);


            if (manyGuessed === 0) {
                console.log(colors.red("Wrong guess!"));
                self.guessesRemaining--;
                //here need to console.log the blanks with letters or in game object
            } else {
                console.log(colors.magenta("Correct guess!"));
                if (self.currentWrd.findWord()) {
                    console.log(colors.blue("You win!"));
                    console.log("The word that was a language immigrant is: " + JSON.stringify(self.currentWrd.target));

                    console.log("*********************");
                    return;
                }
            }

            console.log("Guesses left: " + self.guessesRemaining);
            console.log("__________________________");
            if ((self.guessesRemaining > 0) && (self.currentWrd.found === false)) {
                self.promptUser();
            } else if
          (self.guessesRemaining === 0) {
                console.log(colors.white("Game over."));
                console.log("The correct word that has immigrated from another language is: ", self.currentWrd.target);

            } else {
                console.log(self.currentWrd.wordDisplay());
            }
        });
    }
};
game.startGame();




// var arrayWords = ["bazooka", "cloister", "rampart", "bilge", "bungalow", "shampoo", "cherub", "mauve", "brackish", "aloof", "fjord", "muesli", "sauna", "lager"];

// var Game = function (arrayWords){
// this.arrayWords = arrayWords;
// }
// function chooseWord(){
//     return this.arrayWords[Math.floor(Math.random() * this.arrayWords.length + 1) - 1];
// }
    
    
    
// };
// //shouldn't this work too?
// // var Game = function(arrayWords){
// //     this.arrayWords = arrayWords;
// // }
// //  function chooseWord(){
// //      return this.arrayWords[Math.floor(Math.random() * this.arrayWords.length +1) -1];
// //  }
        

    


//  module.exports = Game;