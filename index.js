const rock = "Rock",
  paper = "Paper",
  scissors = "Scissors";
const choices = [rock, paper, scissors];
const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];
const getHumanChoice = () => {
  const humanChoiceIndex = parseInt(
    prompt("Enter 0, 1 or 2 for rock, paper or scissors respectively")
  );
  return choices[humanChoiceIndex];
};

let humanScore = 0,
  computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) {
    console.log("It was a draw. No winners.");
  } else if (
    (humanChoice == rock && computerChoice == paper) ||
    (humanChoice == paper && computerChoice == scissors) ||
    (humanChoice == scissors && computerChoice == rock)
  ) {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  } else if (
    (humanChoice == rock && computerChoice == scissors) ||
    (humanChoice == paper && computerChoice == rock) ||
    (humanChoice == scissors && computerChoice == paper)
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
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
