

  
// sound 

var audio = new Audio("audio/Halloween_Theme.mp3");
audio.play();

var audio = new Audio("audio/Happy_Halloween.mp3");
audio.play();

// var win = new Audio("audio/Evil_Laugh.mp3");
// if(playerWon === true){
//     win.play();
// }

// var lost = new Audio("audio/Scream.mp3");
// if(playerLost === true){
//     lost.play();
// }

 
     // Get elements
  var showLives = document.getElementById("mylives");
  
    
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives ) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < wordBank.length    ; i++) {
      if (wordBank.length) {
        showLives.innerHTML = "You Win!";
      }
    }
   }

      
  
    
  // Play

   // play = function () {}
         
    
    var geusses = [ ];
    var lives = 10;

  var wordBank = [
      "Michael Myers",
      "Laurie Strode",
      "Jamie Lloyd",
      "Haddonfield, Illinois"
    ];
  
  function mywordBank(e) {
  var words = wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log(words);

  var choice = String.fromCharCode (e.keyCode).toUpperCase();
   
    
  

  }
 // Reset

  document.getElementById('reset').onclick = function() {
    
  }









