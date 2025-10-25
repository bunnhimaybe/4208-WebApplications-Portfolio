import * as http from './http.js';


const GET_TRIVIA = `https://opentdb.com/api.php?amount=1&category=27`;

const state = {};

const playGame = async() => {
    const json = await http.sendGETRequest(GET_TRIVIA);
    console.log(json);
}



// global functions

window.start = async () => {
    playGame();
}

window.addEventListener('load', start);