var letter = require("./letter.js");


function Word(target){
    this.target = target;
    this.characters = [];
    this.found = false;
    
    this.getLet = function(){
        for (var i=0; i< this.target.length; i++){
            this.characters.push(new letter(this.target[i]));

        }
    };
this.findWord = function(){
    this.found = this.characters.every(function(currLett){
        return currLett.appear;
    });
    return this.found;
};
this.checkLetter = function(guessLet){
    var toReturn = 0;
    for (var i = 0; i< this.characters.length; i++){
        if(this.characters[i].charac === guessLet){
            this.characters[i].appear = true;
            toReturn ++;
        }
    }
    return toReturn;
};

this.wordRender = function (){
    var string = "";
    for (var i=0; i< this.characters.length; i++){
        string += this.characters[i].letterRender();
    }
    return string;
};
}
module.exports = Word;

