console.log("Hello World!");

const ROCK = 1, PAPER = 2, SCISSORS = 3;

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

function game() {
    let playerPoint = 0, computerPoint = 0;

    while(playerPoint < 5 && computerPoint < 5) {
        let playerSelection = +prompt("Choose selection 1-3", 1);
        let computerSelection = getComputerChoice();

        let res = playRound(computerSelection, playerSelection);
        if (res == "Win") {
            ++playerPoint;
        } else if (res == "Lose") {
            ++ computerPoint;
        }

        console.log(res);
        console.log(`Tỉ số : ${playerPoint} : ${computerPoint}`);
    }

    if (playerPoint === 5) {
        console.log("You win this game");
    } else {
        console.log("Computer win this game");
    }
}

game();
