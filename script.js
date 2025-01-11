function playGame() {
    humanScore = 0
    computerScore = 0

    //Computer Choice function
    function getComputerChoice() {
        const computerChoices = ["rock", "paper", "scissors"];
        const computerChoice = computerChoices(Math.floor(Math.random() * computerChoices.length)); 
            console.log(`Computer chose ${computerChoice}`);
            return computerChoice;
        
    }
}