// 0: Rock, 1: Paper, 2: Scissors
let container = document.querySelector('.container');
let result = document.querySelector('#result');
let hScoreDisplay = document.querySelector('#you');
let cScoreDisplay = document.querySelector('#computer');
let finalScore = document.querySelector('h2');

let humanScore = 0;
let computerScore = 0;
const options = ['Rock', 'Paper', 'Scissors']

function playRound(humanChoice, computerChoice) {
    let text = ''
    if (humanChoice === computerChoice + 1 || humanChoice === computerChoice - 2) {
        text = `You won the round! ${options[humanChoice]} beats ${options[computerChoice]}`;
        humanScore++;
    } else if (computerChoice === humanChoice + 1 || computerChoice === humanChoice - 2) {
        text = `You lost the round! ${options[computerChoice]} beats ${options[humanChoice]}`;
        computerScore++;
    } else {
        text = 'You tied! No winners!';
    }

    result.textContent = text;

    if (humanScore  >= 5 || computerScore >= 5) {
        if (humanScore >= 5) {
            finalScore.textContent = `Congratulations! You won! Final score: ${humanScore} - ${computerScore}`
        }
        else {
            finalScore.textContent = `You lost! Better luck next time! Final score: ${computerScore} - ${humanScore}`
        }
        
        humanScore = 0;
        computerScore = 0;
    }

    updateScore();
}

function updateScore() {
    hScoreDisplay.textContent = 'Your score: ' + humanScore;
    cScoreDisplay.textContent = 'Computer score: ' + computerScore;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice
}

function getHumanChoice(event) {
    let hChoice = NaN;
    let element = event.target

    switch(element.id) {
        case 'rock':
            hChoice = 0;
            break;
        case 'paper':
            hChoice = 1;
            break;
        case 'scissors':
            hChoice = 2;
            break;
    }

    let cChoice = getComputerChoice();
    playRound(hChoice, cChoice);
}

container.addEventListener('click', getHumanChoice)