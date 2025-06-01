// 0: Rock, 1: Paper, 2: Scissors
let humanScore = 0;
let computerScore = 0;
const options = ['Rock', 'Paper', 'Scissors']

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        
        if (i == 4) {
            console.log('Final scores');
        }
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log('---------------------------------')
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice + 1 || humanChoice === computerChoice - 2) {
        console.log(`You win! ${options[humanChoice]} beats ${options[computerChoice]}`);
        humanScore++;
    } else if (computerChoice === humanChoice + 1 || computerChoice === humanChoice - 2) {
        console.log(`You lose! ${options[computerChoice]} beats ${options[humanChoice]}`);
        computerScore++;
    } else {
        console.log('You tied! No winners!');
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice
}

function getHumanChoice() {
    let choice = prompt(`Rock, Paper, or Scissors?`).toLowerCase()
    switch (choice) {
        case 'rock':
            return 0
        case 'paper':
            return 1
        case 'scissors':
            return 2
    }
}

playGame();