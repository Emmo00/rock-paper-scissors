let weapons = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return weapons[Math.floor(Math.random() * 10) % 3];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return {
      winner: null,
      message: "Tie",
    };
  }
  if (
    (weapons.indexOf(playerSelection) + 1) % 3 ==
    weapons.indexOf(computerSelection)
  ) {
    return {
      winner: "computer",
      message: `You lose! ${computerSelection} beats ${playerSelection}`,
    };
  }
  return {
    winner: "player",
    message: `You win! ${playerSelection} beats ${computerSelection}`,
  };
}

export { playRound, getComputerChoice };
