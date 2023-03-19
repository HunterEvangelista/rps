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
    return Math.floor(Math.random() * max)
}


function getComputerChoice() {
    return choices[getRandomInt(choices.length)];
}

console.log(getComputerChoice())