/* Game input */

initControls();

function initControls() {
    const button = document.getElementById('guess-button');
    button.addEventListener('click', buttonEvent); 

    // adjust guess
    const up100 = document.getElementById('up-100');
    const up10 = document.getElementById('up-10');
    const up1 = document.getElementById('up-1');
    up100.addEventListener('click', () => incrementEvent('hundreds'));
    up10.addEventListener('click', () => incrementEvent('tens'));
    up1.addEventListener('click', () => incrementEvent('ones'));
    
    const down100 = document.getElementById('down-100');
    const down10 = document.getElementById('down-10');
    const down1 = document.getElementById('down-1');
    down100.addEventListener('click', () => decrementEvent('hundreds'));
    down10.addEventListener('click', () => decrementEvent('tens'));
    down1.addEventListener('click', () => decrementEvent('ones'));
}

function incrementEvent(key) {
    guess.increment(key);
    printDigits();
}

function decrementEvent(key) {
    guess.decrement(key);
    printDigits();
}

function buttonEvent() {
    const number = guess.toString();
    guessNumber(number);
}