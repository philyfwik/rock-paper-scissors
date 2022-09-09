
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
    if ((playerSelection.toLowerCase()=='rock' && computerSelection=='scissors') || (playerSelection.toLowerCase()=='paper' && computerSelection=='rock') || (playerSelection.toLowerCase()=='scissors' && computerSelection=='paper'))
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
    else if ((computerSelection=='rock' && playerSelection.toLowerCase()=='scissors') || (computerSelection=='paper' && playerSelection.toLowerCase()=='rock') || (computerSelection=='scissors' && playerSelection.toLowerCase()=='paper'))
        return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}!`;
    else
        return `Its a tie! you both played ${playerSelection}!`;
}

console.log(playRound(prompt('rock, paper, scissors?'), getComputerChoice()));