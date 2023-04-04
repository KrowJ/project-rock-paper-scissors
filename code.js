// This is going to be a game of rock, paper, scissors and it will be played on the browser console

alert("Hi traveler!");
alert(
  "This is a rock, paper or scissors game. \n ----- instructions of the game ----- \n The game will be played in the console of the web browser \n Type on the prompt \n rock / paper / scissors"
);

function computerChoice(options) {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

let options = ["rock", "paper", "scissors"];
let player = 0;
let computer = 0;
let draw = 0;

function game(playRound) {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    console.log("Let see who wins this round!");
    playerSelection = window.prompt("select a weapon!");
    while (
      playerSelection != "rock" &&
      playerSelection != "paper" &&
      playerSelection != "scissors"
    ) {
      playerSelection = prompt(
        playerSelection +
          " is not valid. Please pick: rock or paper or scissors"
      );
    }
    console.log("player: ", playerSelection);
    let computerSelection = computerChoice(options);
    console.log("computer: ", computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      "Your score: " +
        player +
        " Wins " +
        computer +
        " loses and " +
        draw +
        " draws\n -------"
    );
  }
  if (player > computer) {
    return "**Player is the ultimate master winner**";
  } else if (player < computer) {
    return "**the computer crushed you**";
  } else if (player == computer) {
    return "**both sides loosed *** It is a draw**";
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
      player++;
      return "Player Wins this Round!";
    }

    if (
      (computerSelection == options[0] &&
        playerSelection.toLowerCase() == options[2]) ||
      (computerSelection == options[1] &&
        playerSelection.toLowerCase() == options[0]) ||
      (computerSelection == options[2] &&
        playerSelection.toLowerCase() == options[1])
    ) {
      computer++;
      return "***You lost. Better luck next time***";
    }

    if (playerSelection.toLowerCase() == computerSelection) {
      draw++;
      return "It is a draw!";
    }
  }
}

console.log(game());
