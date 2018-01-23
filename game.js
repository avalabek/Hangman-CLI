var Game = function(arrayWords){
    this.arrayWords = arrayWords;
}
 function chooseWord(){
     return this.arrayWords[Math.floor(Math.random() * this.arrayWords.length +1) -1];
 }
        

    


module.exports = Game;