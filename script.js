
let possibleMoves = ['rock', 'paper', 'scissors']
let canMakePlay = 1;
const PCWinCount = document.querySelector('.loseCount');
const winCount = document.querySelector('.winCount');


function openUrl(url) {
    window.open(url, '_blank').focus();
  }


function setWinCount(number) {
    winCount.innerHTML = number;
}

function setPCWinCount(number) {
    PCWinCount.innerHTML = number;
}

function increaseWinCount(number) {
    winCount.innerHTML = +winCount.innerHTML + number;
}

function increasePCWinCount(number) {
    PCWinCount.innerHTML = +PCWinCount.innerHTML + number;
}

function resetGame() {
    if (canMakePlay === 1) {
        setGameDisplay('Game resetted!');
        setWinCount(0);
        setPCWinCount(0);

    }
}

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

function sleep(ms) {
    initialTime = new Date().getTime();
    while (new Date().getTime() < initialTime + ms) {

    }

}

function makeRandomChoice() {
    return Math.floor(Math.random() * 3)

}

function randomMove() {
    return possibleMoves[makeRandomChoice()];
}

function setPlayerText(text) {
    const display = document.
                    querySelector('.playerMoveDisplay');
    display.innerHTML = text;
}

function setGameDisplay(text) {
    const display = document.querySelector('.gameDisplayMidText');
    display.innerHTML = text;
}

function setPCText(text) {
    const display = document.
                    querySelector('.dealerMoveDisplay');
    display.innerHTML = text;
}


function doMatch(playerMove) {
    if (canMakePlay === 1) {
        canMakePlay = 0;
        pcMove = randomMove();
        setPCText(`PC played ${pcMove}`);
        setPlayerText(`You played ${playerMove}`);
        let result = battleResult(playerMove, pcMove);

        if (result == 1) {
            setGameDisplay('You WON!');
            increaseWinCount(1);
        } else if (result === 2) {
            setGameDisplay('You LOST!');
            increasePCWinCount(1);
        } else if (result === 0) {
            setGameDisplay('Its a DRAW!');
        } else {
            setGameDisplay('Somethig wrong happened...');
        }

    }



        canMakePlay = 1;
    }











joKenPo = document.querySelector('.JoKenPo');

joKenPo.style.visibility = 'hidden';



