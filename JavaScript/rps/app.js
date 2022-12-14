// This function contains the game logic

/*
 RPS GAME RULE
 1. If you choose rock against scissors, you win.
 2. If you choose paper against rock, you win.
 3. If you choose scissors against paper, you win.
 4. If you choose scissors against rock, you lose.
 5. If you choose paper against scissors, you lose.
 6. If you choose rock against paper, you lose.
*/

// app.js

// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    // Function to
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors']

        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;


                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                // Function to check who wins
                winner(this.innerText, computerChoice)

                // Calling gameOver function after 10 moves
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })

    }

    // Function to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.player-count');
        const computerScoreBoard = document.querySelector('.computer-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'Tie'
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    // Function to run when game is over
    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'None';
        })


        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'None';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart the Game';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }


    // Calling playGame function inside game
    playGame();

}

// Calling the game function
game();








/* const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {

        // Here we just defined  our buttons and options
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorsButton = document.querySelector('.scissors');
        const palyerOptions = [rockButton, paperButton, scissorsButton];
        const ComputerOptions = ['rock','paper','scissors'];

        // Function to begin the game
        // ForEach is used to implement a function to an array of elements each
        playerOptions.forEach(Option => {
            Option.addEventListener('Click', () => function () {
                const movesLeft = document.querySelector('moveLeft');
                moves++;
                movesLeft.innerText = 'Moves Left: ${10 - moves}';
                // THese two back ticks are known as
                // templete literals
                // $ is used to identify an object in JS. It is an identifier

                const ChoiceNumber = Math.floor(math.random() * 3);
                // equate Choice Number to Computer Choices as well
                const computerChoice = ComputerOptions[ChoiceNumber];

                winner(this.innerText, computerChoice);
            
            // this refers to the keyword of an object
        if (moves == 10) {
            gameOver(playerOptions, movesLeft);
        }
        });
        // This listens for any clicks on our buttons
        // The Math.Floor() function always rounds down and returns
        // the largest integer less than or equal to a given number.
        });

    }
    // Anything you pass into the bracket is a parameter
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = result.querySelector('.player-count');
        const computerScoreBoard = result.querySelector('.computer-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        // To lowercase converts any string all to toLowerCase
        // Strict equal operator
        if (player === computer) {
            result.textContent = "It's a Tie"
        } else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'THe Computer wins.'
                computer.Score++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'You won!'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            } 
        } else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'The Computer wins';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'You won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        } else if (player == 'paper')
        if (computer == 'scissors') {
            result.textContent = 'THe Computer wins.'
            computer.Score++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'You won!'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        } 
    }
    // Function when the game is over
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMoves = document.querySelector(',move');
        const result = document.querySelector('.result');
        const reloadButton = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none!'
        });

        chooseMoves.innerText = 'Game is over!!'
        movesLeft.style.display = 'None!'
        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You won the game!'
            result.style.color = 'Black';
        } else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You lost the game!'
            result.style.color = 'red';
    } else  {
        result.style.fontSize = '2rem';
        result.innerText = 'tie!'
        result.style.color = 'grey';
}
reloadButton.innerText = 'Restart the Game';
reloadButton.style.display = 'flex';
reloadButton.addEventListener('click', () => {
    window.location.reload();
})
    }
    playGame();
}
game()
*/