import * as http from './http.js';
import * as view from './view.js';


// REST endpoints

const GET_TRIVIA = `https://opentdb.com/api.php?amount=10&category=27`;
const BIN_ID = '68fd77b1d0ea881f40bc2809';
const GET_LEADERBOARD = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;
const PUT_LEADERBOARD = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

const state = {
    score: 0,
    timer: 20,
    intervalId: null,
    trivia: null,
    topScores: []
};

const countdown = () => {
    if (state.timer > 0) {
        state.timer--;
        view.PlayScene(state);
    } else {
        clearInterval(state.intervalId);
        view.GameOverScene(state);
    }
}

// add new score to leaderboard
const getTop5 = async (newScore) => {
    const leaderboardJSON = await http.sendGETRequest(GET_LEADERBOARD);
    const top5 = leaderboardJSON.record;
    top5.push(newScore);
    top5.sort( (a,b) => b.score - a.score);
    top5.pop();
    return top5;
}


// global functions

window.start = async () => {
    const leaderboardJSON = await http.sendGETRequest(GET_LEADERBOARD); // fetch leaderboard
    state.topScores = leaderboardJSON.record;
    console.log(state.topScores);
    view.StartMenu(state);  // render Start Menu
}

window.createGame = () => {
    state.score = 0;
    state.timer = 20;
    state.intervalId = setInterval(countdown, 1000);
    window.loadQuestions();
    playGame();
}

window.playGame = () => {
    if (!state.triviaQueue || state.triviaQueue.length === 0) {
        window.loadQuestions();
    }

    state.trivia = state.triviaQueue.shift(); // take next question
    view.PlayScene(state);
};

window.loadQuestions = async () => {
    const json = await http.sendGETRequest(GET_TRIVIA);
    if (json && Array.isArray(json.results) && json.results.length > 0) {
        state.triviaQueue = [...json.results]; // clone array
        state.trivia = state.triviaQueue.shift(); // take first question
        view.PlayScene(state);
    } else {
        console.error("No trivia returned:", json);
        view.RenderMessage("Unable to load questions. Please wait and try again.");
    }
};

window.addEventListener('load', start);

window.checkAnswer = async (attempt) => {
    const answer = state.trivia.correct_answer;
    if (attempt == answer) {
        state.score += state.timer;
        state.timer += 10;
        playGame();
    } else {
        clearInterval(state.intervalId);

        // fetch latest leaderboard
        const leaderboardJSON = await http.sendGETRequest(GET_LEADERBOARD);
        state.topScores = leaderboardJSON.record;

        view.GameOverScene(state);
    }
}

window.updateLeaderboard = async () => {
    const name = document.getElementById('name').value;
    const currentScore = {name: name, score: state.score};
    const top5 = await getTop5(currentScore);
    await http.sendPUTRequest(PUT_LEADERBOARD, top5);
    start();
}