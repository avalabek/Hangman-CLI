var Letter = require("./letter.js");

function Word(wrd){
    this.word = wrd;
    this.character = [];
    this.found = false; 

           

Word.prototype.getLetters = function(){
    for (var i=0; i < this.word.length; i++){
        var newLetter = new Letter(this.word[i]);
        this.character.push(newLetter);
    }
}

//treat word like an array take the index and check against it looop
Word.prototype.guess = function(guessLetter){
    var score = 0;
    for (var i = 0; i < this.character.length; i++){
        if (this.character[i].character===guessLetter){
            this.character[i].show = true;
            ++score;
            console.log("Number of guesses: " + score);
            return score;
        }
    }
}

//translate the below
//         .map(l => {
//             var match = (guess === l.value);
//             l.visible = l.visible || match;
//             return match;
//         })
//         // return true if any new letter was matched
//         .some(v => v);
// }

// should all these functions be on prototype or?
Word.prototype.findWord = function(){
    var found = false;
    if (this.character.every(isTrue()){
        found = true;
        return found;
    }
function isTrue(value, index,ar){
//not sure about return statements or .every
    
        if (value.show === true) {
            return true;
        } else {
            return false;
        }
    }
}
Word.prototype.revealWord = function(){
    var str = "";
    for (var i=0; i< this.character.length; i++){
        str += this.character[i].reveal();
        console.log("test" + this.character[i]);
        console.log("reveal word: " + str);
        return str;
    }
}
}
module.exports = Word;
