let playerCount = 0;
let computerCount = 0;
let computerChoince = "";
let playerChoice = "";

const rules_container = document.querySelector(".rules_container");
const rules_div = document.createElement("div");
rules_div.classList.add("rules");
const rules = document.createElement("h2");
rules.textContent = "Rules";
const rules_ol = document.createElement("ol");
const rules_li1 = document.createElement("li");
rules_li1.textContent = "Rock beats Scissors."
const rules_li2 = document.createElement("li");
rules_li2.textContent = "Scissors beats Paper.";
const rules_li3 = document.createElement("li");
rules_li3.textContent = "Paper beats Rock, I don't understand the logic eitherl";
const final_rule_container = document.querySelector(".final_rule_container");
const final_rule_div = document.createElement("div");
final_rule_div.classList.add("final_rule");
const final_rule = document.createElement("p");
final_rule.textContent = "Whoever or whatever score to 5 points first, wins the game";
const begin_container = document.querySelector(".begin_container");
const begin_div = document.createElement("div");
begin_div.classList.add("begin_btn");
const begin_btn = document.createElement("button");
begin_btn.textContent = "Shall we begin"
begin_div.classList.add(".begin");
rules_container.appendChild(rules_div);
rules_div.appendChild(rules);
rules_div.appendChild(rules_ol);
rules_ol.appendChild(rules_li1);
rules_ol.appendChild(rules_li2);
rules_ol.appendChild(rules_li3);
begin_container.appendChild(begin_div);
final_rule_container.appendChild(final_rule_div);
final_rule_div.appendChild(final_rule);
begin_div.appendChild(begin_btn);


// 
const humanscore=  document.querySelector(".human_score");
humanscore.textContent = 0;
const compscore = document.querySelector(".computer_score");
compscore.textContent = 0; 


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {button.addEventListener("click",() =>{
    playerChoice =  button.id;
    if (playerChoice == "#rock"){
        playerChoice = "rock";
    } else if (playerChoice == "#paper"){
        playerChoice = "paper";
    }else { playerChoice = "scissors";
}      

    computerChoince = getComputerChoice();
    playRound(playerChoice, computerChoince);
    if (playerCount == 1){
      humanscore.textContent = "1";
     } else if ( playerCount == 2) {
       humanscore.textContent = "2";
     }else if ( playerCount == 3) {
        humanscore.textContent = "3";
     } else if ( playerCount == 4) {
       humanscore.textContent = "4";
     }else if ( playerCount == 5) {
       humanscore.textContent = "5";
     }
     if (computerCount == 1){
         compscore.textContent = "1";
     } else if ( computerCount == 2) {
       compscore.textContent = "2";
     }else if ( computerCount == 3) {
        compscore.textContent = "3";
     } else if ( computerCount == 4) {
       compscore.textContent = "4";
     }else if ( computerCount == 5) {
       compscore.textContent = "5";
     } 
     const who_wins = document.querySelector(".who_wins");
    if(playerCount == 5){
      who_wins.textContent = "Human Wins the game";
      
    } else if( computerCount == 5) {
      who_wins.textContent = "Computer Wins the game";
      
    } else if ( playerCount < 5 || computerCount < 5) {
      
    }

} )})





function getComputerChoice(){
    const choice = ["rock","paper","scissors"];
    return choice[Math.floor(Math.random()*choice.length)];

}


function playRound(playerChoice, computerChoince){     
    if (playerChoice == "rock" && computerChoince == "scissors"|| playerChoice == "scissors" && computerChoince == "paper" || playerChoice == "rock" && computerChoince == "paper") {
        playerCount += 1; 
        console.log("player count: Wins round", {playerCount})
    }else if (playerChoice ==computerChoince){
        console.log("It's a tie")
    } else if (computerChoince == "rock" && playerChoice == "scissors"|| computerChoince == "scissors" && playerChoice == "paper" ||  computerChoince == "rock" && playerChoice == "paper"){
        computerCount += 1;
        ogComputerScore = console.log({computerCount})
        }  
 }
       
clearbtn.addEventListener("click", () => {
  playerCount = 0;
  computerCount = 0;
  humanscore.textContent = "0";
  compscore.textContent = "0";
})       
