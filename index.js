
// function returns either rock, paper or scissors randomly
const getComputerChoice = () => {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0)
        return 'rock';
    else if (compChoice === 1)
        return 'paper';
    else
        return 'scissors';
}

// function to play a single round of rock paper scissors
const playRound = (playerSelection, computerSelection) => {
    if ((playerSelection.toLowerCase()=='rock' && computerSelection=='scissors') || (playerSelection.toLowerCase()=='paper' && computerSelection=='rock') || (playerSelection.toLowerCase()=='scissors' && computerSelection=='paper')) {
        console.log(`You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}!`);
        return 'W';
    }
    else if ((computerSelection=='rock' && playerSelection.toLowerCase()=='scissors') || (computerSelection=='paper' && playerSelection.toLowerCase()=='rock') || (computerSelection=='scissors' && playerSelection.toLowerCase()=='paper')) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
        return 'L';
    }
    else {
        console.log(`Its a tie! you both played ${playerSelection}!`);
        return 'T';
    }
}

// function to play a 5 round game of rock paper scissors
const playGame =() => {
    let userScore = 0, compScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(prompt('rock, paper, scissors?'), getComputerChoice());

        if (result == 'W')
            userScore++;
        else if (result == 'L')
            compScore++;
    }

    if (userScore > compScore)
        return `You win the game with ${userScore}/5 wins!`;
    else if (userScore < compScore)
        return `Computer wins the game with ${compScore}/5 wins!`;
    else
        return 'It\'s a tie, try another round to see a winner!';
}

console.log(playGame());