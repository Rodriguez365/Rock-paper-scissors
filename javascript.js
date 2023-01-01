function getComputerChoice(){
    const choice = ["rock","paper","scissors"];
    return choice[Math.floor(Math.random()*choice.length)];

}
function playRound(){
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
         const computerChoince = getComputerChoice();
         const playerChoice = prompt("enter choice").toLowerCase();
        if (playerChoice == "rock" && computerChoince == "scissors"|| playerChoice == "scissors" && computerChoince == "paper" || playerChoice == "rock" && computerChoince == "paper") {
             playerCount += 1;
             console.log("player count: Wins round", {playerCount})
        }else if (playerChoice ==computerChoince){
             console.log("It's a tie")
            
        } else if (computerChoince == "rock" && playerChoice == "scissors"|| computerChoince == "scissors" && playerChoice == "paper" ||  computerChoince == "rock" && playerChoice == "paper"){
            computerCount += 1;
            console.log("computer count: Wins this round",{computerCount})
        
        } else{
            console.log("please enter a collect game option")
             i -=1;
        }
        
    }

    if(playerCount > computerCount){
         console.log("player Wins the game");
    } else if ( playerCount == computerCount){
        console.log("It's a Tie, go again");
        } else {
            console.log("Computer Wins the game");
        }

    console.log(playerCount, computerCount)
    
 
    }
console.log(playRound())