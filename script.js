// The Understanding
// _______________________
// I am going to create a rock-paper-scissors game within the browser console. Players will be fighting against the computer.
// The computer will generate the random values of 'rock, paper, scissors'.
// The player gets asked an input for their choice of 'rock, paper, scissors'
// The players (Human and Computer) score will be kept tracked of as the game progresses.
// The total rounds is five, over one round of rock-paper-scissors.
// ________________________

// The Planning 
// ____________________
// Need a prompt box
// Only done in browser console
// Will just use VSC
// Research functions that'll allow me to get random values, and score tracking
// Research how to do === for string values.
// _________________


// The Pseudocode

// 1. getComputerCHOICE
    //  CREATE getComputerCHOICE function 
    // SET choices TO randomly choose ("rock", "paper", "scissors")
    //  RETURN one of the string values 
    // END FUNCTION

// 2. getHumanCHOICE
// CREATE getHumanCHOICE function
    // LOOP until valid input is received (maybe I wont too hard right now)
    // GET user's input
        // CONVERT user's input to lowercase to allow case insensitivity
        // IF input is valid (rock, paper, or scissors)
        // RETURN input
    // ELSE user inputs an invalid value
        // ALERT user to only choose between rock, paper, scissors value.
        // CONTINUE to loop to get user's input again.
    // ELSE IF user wants to cancel without doing an input.
        // ENDIF
    // END FUNCTION

// 3. Declaring Player Scores
// CREATE variables for humanSCORE and computerSCORE in global scope
    // INIT values are 0

// 4. Playing One Round + adding up scores (gathers input from 1 and 2)
// CREATE playROUND function
    //  INPUT humanCHOICE, computerCHOICE
    //  CONVERT humanCHOICE into lower-case to allow case-insensitivity
    // CREATE determineWINNER function
    // INPUT: humanCHOICE, computerCHOICE
    // IF humanCHOICE equals computerCHOICE THEN
        // RETURN message "it's a draw!"
    // ELSE IF (humanCHOICE is "rock" AND computerCHOICE is "scissors") OR
    //         (humanCHOICE is "paper" AND computerCHOICE is "rock") OR
    //         (humanCHOICE is "scissors" AND computerCHOICE is "paper")
        // INCREMENT humanSCORE by 1
        // RETURN message "Human wins."
    // ELSE
        // INCREMENT computerSCORE by 1
        // RETURN message "Computer wins."
    // ENDIF
    // END FUNCTION

    // CONSTANT humanSELECTION = CALL getHumanCHOICE()
    // CONSTANT computerSELECTION = CALL getComputerCHOICE()

    //CALL playROUND(humanSELECTION, computerSELECTION)
        //RETURNS total score of human and computer from one round.

// 5. Creating the game for 5 rounds
// CREATE playGAME function
    // MOVE playROUND function inside this scope so variables can be called in this block
    // Add LOOP until winner reaches 5 points
function playGAME(){
    let humanSCORE = 0 // Track of human points during the game
    let computerSCORE = 0 // Track of computer points during the game
   
    function incrementHumanSCORE(){
        humanSCORE++;
    } // function to increment human score by 1 if they win

    function incrementComputerSCORE(){
        computerSCORE++;
    } // function to increment computer score by 1 if they win

    function getComputerCHOICE() {
        const choices = ["rock", "paper", "scissors"];
        const choice = (choices[Math.floor(Math.random() * choices.length)]);
        console.log(`Computer chose: ${choice}`);
        return choice;
        
    } // fuction to randomise computer choices between 3 options

    function getHumanCHOICE() {
        let choice;
        while (true) {
            choice = prompt("Please choose your option: rock, paper, or scissors.");
            if (choice === null) {
                return null; // this closes the prompt box if user doesn't want to add any input
            }
            choice = choice.toLowerCase(); // Convert to lowercase immediately
            if (choice === "rock" || choice === "paper" || choice === "scissors") {
                return (choice);
            } else {
                alert("Invalid option, please choose one of the three options.");
            }
        }
    } // function to obtain human input

    function playROUND(humanCHOICE, computerCHOICE){
        if (humanCHOICE === null) {
            return null;
        } else if (humanCHOICE === computerCHOICE) {
                return ("It's a draw!");
            } else if (
                    (humanCHOICE === "rock" && computerCHOICE === "scissors") ||
                    (humanCHOICE === "paper" && computerCHOICE === "rock") ||
                    (humanCHOICE === "scissors" && computerCHOICE === "paper")
            ) { 
                incrementHumanSCORE();
                return `"Human wins! Score: ${humanSCORE}`;
            } else { 
                incrementComputerSCORE();
                return `Computer wins! Score: ${computerSCORE}`;
            }    
      } // function to determine outcome of the game in one Round

      while (humanSCORE < 5 && computerSCORE <5) {
        const humanSELECTION = getHumanCHOICE();
        const computerSELECTION = getComputerCHOICE();
        console.log(playROUND(humanSELECTION, computerSELECTION));
      }

      if (humanSCORE === 5) {
        console.log("Human wins the game!");
      } else {
        console.log("Computer wins the game!");
      } // loop unti one player gets 5 points.
}

// playGAME(); // TO start the game, call PlayGAME();


