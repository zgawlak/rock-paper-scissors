let playerScore;
let computerScore;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return computerChoice = choices[(Math.floor(Math.random() * choices.length))];
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionLower = playerSelection.toLowerCase();
    let result = "";
    if (playerSelectionLower === computerSelection) {
        result = "It's a tie!";
    }
    else if (playerSelectionLower === 'rock') {
        if (computerSelection === 'paper') {
            result = "You Lose! Paper beats rock";
            computerScore++;
        }
        else if (computerSelection === 'scissors') {
            result = "You Win! Rock beats scissors";
            playerScore++;
        }
    }
    else if (playerSelectionLower === 'paper') {
        if (computerSelection === 'rock') {
            result = "You Win! Paper beats rock";
            playerScore++;
        }
        else if (computerSelection === 'scissors') {
            result = "You Lose! Scissors beats paper";
            computerScore++;
        }
    }
    else if (playerSelectionLower === 'scissors') {
        if (computerSelection === 'rock') {
            result = "You Lose! Rock beats scissors";
            computerScore++;
        }
        else if (computerSelection === 'paper') {
            result = "You Win! Scissors beats paper";
            playerScore++;
        }
    }
    else {
        result = "Invalid choice";
    }
    return result;
}


function game() {
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    // for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose rock, paper, or scissors:");
    console.log(playRound(playerSelection, getComputerChoice()));
    // }
    console.log("Final score: \nPlayer - " + playerScore + "\nComputer - " + computerScore + "\nTie - " + tie);
}

document.querySelector('.rock').addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

document.querySelector('.paper').addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})

document.querySelector('.scissors').addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})