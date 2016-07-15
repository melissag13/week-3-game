

  var wordBank = [
      "Michael Myers",
      "Laurie Strode",
      "Jamie Lloyd",
      "Haddonfield, Illinois"
  ];
  
  var words = wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log(words);

 
  
// sound 

var audio = new Audio("audio/Halloween_Theme.mp3");
audio.play();

var audio = new Audio("audio/Happy_Halloween.mp3");
audio.play();