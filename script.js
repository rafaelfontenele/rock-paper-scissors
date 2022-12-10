
let possibleMoves = ['rock', 'paper', 'scissors']


function isPossible(move) {
     if (possibleMoves.indexOf(move) === -1) {
        return false
    } return true;
}   

function battleResult(hand1, hand2) {
/*
input: (str, str)
returns: -1 == something went wrong(invalid move)
          0 == DRAW
          1 == Hand1 won
          2 == Hand2 won
*/

    let result;

    if (typeof hand1 !== 'string' || typeof hand2 != 'string') {
        return -1
    }

    hand1 = hand1.toLowerCase();
    hand2 = hand2.toLowerCase();

    result = -1

    if (possibleMoves.indexOf(hand1) == -1 || possibleMoves.indexOf(hand1) == -1) {
        return -1
    }

    if (hand1 === hand2) {
        result = 0;

    } else if (hand1 == 'rock') {
        if (hand2 == 'scissors') {
            result = 1
        } else if (hand2 == 'paper') {
            result = 2
        } 
    } else if (hand1 == 'paper') {
        if (hand2 == 'rock') {
            result = 1;
        } else if (hand2 == 'scissors') {
            result = 2;
        }

    } else if (hand1 == 'scissors') {
        if (hand2 == 'paper') {
            result = 1;
        } else if (hand2 == 'rock') {
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

function playerMove(move) {
    console.log(`Player played ${move}`)
}