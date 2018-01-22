var Word = require("./letter.js");
//constructor to build user guess
var Letter = function(userGuess){
    this.userGuess = userGuess;
    this.show = false;
}
//put function on prototype to show correct guess
Letter.prototype.reveal = function(){
    if (this.show === true){
        then console.log(this.userGuess);
    }else{
        console.log("_");
    } 
    }

module.exports = Letter;