const userButtons = document.querySelectorAll('.user');
const result = document.getElementById('result');
const userScore = document.getElementById('user-score');
const compScore = document.getElementById('comp-score');

let uScore = 0; 
let cScore = 0;

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
    if ((playerSelection.toLowerCase()=='rock' && computerSelection=='scissors') || 
        (playerSelection.toLowerCase()=='paper' && computerSelection=='rock') || 
        (playerSelection.toLowerCase()=='scissors' && computerSelection=='paper')) {
        result.textContent = `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
        return 'W';
    }
    else if ((computerSelection=='rock' && playerSelection.toLowerCase()=='scissors') || 
        (computerSelection=='paper' && playerSelection.toLowerCase()=='rock') || 
        (computerSelection=='scissors' && playerSelection.toLowerCase()=='paper')) {
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}!`;
        return 'L';
    }
    else {
        result.textContent = `Its a tie! you both played ${playerSelection}!`;
        return 'T';
    }
}

// function to play a 5 round game of rock paper scissors
const playGame = () => {
    

    // for (let i = 0; i < 5; i++) {
    //     let result = playRound(prompt('rock, paper, scissors?'), getComputerChoice());

    //     if (result == 'W')
    //         userScore++;
    //     else if (result == 'L')
    //         compScore++;
    // }
    
    console.log('user: ', uScore);
    console.log('computer: ', cScore);

    // if (uScore > cScore)
    //     return `You win the game with ${uScore}/5 wins!`;
    // else if (uScore < cScore)
    //     return `Computer wins the game with ${cScore}/5 wins!`;
    // else
    //     return 'It\'s a tie, try another round to see a winner!';
}

userButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (uScore < 5 && cScore < 5) {
            let roundResult = playRound(button.id, getComputerChoice());
            if (roundResult == 'W') {
                uScore++
                userScore.textContent = `${uScore}`;
            } else if (roundResult == 'L') {
                cScore++;
                compScore.textContent = `${cScore}`;
            }

            if (uScore == 5 || cScore == 5)
                console.log('GAME OVER - ');

            console.log('user: ', uScore);
            console.log('comp: ', cScore);
        } else {
            console.log('GAME OVER - ', uScore,' : ', cScore);
        }
    })
});