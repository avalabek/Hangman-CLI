var Letter = require("./letter.js");

var Word = function(userGuess){
    this.userGuess = userGuess;
    this.letters = userGuess{
        //need to split input at " " and then check letter
    }

}

showWord(){
    var word = this.letters
//join them by ""
}
console.log(word);


userGuess(guess){
    this.letters.map (function(letter){
        if (guess === letter.userGuess){
            letter.show = true;
            return true;
        }else {
            return false;
        }
        
    })
    
}
gameOver(){
    return this.showWord() === this.userGuess;
}
}
module.exports = Word;
