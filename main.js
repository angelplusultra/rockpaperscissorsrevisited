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
    const hands = document.querySelectorAll('.hands img');
    hands.forEach(hand =>{
        hand.addEventListener('animationend', function(){
            this.style.animation = '';
        });
    })

    //Computer Options

    const computerOptions = ["rock", "paper", "scissors"];
    
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * computerOptions.length);
        const computerChoice = computerOptions[computerNumber];
        

        setTimeout(() =>{
            
        compareHands(this.textContent, computerChoice);

        playerHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${computerChoice}.png`;
        }, 2000)

        //Hand Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () =>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }
  
// Here is the compareHands function that checks who won each round

const compareHands = (playerChoice, computerChoice) => {

// Updates Text
const winner = document.querySelector(".winner")


// Checks for Tie
if(playerChoice === computerChoice){
winner.textContent = 'Tie!';
return;}

    //Checks for Rock
if(playerChoice === 'rock'){
if(computerChoice === 'scissors'){
winner.textContent = 'Player Wins!'
pScore++; updateScore();
return;}
else{winner.textContent = 'Computer Wins!'
cScore++; updateScore(); 
return;}}

// Checks for Paper
if(playerChoice === 'paper'){
if(computerChoice === 'rock'){
winner.textContent = 'Player Wins!';
pScore++; updateScore();}
else{winner.textContent = 'Computer Wins!';
cScore++; updateScore();  return;}}

    //Checks for Scissors
if(playerChoice === 'scissors'){
if(computerChoice === 'paper'){
winner.textContent = 'Player Wins!'; pScore++; updateScore();
return;}
else{winner.textContent = 'Computer Wins!'; cScore++; updateScore(); 
return;}}
            
 //end of compareHands function               
}       
    







    startGame();
    playMatch();      
        
       
    }
    



    



  
  
 


// start the game function
game();
