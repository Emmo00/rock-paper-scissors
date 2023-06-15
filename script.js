import { getComputerChoice, playRound } from "./game.js";

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let resultElement = document.querySelector(".result");
let playerScoreContainer = document.querySelector(".player-score");
let computerScoreContainer = document.querySelector(".computer-score");

function someoneWon({ player, computer }) {
  if (player == 5) {
    // player won
    resultElement.textContent = "player won";
    return true;
  }
  if (computer == 5) {
    // computer won
    resultElement.textContent = "computer won";
    return true;
  }
  return false;
}

function updateScore({ winner }) {
  let playerScore = parseInt(playerScoreContainer.textContent);
  let computerScore = parseInt(computerScoreContainer.textContent);
  if (winner === "player") {
    playerScore++;
    playerScoreContainer.textContent = playerScore;
  } else if (winner === "computer") {
    computerScore++;
    computerScoreContainer.textContent = computerScore;
  }
  let scoreObject = {
    player: playerScore,
    computer: computerScore,
  };
  if (someoneWon(scoreObject)) {
    playerScoreContainer.textContent = "0";
    computerScoreContainer.textContent = "0";
  }
}

function playGame(userChoice) {
  let result = playRound(userChoice, getComputerChoice());
  resultElement.textContent = result.message;
  updateScore(result);
}

rock.addEventListener("click", () => {
  playGame("rock");
});
paper.addEventListener("click", () => {
  playGame("paper");
});
scissors.addEventListener("click", () => {
  playGame("scissors");
});
