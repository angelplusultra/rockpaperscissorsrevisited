const options = document.querySelector(".options");
const winner = document.querySelector(".winner");
const tryAgain = document.querySelector(".hide");

const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //Computer Options

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(
          Math.random() * computerOptions.length
        );
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 2000);

        //Hand Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  // Here is the compareHands function that checks who won each round

  const compareHands = (playerChoice, computerChoice) => {
    // Updates Text
    const winner = document.querySelector(".winner");

    // Checks for Tie
    if (playerChoice === computerChoice) {
      winner.textContent = "Tie!";
      return;
    }

    //Checks for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        endGame();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        endGame();
        return;
      }
    }

    // Checks for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        endGame();
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        endGame();
        return;
      }
    }

    //Checks for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        endGame();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        endGame();
        return;
      }
    }

    //end of compareHands function
  };
  function endGame() {
    if (pScore === 5) {
      winner.textContent = "Player wins the Game!";
      options.classList.add("remove");
      tryAgain.classList.add("reveal");
     
      return;
    }

    if (cScore === 5) {
      winner.textcontent = "Computer wins the Game!";
      options.classList.add("remove");
      tryAgain.classList.add("reveal");
      
      return;
    }
  }

  startGame();
  playMatch();
};

// start the game function
game();
