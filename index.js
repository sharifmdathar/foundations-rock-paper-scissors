const choices = ["rock", "paper", "scissors"];
const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];
const getHumanChoice = () => {
  const humanChoiceIndex = parseInt(
    prompt("Enter 0, 1 or 2 for rock, paper or scissor respectively")
  );
  return choices[humanChoiceIndex];
};
