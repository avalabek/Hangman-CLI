var Word = require("./letter.js");
//constructor to build user guess
var Letter = function(userGuess){
    this.userGuess = userGuess;
    this.show = false;
}
//put function on prototype to show correct guess
Letter.prototype.reveal = function(){
    if (this.show === true){
         console.log(this.userGuess);
        //need to reassign this.show to true after each guess?? or change it so that this.userGuess===the right letter    }else{
        console.log("_");
    } 
    }

module.exports = Letter;