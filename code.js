// This is going to be a game of rock, paper, scissors and it will be played on the browser console

let options = ["rock", "paper", "scissors"];

function computerChoice(options) {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() == options[0] &&
      computerSelection == options[2]) ||
    (playerSelection.toLowerCase() == options[1] &&
      computerSelection == options[0]) ||
    (playerSelection.toLowerCase() == options[2] &&
      computerSelection == options[1])
  ) {
    return "Player Wins this Round!";
  } else if (
    (computerSelection == options[0] &&
      playerSelection.toLowerCase() == options[2]) ||
    (computerSelection == options[1] &&
      playerSelection.toLowerCase() == options[0]) ||
    (computerSelection == options[2] &&
      playerSelection.toLowerCase() == options[1])
  ) {
    return "***You lost. Better luck next time***";
  } else if (playerSelection.toLowerCase() == computerSelection) {
    return "It is a draw!";
  }
}

let playerSelection = window.prompt("select a weapon!");
console.log("player: ", playerSelection);

let computerSelection = computerChoice(options);
console.log("computer: ", computerSelection);

console.log(playRound(playerSelection, computerSelection));
