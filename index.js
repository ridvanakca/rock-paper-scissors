const tool = ['rock','paper','scissors'];


const container = document.querySelector('.buttons');
const playerScoreContainer = document.querySelector('#playerScore');
const computerScoreContainer = document.querySelector('#computerScore');
const result = document.querySelector('.result');


const div = document.createElement('div');
const spanPlayer = document.createElement('span');
const spanComputer = document.createElement('span');

const btns = Array.from(document.querySelectorAll('.btn'));

let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {    
    let random = Math.floor(Math.random() * 3);
    return tool[random];
};

const playRound = (playerSelection, computerSelection) => {

   
    let playerChoice = playerSelection.toLowerCase();
    console.log('player: ' + playerSelection, 'computer: ' + computerSelection);

    if(playerChoice === 'paper' && computerSelection === 'rock' || playerChoice === 'rock' && computerSelection === 'scissors' || 
    playerChoice === 'scissors' && computerSelection === 'paper'){
            div.innerHTML = 'player won';
           spanPlayer.textContent = ++playerScore;
    } else if (playerChoice === 'rock' && computerSelection === 'rock' || playerChoice === 'paper' && computerSelection === 'paper' || playerChoice === 'scissors' && computerSelection === 'scissors'){
        div.innerHTML = 'equal';
        spanPlayer.textContent = ++playerScore;
        spanComputer.textContent = ++computerScore;
    } else {
        div.innerHTML = 'computer won';
        spanComputer.textContent = ++computerScore;
    }
   
   // container.appendChild(div);
    playerScoreContainer.appendChild(spanPlayer);
    computerScoreContainer.appendChild(spanComputer);

};

const showResult = () => {
    if(playerScore == 5) {
        result.textContent = 'player win';
        resetGame();
    } else if(computerScore == 5) {
        result.textContent = 'computer win';
        resetGame();
    }
}

const resetGame = () => {
    btns.forEach(btn => {
      btn.setAttribute('disabled', true);  
    });
    setTimeout(() => {
    window.location.reload();
    },2000);
}

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let computer = computerPlay();
        playRound(btn.id, computer);

        if(playerScore == 5 || computerScore == 5) {
            showResult();
        }

    });
});










//game();