// The Understanding
// _______________________
// I am going to create a rock-paper-scissors game within the browser console. Players will be fighting against the computer.
// The computer will generate the random values of 'rock, paper, scissors'.
// The player gets asked an input for their choice of 'rock, paper, scissors'
// The players (Human and Computer) score will be kept tracked of as the game progresses.
// The total rounds is five, over one round of rock-paper-scissors.
// ________________________

// The Planning 
____________________
// Need a prompt box
// Only done in browser console
// Will just use VSC
// Research functions that'll allow me to get random values, and score tracking
// Research how to do === for string values.
// _________________


// The Pseudocode
// 1. Computer Generating Rock/Paper/Scissors
    //  CREATE getComputerChoice function to randomly choose between rock, paper, scissors
    //  RETURN one of the string values 

// 2. Human input Rock/Paper/Scissors
// CREATE getHumanChoice function
    // LOOP until valid input is received
    // GET user's input
        // IF input is valid (rock, paper, or scissors)
        // RETURN input
    // ELSE user inputs an invalid value
        // ALERT user to only choose between rock, paper, scissors value.
        // CONTINUE to loop to get user's input again.

// 3. Keeping Track of Player Scores
// CREATE variables for humanSCORE and computerSCORE
    // INIT values are 0
// CREATE determineWINNER function
    //LOOP until winner reaches 5 points
        // INPUT: humanCHOICE, computerCHOICE
        // IF humanCHOICE equals computerCHOICE
            // RETURN message "it's a draw!"
        // ELSE IF humanCHOICE is "rock" AND computerCHOICE is "scissors"
            // INCREMENT humanCHOICE by 1
            // RETURN message "Human wins."
    




