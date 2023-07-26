let playerScore = 0;
let computerScore = 0;

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');

let textBox = document.querySelector('.text');
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

function newGame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    if (computerScore === 5) {
        winMessage.textContent = "Computer wins!"
    }
    else {
        winMessage.textContent = "Player wins!"
    }
    playAgainButton = document.createElement('button');
    playAgainButton.textContent = "Play again?";
    textBox.appendChild(playAgainButton);
    playAgainButton.addEventListener('click', resetScore);
}

function resetScore() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    computerScore = 0;
    playerScore = 0;
    updateScore();
    
    winMessage.textContent = "";
    textBox.removeChild(playAgainButton);
}

function updateScore() {
    if (playerScore >= 5 || computerScore >= 5) newGame();
    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = computerScore;
}

rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})
rockButton.addEventListener('click', updateScore);

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})
paperButton.addEventListener('click', updateScore);

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})
scissorsButton.addEventListener('click', updateScore);