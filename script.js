// function playGame() {
    humanScore = 0
    computerScore = 0

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
                while (true) { 
                    if (humanChoice === null) {
                        break;
                    } 
                    
                    let humanChoice = prompt("Choose between rock, paper, or scissors.");
                    humanChoice = humanChoice.toLowerCase(); 
                    
                    if (humanChoices.includes(humanChoice)) {
                        console.log(`You chose ${humanChoice}.`);
                        return humanChoice;
                    } else {
                        alert("Invalid choice, please choose again.");
                    }
                }
    }
// } 