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
    //  CREATE getComputerCHOICE function to randomly choose between rock, paper, scissors
    //  RETURN one of the string values 

// 2. Human input Rock/Paper/Scissors
// CREATE getHumanCHOICE function
    // LOOP until valid input is received
    // GET user's input
        // CONVERT user's input to lowercase to allow case insensitivity
        // IF input is valid (rock, paper, or scissors)
        // RETURN input
    // ELSE user inputs an invalid value
        // ALERT user to only choose between rock, paper, scissors value.
        // CONTINUE to loop to get user's input again.

// 3. Keeping Track of Player Scores
// CREATE variables for humanSCORE and computerSCORE in global scope
    // INIT values are 0

// 4. Playing One Round (gathers input from 1 and 2)
// CREATE playROUND function
    //  INPUT humanCHOICE, computerCHOICE
    //  CONVERT humanCHOICE into lower-case to allow case-insensitivity
    //  CREATE determineWINNER function
        // INPUT: humanCHOICE, computerCHOICE
        // IF humanCHOICE equals computerCHOICE
            // RETURN message "it's a draw!"
        // ELSE IF humanCHOICE is "rock" AND computerCHOICE is "scissors"
            // INCREMENT humanCHOICE by 1
            // RETURN message "Human wins."
        // ELSE IF humanCHOICE is "paper" AND computerCHOICE is "rock"
            // INCREMENT humanCHOICE by 1
            // RETURN message "Human wins."
        // ELSE IF humanCHOICE is "scissors" AND computerCHOICE is "paper"
            // INCREMENT humanCHOICE by 1
            // RETURN message "Human wins."
        // ELSE
            // INCREMENT computerSCORE by 1
            // RETURN message "Computer wins."
        // 

// 5. Creating the game for 5 rounds
// CREATE playGAME function
    // MOVE playROUND function inside this scope so variables can be called in this block
    // Add LOOP 









   






