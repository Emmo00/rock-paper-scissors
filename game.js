let weapons = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return weapons[Math.floor(Math.random() * 10) % 3];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "Tie";
  }
  if (
    (weapons.indexOf(playerSelection) + 1) % 3 ==
    weapons.indexOf(computerSelection)
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  return `You win! ${playerSelection} beats ${computerSelection}`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Choose your weapon: rock / paper / scissors:");
    let result = playRound(playerSelection, getComputerChoice());
    console.log(result);
  }
}

game();
