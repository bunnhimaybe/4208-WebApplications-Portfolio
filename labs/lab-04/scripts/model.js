/* Game data */

const passcode = Math.floor( Math.random() * 1000);
const guess = new Guess();
let then = Date.now();
let timeLeft = 30;
let gameover = false;
let tries = 10; 



/* Game logic */ 

function main() {
    const now = Date.now();
    if (gameover) {
        return;
    } else if (timeLeft <= 0) {
        printGameOver('LOSE');
    } else if (now - then > 1000) {
        timeLeft--;
        printDigits();
        printAttemptsRemaining();
        then = Date.now();
    }
    requestAnimationFrame(main);
}

main();

function guessNumber(guess) {
    tries--;
    if (guess == passcode) {
        gameover = true;
        printGameOver('WIN');         
    // } else if (tries <= 0) {
    //     printGameOver('LOSE');
    } else {
        // printAttemptsRemaining(tries);
        giveClue(guess);
    }
}

function giveClue(guess) {
    if (guess > passcode) {
        printClue('HI', guess);
    } else {
        printClue('LO', guess);
    }
}