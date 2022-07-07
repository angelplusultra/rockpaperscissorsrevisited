const game = ()=> {
 let pScore = 0;
 let cScore = 0;   

//Start the Game
const startGame = () =>{
    const playBtn =  document.querySelector(".intro button");
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');
playBtn.addEventListener('click', ()=>{
    introScreen.classList.add('fadeOut');
    match.classList.add('fadeIn');

});

}

const playMatch = () => {
    const options =  document.querySelectorAll('.options button')
    const playerHand = document.querySelector('.player-hand')
    const computerHand = document.querySelector('.computer-hand')
    //Computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];
    options.forEach(option=>{
        option.addEventListener('click', function(){
            //Computer Choice
            const computerNumber = Math.floor(Math.random() * computerOptions.length);
            const computerChoice = computerOptions[computerNumber]
            console.log(computerChoice)

        });

    });
    
   
}
startGame();
playMatch()


};


// start the game function
game();
