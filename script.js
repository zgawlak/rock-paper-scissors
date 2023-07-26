let playerScore;
let computerScore;

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');

let winMessage = document.querySelector('.win-message');
let playerScoreBox = document.querySelector('.player-score');
let computerScoreBox = document.querySelector('.computer-score');

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
    winMessage.textContent = result;
}

rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})