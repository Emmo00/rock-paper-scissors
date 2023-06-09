import { getComputerChoice, playRound } from "./game.js";

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let resultElement = document.querySelector(".result");
let scoreBoard = document.querySelector(".score-board");
function someoneWon(scores) {
  if (scores[0] == 5) {
    // player won
    resultElement.textContent = "player won";
    return true;
  }
  if (scores[1] == 5) {
    // computer won
    resultElement.textContent = "computer won";
    return true;
  }
  return false;
}

function updateScore(result) {
  let score = scoreBoard.textContent;
  score = score.split("-");
  if (result.split(" ").includes("win!")) {
    score[0] = `${parseInt(score[0]) + 1}`;
  } else if (result.split(" ").includes("lose!")) {
    score[1] = `${parseInt(score[1]) + 1}`;
  }
  if (someoneWon(score)) {
    scoreBoard.textContent = "0-0";
    return;
  }
  scoreBoard.textContent = score.join("-");
}

function playGame(userChoice) {
  let result = playRound(userChoice, getComputerChoice());
  resultElement.textContent = result;
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
