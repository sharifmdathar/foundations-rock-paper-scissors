const rock = "Rock",
  paper = "Paper",
  scissors = "Scissors";
const choices = [rock, paper, scissors];
const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];
const resultEl = document.querySelector("#result");

const addParaToDiv = (para) => {
  const paraEl = document.createElement("p");
  paraEl.textContent = para;
  resultEl.appendChild(paraEl);
};

let humanScore = 0,
  computerScore = 0;
let isGameOver = false;

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    addParaToDiv("It was a draw. No winners.");
  } else if (
    (humanChoice === rock && computerChoice === paper) ||
    (humanChoice === paper && computerChoice === scissors) ||
    (humanChoice === scissors && computerChoice === rock)
  ) {
    addParaToDiv(`You lost! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  } else if (
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice === paper && computerChoice === rock) ||
    (humanChoice === scissors && computerChoice === paper)
  ) {
    addParaToDiv(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  }
};

const playGame = (humanChoice) => {
  const computerChoice = getComputerChoice();
  addParaToDiv(`You chose ${humanChoice}`);
  addParaToDiv(`Computer chose ${computerChoice}`);
  playRound(humanChoice, computerChoice);
  addParaToDiv(`Current Score: You=${humanScore} Computer=${computerScore}`);
  resultEl.appendChild(document.createElement("hr"));
  if (humanScore === 5 || computerScore === 5) {
    const h1 = document.createElement("h1");
    h1.textContent = "Game has Ended";
    resultEl.appendChild(h1);
    const h2 = document.createElement("h2");
    h2.textContent = humanScore === 5 ? "You have won" : "You lost";
    resultEl.appendChild(h2);
    resultEl.appendChild(document.createElement("hr"));
    isGameOver = true;
    const btn = document.createElement("button");
    btn.textContent = "Restart";
    btn.onclick = () => location.reload();
    resultEl.appendChild(btn);
  }
};

const btnElems = document.querySelectorAll("button");
Array.from(btnElems).forEach((el) => {
  el.disabled = isGameOver;
  el.onclick = () => {
    isGameOver ? alert("Game is over") : playGame(el.textContent);
  };
});
