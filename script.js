
let possibleMoves = ['rock', 'paper', 'scissors']


function isPossible(move) {
     if (possibleMoves.indexOf(move) === -1) {
        return false
    } return true;
}   

function battleResult(hand1, hand2) {
    let result;
    if (typeof hand1 !== 'string' || typeof hand2 != 'string') {
        return -1
    }

    hand1 = hand1.toLowerCase();
    hand2 = hand2.toLowerCase();

    if (possibleMoves.indexOf(hand1) == -1 || possibleMoves.indexOf(hand1) == -1) {
        return -1
    }

    if (hand1 === hand2) {
        result = 0;

    } else if (hand1 == 'rock') {
        if (hand2 == 'scissors') {
            result = 1
        } else {
            result = 2
        } 
    } else if (hand1 == 'paper') {
        if (hand2 == 'rock') {
            result = 1;
        } else {
            result = 2;
        }

    } else if (hand1 == 'scissors') {
        if (hand2 == 'paper') {
            result = 1;
        } else {
            result = 2;
        }
    } 
    return result;
}


function makeRandomChoice() {
    return Math.floor(Math.random() * 3)

}

function randomMove() {
    return possibleMoves[makeRandomChoice()];
}

function startGame() {
    while (true) {
        let player = prompt("\nChoose wisely:\n\n-rock\n-paper\n-scissors\n");
        if (!isPossible(player)) {
            console.log("You didn't choose wisely, try again.");
        } else {
            console.log(`You chose ${player}`);
        }
    }
}
