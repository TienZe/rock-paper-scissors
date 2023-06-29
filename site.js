const ROCK = 1, PAPER = 2, SCISSORS = 3;

const btns = document.querySelectorAll("button[data-select]");
const resultDiv = document.getElementById("result");

const playerScoreEle = document.getElementById("player-score");
const computerScoreEle = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

btns.forEach((element) => {
    element.addEventListener("click", (e) => {
       if (playerScore == 5 || computerScore == 5) {
        resetGame();
       }
       
       const playerSelection = +e.target.getAttribute("data-select");
       const computerSelection = getComputerChoice();
       const resString = playRound(computerSelection, playerSelection);

       if (resString == "Win") ++playerScore;
       if (resString == "Lose") ++computerScore;

       playerScoreEle.textContent = playerScore;
       computerScoreEle.textContent = computerScore;

       if (playerScore == 5 || computerScore == 5) {
            if (playerScore == 5) {
                resultDiv.textContent = "You win this game";
            } else {
                resultDiv.textContent = "Computer win this game";
            }   
       }
    });
})

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultDiv.textContent = "";
}
function getComputerChoice()
{
    return Math.floor(Math.random()*3) + 1;
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw";
    }
    if (playerSelection === ROCK && computerSelection === SCISSORS ||
        playerSelection === PAPER && computerSelection === ROCK ||
        playerSelection === SCISSORS && computerSelection === PAPER) {
        return "Win";
    }
    return "Lose";
}
