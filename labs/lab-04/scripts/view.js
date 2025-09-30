/* Game outputs */

function printDigits() {
    document.getElementById('digit-100').src = `assets/${guess.hundreds}.png`;
    document.getElementById('digit-10').src = `assets/${guess.tens}.png`;
    document.getElementById('digit-1').src = `assets/${guess.ones}.png`;
}

function printAttemptsRemaining(tries) {
    const attemptsText = document.getElementById('attempts');
    // attemptsText.innerHTML = `Number of attempts left: ${tries}`;
    attemptsText.innerHTML = `<h2> Time Left: ${timeLeft} </h2>`;
}

function printClue(status, guess) {
    // const clueText = document.getElementById('clues');
    // const clue = (status === 'HI') ? `<li> ${guess} is too high! </li>` : `<li> ${guess} is too low! </li>`;
    // clueText.innerHTML += clue;

    const [digit100, digit10, digit1] 
        = status == 'HI' ? ['H', 'I', '-'] 
        : ['L', 'O', '-'];
    document.getElementById('digit-100').src = `assets/${digit100}.png`;
    document.getElementById('digit-10').src = `assets/${digit10}.png`;
    document.getElementById('digit-1').src = `assets/${digit1}.png`;
    then = Date.now();
}

function printGameOver(status) {
    if (status === 'WIN') {
        var message = `<h1> You Win! </h1> 
            <p> Got it in ${30 - timeLeft} seconds. </p>`;
            // <p> Got it in ${10-tries} tries. </p>`
    } else {
        var message = `<h1> You Lose! </h1>
            <p> The number was ${passcode}</p>`;
    }
    document.body.innerHTML = message;
}