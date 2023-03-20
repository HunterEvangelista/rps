const choices = ["Rock", "Paper", "Scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return choices[getRandomInt(choices.length)];
}

function getUserChoice() {
    while (true) {
        let userChoice = prompt("Make your selection");
        userChoiceFormatted = userChoice.slice(0,1).toUpperCase() + userChoice.slice(1).toLowerCase();
        if (choices.includes(userChoiceFormatted)){
            return userChoiceFormatted;
        } 
    }
}

function evaluateRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return ["Tie! Play again.", 2];
    } else {
        switch(userChoice) {
            // Rock
            case choices[0]:
                if (computerChoice === choices[1]) {
                    return [`Computer wins the round! ${computerChoice} beats ${userChoice}.`, 0];
                } else {
                    return [`Computer wins the round! ${computerChoice} beats ${userChoice}.`, 1];
                }
            // Paper
            case choices[1]:
                if (computerChoice === choices[2]) {
                    return [`Computer wins the round! ${computerChoice} beats ${userChoice}.`, 0];
                } else {
                    return [`Computer wins the round! ${computerChoice} beats ${userChoice}.`, 1];
                }
            // Scissors
            case choices[2]:
                if (computerChoice === choices[0]) {
                    return[`Computer wins the round! ${computerChoice} beats ${userChoice}.`, 0];
                } else {
                    return [`Computer wins the round! ${computerChoice} beats ${userChoice}.`, 1];

                }
        }
    }
}

function playGame() {
    let round = 1
    let userWins = 0
    let computerWins = 0;
    
    while (true) {
        if ((userWins + computerWins) < 5) {
            console.log(`Round ${round}`);
            
            let userChoice = getUserChoice(),
            computerChoice = getComputerChoice(),
            roundOutcome = evaluateRound(userChoice, computerChoice);
            
            for (let i = 0; i < 3; i++) {
                console.log(choices[i] + "!");
            }
            console.log("Shoot!");
            round++;
            if (roundOutcome[1] === 1) {
                userWins++;
            } else if( roundOutcome[1] === 0) {
                computerWins++;
            }
            console.log(roundOutcome[0]);
            console.log(`Score is ${userWins} to ${computerWins}`);
        } else {
            let gameOutcome = [userWins, computerWins];
            return gameOutcome;
        }
    }
}

function rps() {
    let gameOutcome = playGame();

    if (gameOutcome[0] > gameOutcome[1]) {
        console.log("You Win! Refresh page to play again.");
    } else {
        console.log("Computer Wins! Refresh page to play again.")
    }
}

rps()