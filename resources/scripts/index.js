// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add("d-none");


// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML = game.username+": "+game.score.user+" CPU: "+game.score.cpu;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML = game.gameHistoryLog.map(x => x+"\n");
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (event) {
  event.preventDefault();
  const username = userName.value;
  console.log("Starting Game");
  game = new RockPaperScissors(username);

  // Complete
  gameScreen.classList.remove('d-none');
  welcomeScreen.classList.add('d-none');
});

// go-button EventListener
goButton.addEventListener(`click`, function (event) {
  event.preventDefault();
  game.play(userSelection.options[userSelection.selectedIndex].text);
  updateScoreTallyUI();
  updateGameHistoryUI();
  
});