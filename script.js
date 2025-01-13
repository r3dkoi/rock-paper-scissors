// function playGame() {
    //Computer Choice function
    function getComputerChoice() {
        const computerChoices = ["rock", "paper", "scissors"];
        const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
            console.log(`Computer chose ${computerChoice}`);
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
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

     // Single Round function
    function playRound(humanSelection, computerSelection) {
        let humanScore = 0
        let computerScore = 0
        let humanChoice = humanSelection;
        let computerChoice = computerSelection;
        while (humanScore < 5 && computerScore < 5)
            if (humanChoice === "scissors" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "rock" && computerChoice === "paper") {
                    (humanScore++);
                    console.log(`Human wins this round! ${humanChoice} beats ${computerChoice}.`);
                    return (`Your score: ${humanScore} vs the computer's score: ${computerScore}`);
                } else if (humanChoice === computerChoice) {
                    console.log("It's a draw.")
                    return ("No one gets any points!");
                } else {
                    (computerScore++);
                    console.log(`Computer wins this round! ${computerChoice} beats ${humanChoice}.`);
                    return (`Your score: ${humanScore} vs the computer's score: ${computerScore}`);
                }


    }
// 