var Word = require("./word.js");
//constructor to build user guess
var Letter = function(let){
    this.charac = let;
    this.appear = false;
    //   return (this.appear) ? "_": this.charac;
};

    //below doesn't work but why not? 
      Letter.prototype.letterDisplay = function(){
          if (this.appear===true){
              return("_")
      }else{
          return(this.charac);
         }
          }
       
    

    

module.exports = Letter;