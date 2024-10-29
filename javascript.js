function getComputerChoice() {
    let randomInt = Math.floor((Math.random() * 3) + 1);
    
    if (randomInt === 1) {
        return "rock"
    } else if (randomInt === 2) {
        return "paper"
    } else if (randomInt === 3) {
        return "scissors"
    }
}

function getHumanChoice() {
    let input = prompt("Rock, Paper or Scissors?");

    const choice = input.toLowerCase();

    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Invalid choice. Please enter rock, paper or scissors."); 
        return input;
    }

    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;



    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    
        const outcomes = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        }
    
        if (humanChoice === computerChoice) {
            console.log("It's a draw!");
        } else if (outcomes[humanChoice] === computerChoice ) {
            humanScore++;
            console.log("Player wins!")
        } else if (outcomes[computerChoice] === humanChoice ) {
            computerScore++;
            console.log("Computer wins!")
        } else {
            console.log("No points.")
        }
    
    }

    for (let i= 0; i < 5; i++ ) {
        playRound();
    }

    console.log(`Player score: ${humanScore} and Computer score: ${computerScore}`);
}

