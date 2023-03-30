const choices = ["Rock", "Paper", "Scissors"];
let round = 1
let userWins = 0
let computerWins = 0
let userChoice
let computerChoice;

document.addEventListener("keydown", eventFunction)

function eventFunction(e) {
    let key = e.key;
    const validKeys = ["r", "p", "s"];

    if (validKeys.includes(key)) {
        userChoice = getUserChoice(key),
        computerChoice = getComputerChoice();
        let roundOutcome = playRound();
        if(userWins + computerWins === 5) {
            updateRound(round, userWins, computerWins);
            document.removeEventListener("keydown", eventFunction);
            let gameOutcome = evaluateGame(roundOutcome);
            document.getElementById("scoreboard-center").innerHTML = gameOutcome;
        } else {
            updateRound();
            document.getElementById("scoreboard-center").innerHTML = roundOutcome[0];
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return choices[getRandomInt(choices.length)];
}

function getUserChoice(userChoice) {
    const choiceDict = {
        "r" : "Rock",
        "p" : "Paper",
        "s" : "Scissors"
    };
    return choiceDict[userChoice];
}

function evaluateRound() {
    if (userChoice === computerChoice) {
        return ["Tie! Play again.", null];
    } else {
        switch(userChoice) {
            // Rock
            case choices[0]:
                if (computerChoice === choices[1]) {
                    return [`Computer wins the round! ${computerChoice} beats ${userChoice}.`, 0];
                } else {
                    return [`You win the round! ${userChoice} beats ${computerChoice}.`, 1];
                }
            // Paper
            case choices[1]:
                if (computerChoice === choices[2]) {
                    return [`Computer wins the round! ${computerChoice} beats ${userChoice}.`, 0];
                } else {
                    return [`You win the round! ${userChoice} beats ${computerChoice}.`, 1];
                }
            // Scissors
            case choices[2]:
                if (computerChoice === choices[0]) {
                    return[`Computer wins the round! ${computerChoice} beats ${userChoice}.`, 0];
                } else {
                    return [`You win the round! ${userChoice} beats ${computerChoice}.`, 1];

                }
        }
    }
}

function updateRound() {
    document.getElementById("round").innerHTML = "Round " + round;
    if (userWins === 0 && computerWins === 0) return;
    document.getElementById("player-score").innerHTML = userWins;
    document.getElementById("computer-score").innerHTML = computerWins;
}

function centerScoreboardPrint() {
    const statements = ["Rock", "Paper", "Scissors", "Shoot"];
    // setTimeout(function() {
    for (let i = 0; i < statements.length; i++) {
        document.getElementById("scoreboard-center").innerHTML = statements[i] + "!"
    }
    // }, 500)
    
}

function playRound() {
    let = roundOutcome = evaluateRound(userChoice, computerChoice);
    
    // print Rock! Paper! Scissors! Shoot! before showing results
    centerScoreboardPrint();
    round++;
    
    if (roundOutcome[1] === 1) {
        userWins++;
    } else if( roundOutcome[1] === 0) {
        computerWins++;
    }
    return roundOutcome;
} 

function evaluateGame(gameOutcome) {
    if(userWins > computerWins) {
        return gameOutcome[0] + "<br/>" + "<b>You win! Refresh the page to play again.</b>"
    }
    return  gameOutcome[0] + "<br/>" + "<b>Computer Wins! Refresh the page to play again.</b>"
}