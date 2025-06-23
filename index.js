const rock = "rock",
  paper = "paper",
  scissors = "scissors";
const choices = [rock, paper, scissors];
const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];
const getHumanChoice = () => {
  const humanChoiceIndex = parseInt(
    prompt("Enter 0, 1 or 2 for rock, paper or scissor respectively")
  );
  return choices[humanChoiceIndex];
};

let humanScore = 0,
  computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) {
    console.log("It was a draw. No winners");
  } else if (humanChoice == rock && computerChoice == paper) {
    console.log("You lost! Paper beats Rock");
    computerScore++;
  } else if (humanChoice == rock && computerChoice == scissors) {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice == paper && computerChoice == rock) {
    console.log("You win! Rock beats Paper");
    humanScore++;
  } else if (humanChoice == paper && computerChoice == scissors) {
    console.log("You lost! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice == scissors && computerChoice == rock) {
    console.log("You lost! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice == scissors && computerChoice == paper) {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  }
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    playRound(humanChoice, computerChoice);
    console.log("\n");
  }
  console.log(`Final Score: You=${humanScore} Computer=${computerScore}`);
};

playGame();
