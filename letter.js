var Word = require("./word.js");
//constructor to build user guess
var Letter = function(let){
    this.charac = let;
    this.appear = false;
    //   return (this.appear) ? "_": this.charac;
};
// Letter.prototype.letterRender = function () {
//     // Below is an example of a ternary operator, read this as:
//     // "if this.visible is true return this.value otherwise return _"
//     return (this.appear) ? this.value : '_';
// }
    //below doesn't work but why?
      Letter.prototype.letterRender = function(){
          if (this.appear===true){
              return("_")
      }else{
          return(this.charac);
         }
          }
       
    
// };
//put function on prototype to show correct guess
// Letter.prototype.reveal = function(){
//     if (this.show === false){
//          return "_";
//     }else{
//      return value;
//     }
//         //need to reassign this.show to true after each guess?? or change it so that this.userGuess===the right letter    }else{
        
//     } 
    

module.exports = Letter;