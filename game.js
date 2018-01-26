var arrayWords = ["bazooka", "cloister", "rampart", "bilge", "bungalow", "shampoo", "cherub", "mauve", "brackish", "aloof", "fjord", "muesli", "sauna", "lager"];

var Game = function (arrayWords){
this.arrayWords = arrayWords;
}
function chooseWord(){
    return this.arrayWords[Math.floor(Math.random() * this.arrayWords.length + 1) - 1];
}
    
    
    
};
//shouldn't this work too?
// var Game = function(arrayWords){
//     this.arrayWords = arrayWords;
// }
//  function chooseWord(){
//      return this.arrayWords[Math.floor(Math.random() * this.arrayWords.length +1) -1];
//  }
        

    


 module.exports = Game;