const tool = ['rock','paper','scissors'];

const computerPlay = () => {    
    let random = Math.floor(Math.random() * 3);
    return tool[random];
};

// console.log(computerPlay());

const playRound = (playerSelection, computerSelection) => {
   
    let playerChoice = playerSelection.toLowerCase();
    console.log('player: ' + playerSelection, 'computer: ' + computerSelection);

    if(playerChoice === 'paper' && computerSelection === 'rock' || playerChoice === 'rock' && computerSelection === 'scissors' || 
    playerChoice === 'scissors' && computerSelection === 'paper'){
            console.log('player won');
    } else if (playerChoice === 'rock' && computerSelection === 'rock' || playerChoice === 'paper' && computerSelection === 'paper' || playerChoice === 'scissors' && computerSelection === 'scissors'){
        console.log('equal');
    } else {
        console.log('computer worn');
    }
};

const game = () => {
   
    
    for(let i=0; i<5; i++) {
        let player = prompt('pick one: rock, scissors, paper: ');
        let computer = computerPlay();
        
        playRound(player, computer);
    }

};

game();