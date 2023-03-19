// Rock Paper Scissors
// Get in put from player
// Get random selection for computer player
// if player and computer have same choice pass
// if player has Scissors it beats paper and loses to rock
// if player has rock it beats scissors and loses to paper
// if player has paper it beats rock and loses to scissors

const choices = ['Rock', "Paper", "Scissors"];

// get random int by scaling the Math.random funciton
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// generate random copmuter choice
function getComputerChoice() {
    return choices[getRandomInt(choices.length)];
}

// prompt user input
function getUserChoice() {
    while (true) {
        let userChoice = prompt("Make your selection");
        userChoiceFormatted = userChoice.slice(0,1).toUpperCase() + userChoice.slice(1).toLowerCase();
        if (choices.includes(userChoiceFormatted)){
            return userChoiceFormatted;
        } 
    }
}

// evaluate the outcome of the round
function evaluateRound(userChoice, computerChoice) {
    let round = 1,
        userWins = 0,
        computerWins = 0;
    
    if (userChoice === computerChoice) {
        round++
        return "Tie! Play again.";
    }else {
        switch(userChoice) {
            // Rock
            case choices[0]:
                if (computerChoice === choices[2]) {
                    computerWins++;
                    return `Computer wins the round! "${computerChoice}" beats "${userChoice}".`;
                } else {
                    userWins++;
                    return `You win the round! "${userChoice}" beats "${computerChoice}".`
                }
            // Paper
            case choices[1]:
                if (computerChoice === choices[3]) {
                    computerWins++;
                    return `Computer wins the round! "${computerChoice}" beats ${userChoice}.`;
                } else {
                    userWins++;
                    return `You win the round! "${userChoice}" beats "${computerChoice}".`
                }
            // Scissors
            case choices[2]:
                if (computerChoice === choices[0]) {
                    computerWins++;
                    return `Computer wins the round! "${computerChoice}" beats "${userChoice}".`;
                } else {
                    userWins++;
                    return `You win the round! "${userChoice}" beats "${computerChoice}".`

                }
        }
    }
}

function playRound() {
    let userChoice = getUserChoice(),
        computerChoice = getComputerChoice(),
        roundOutcome = evaluateRound(userChoice, computerChoice);
    return roundOutcome;
}

function playGame(){
    while (round < 6 && userWins != computerWins) {
        console.log(`Round "${round}"`);
        let roundOutcome = playRound();
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                console.log(choices[i] + "!");
            }, 2000);
        }
        console.log("Shoot!");
        console.log(roundOutcome)
        console.log(`Score is "${userWins}" to "${computerWins}"`)
    }
    if (userWins > computerWins) {
        console.log("You Win! Refresh page to play again.");
    } else {
        console.log("Computer Wins! Refresh page to play again.")
    }
}