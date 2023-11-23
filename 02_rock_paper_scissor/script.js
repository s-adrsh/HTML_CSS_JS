const rock = 1,
  paper = 2,
  scissors = 3;

let userInput = 3;
let randomNumber = Math.ceil(Math.random() * 3);

randomNumber !== userInput                       // check if user and computer choose same
  ? randomNumber == rock                         // Check if computer chose rock, paper or scissors
    ? userInput == paper                        
      ? console.log(`Paper Wins over Rock.. ${randomNumber} \n  User get 1 point..`)
      : console.log(`Rock Wins over Scissors..${randomNumber} \n  Computer get 1 point..`)
    : randomNumber == paper
    ? userInput == rock                         
      ? console.log(`Paper wins over Rock.. ${randomNumber} \n  Computer get 1 point..`)
      : console.log(`Scissors wins over Paper.. ${randomNumber} \n  User get 1 point`)
    : userInput == rock
    ? console.log(`Rock wins over Scissors ${randomNumber} \n User get 1 point..`)
    : console.log(`Scissors win over paper..${randomNumber} \n  Computer ger 1 point..`)
  : console.log("Play Again " + randomNumber);

// -----------------------------------------
// |computer   |  user       |    Win      |
// |-----------|-------------|-------------|
// | rock      |  paper      |   paper     |
// | rock      |  scissors   |   rock      |
// | paper     |  rock       |   paper     |
// | paper     |  scissors   |   scissors  |
// | scissors  |  rock       |   rock      |
// |scissors   |  paper      |   scissors  |
// -----------------------------------------
