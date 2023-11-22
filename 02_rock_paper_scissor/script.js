const rock = 1;
const paper = 2;
const scissors = 3;

let userInput = 3;
let randomNumber = Math.ceil(Math.random() * 3);

if (randomNumber == userInput) {
  console.log("Play Again " + randomNumber);
} else {
  if (randomNumber == paper) {
    console.log("Hey I am Paper..");
    if (userInput == rock) {
      console.log("Paper wins.. / Computer Wins");
    } else {
      console.log("Scissor Wins / User Wins");
    }
  } else if (randomNumber == rock) {
    console.log("Hey I am Rock...");
    if (userInput == paper) {
      console.log("Paper wins.../ User Wins");
    } else {
      console.log("Rock wins.../ Computer Wins");
    }
  } else {
    console.log("Hey I am Scissors...");
    if (userInput == rock) {
      console.log("Rock wins.. / User Wins");
    } else {
      console.log("Scissor wins.. / Computer Wins");
    }
  }
}

// user        computer            Win

// rock        paper               paper
// scissors    paper               scissors
// paper       rock                paper
// scissors    rock                rock
// rock        scissors            rock
// paper       scissors            scissors

