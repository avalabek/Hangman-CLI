var Word = require("./letter.js");
//constructor to build user guess
var Letter = function(value){
    this.value = value;
    this.show = false;
}
//put function on prototype to show correct guess
Letter.prototype.reveal = function(){
    if (this.show === false){
         return "_";
    }else{
     return value;
    }
        //need to reassign this.show to true after each guess?? or change it so that this.userGuess===the right letter    }else{
        
    } 
    

module.exports = Letter;