let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');

let textBox = document.querySelector('.text');
let winMessage = document.querySelector('.win-message');
let roundNumberBox = document.querySelector('.round-number');
let playerScoreBox = document.querySelector('.player-score');
let computerScoreBox = document.querySelector('.computer-score');

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 0;

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
        roundNumber++;
        winMessage.textContent = result;
    }

    function updateScore() {
        if (playerScore >= 5 || computerScore >= 5) newGame();
        playerScoreBox.textContent = playerScore;
        computerScoreBox.textContent = computerScore;
        roundNumberBox.textContent = roundNumber;
    }

    function newGame() {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        const playAgainButton = document.querySelector('.play-again');
        playAgainButton.style.display = 'block';

        if (computerScore === 5) {
            winMessage.textContent = "Computer wins!"
        }
        else {
            winMessage.textContent = "Player wins!"
        }
    }

    function resetScore() {
        window.location.reload();
    }

    function handlePlayerChoice(playerSelection) {
        playRound(playerSelection, getComputerChoice());
        updateScore();
    }

    rockButton.addEventListener('click', () => handlePlayerChoice('rock'));
    paperButton.addEventListener('click', () => handlePlayerChoice('paper'));
    scissorsButton.addEventListener('click', () => handlePlayerChoice('scissors'));

    document.querySelector('.play-again').addEventListener('click', resetScore);
}

playGame();
