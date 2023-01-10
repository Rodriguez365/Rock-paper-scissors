let playerCount = 0;
let computerCount = 0;
let computerChoince = "";
let playerChoice = "";
let tie_plus = 0;
const tie = document.querySelector(".tie");
const who_wins = document.querySelector(".who_wins");
const play_again = document.querySelector("#play_btn");

const humanscore = document.querySelector(".human_score")
humanscore.textContent = 0;
const compscore = document.querySelector(".computer_score");
compscore.textContent = 0;

function playGame() {
    play_again.style.transform = "translateY(8px)";
}

play_again.addEventListener("click", () => {
    compscore.textContent = 0;
    humanscore.textContent = 0;
    playerCount = 0;
    computerCount = 0;
    who_wins.textContent = "";
    tie.textContent = "";
    play_again.style.transform = "translateY(-900px)";
})

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];

}

function playRound(playerChoice, computerChoince) {
    if (playerChoice == "rock" && computerChoince == "scissors" || playerChoice == "scissors" && computerChoince == "paper" || playerChoice == "paper" && computerChoince == "rock") {
        playerCount += 1;
        humanscore.textContent = playerCount;
        tie.textContent = playerChoice + " " + "beats" + " " + computerChoince + " " + "(point for you)";
    } else if (playerChoice == computerChoince && tie_plus == 0) {
        tie.textContent = "Its a tie";
        tie_plus += 1;
    } else if (playerChoice == computerChoince && tie_plus > 0) {
        tie.textContent = "Its a tie again";
    } else if (computerChoince == "rock" && playerChoice == "scissors" || computerChoince == "scissors" && playerChoice == "paper" || computerChoince == "rock" && playerChoice == "paper") {
        computerCount += 1;
        compscore.textContent = computerCount;
        tie.textContent = computerChoince + " " + "beats" + " " + playerChoice + " " + "(point for computer)";
    }

    if (playerCount == 5) {
        who_wins.textContent = "Congrats, You Just Beat a Freaking Computer ";
        playGame();
        tie.textContent = "";
    } else if (computerCount == 5) {
        who_wins.textContent = "Sorry, You Lost";
        playGame();
        tie.textContent = "";


    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.id;
        if (playerCount == 5 || computerCount == 5) {
            tie.textContent = "Game Over. Click \"Play Again\" to continue"
            who_wins.textContent = "";
        } else {
            computerChoince = getComputerChoice();
            playRound(playerChoice, computerChoince);
        }

    })
})