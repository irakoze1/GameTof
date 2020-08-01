const game = function () {
    let pScore = 0;
    let cScore = 0;

    //start the Game
    const startGame = function () {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', function () {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match function
    const playMatch = function () {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const computerOptions =["rock", "paper", "scissors"];
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });

        options.forEach(option => {
            option.addEventListener("click", function () {
                //compute choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
              setTimeout( () => {
                //compare Hands
                compareHands(this.textContent, computerChoice);
                //update Image
                playerHand.src = `img/${this.textContent}.png`;
                computerHand.src = `img/${computerChoice}.png`;
              },2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    //Update Score
    const updateScore = function () {
        const playerScore = document.querySelector('.player-score p');
        const ComputerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        ComputerScore.textContent = cScore;
    }
    //Compare Hands
    const compareHands = function (playerChoice, computerChoice) {
        const winner = document.querySelector('.winner');
        //checking for tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a Tie";
            return;
        }
        //Ckeking for rock
        if (playerChoice === 'rock') {
            if(computerChoice === "scissors"){
            winner.textContent = "Player wins";
            pScore++;
            updateScore();
            return;
            }else
            {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //Ckeking for Paper
        if (playerChoice === 'paper') {
            if(computerChoice === "scissors"){
            winner.textContent = "Computer wins";
            cScore++;
            updateScore();
            return;
            }else
            {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //Ckeking for scissors
        if (playerChoice === 'scissors') {
            if(computerChoice === "rock"){
            winner.textContent = "Compyter wins";
            cScore++;
            updateScore();
            return;
            }else
            {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }
        }
    };
    //function for start game
    startGame();
    playMatch();
};

game();