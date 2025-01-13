function playGame() {
    //Computer Choice function
    function getComputerChoice() {
        const computerChoices = ["rock", "paper", "scissors"];
        const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
            console.log(`Computer chose ${computerChoice}.`);
            return computerChoice;
    }

    //Human Choice function
    function getHumanChoice() {
        const humanChoices = ["paper", "rock", "scissors"];
        let humanChoice = "";
                while (true) { 
                    humanChoice = prompt("Choose between rock, paper, or scissors.");
                    if (humanChoice === null) {
                        break;
                    } 
                    humanChoice = humanChoice.toLowerCase(); 
                    if (humanChoices.includes(humanChoice)) {
                        console.log(`You chose ${humanChoice}.`);
                        return humanChoice;
                    } else {
                        alert("Invalid choice, please choose again.");
                    }
                }
    }
    let humanScore = 0
    let computerScore = 0

     // Single Round game logic
        function playRound(humanSelection, computerSelection) {
            let humanChoice = humanSelection;
            let computerChoice = computerSelection;
                if (humanChoice === "scissors" && computerChoice === "paper" ||
                    humanChoice === "paper" && computerChoice === "rock" ||
                    humanChoice === "rock" && computerChoice === "paper") {
                        (humanScore++);
                        console.log(`Human wins this round! ${humanChoice} beats ${computerChoice}.`);
                        console.log(`Your score: ${humanScore}, VS the computer's score: ${computerScore}`);
                    } else if (humanChoice === computerChoice) {
                        console.log("It's a draw.")
                        console.log("No one gets any points!");
                    } else {
                        (computerScore++);
                        console.log(`Computer wins this round! ${computerChoice} beats ${humanChoice}.`);
                        console.log(`Your score: ${humanScore}, VS the computer's score: ${computerScore}`);
                    }
        }
    
    // function to playRounds until a score of 5 is reached
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); // calls playRound
    }
    
    // declare the winner and end the game
    if (humanScore === 5) {
        console.log("You win, good job!")
    } else {
        console.log("The computer wins, better luck next time.");
    }
}
