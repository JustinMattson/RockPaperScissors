//Rock Paper Sissors

// Three possible options so RNG to pick between 1 and 3 inclusive.
// Define possible game key value pairs
const winLose = [
  { play: 11, result: "Tie" },
  { play: 12, result: "Lose" },
  { play: 13, result: "Win" },
  { play: 21, result: "Win" },
  { play: 22, result: "Tie" },
  { play: 23, result: "Lose" },
  { play: 31, result: "Lose" },
  { play: 32, result: "Win" },
  { play: 33, result: "Tie" },
];

// define possible choices
const choices = [
  { name: "Rock", value: 1 },
  { name: "Paper", value: 2 },
  { name: "Scissors", value: 3 },
];

let play = 0;
let wins = 0;
let losses = 0;
let ties = 0;

function playerPick(playerPick) {
  play = playerPick + npcPick();
  gameResults(play);
}

//Against the NPC (Random Number Generator)
function npcPick() {
  let npcChoice = Math.ceil(Math.random() * 3);
  //console.log("NPC: " + npcChoice);
  let guess = getChoiceName(npcChoice);
  //console.log(guess);
  document.getElementById("npc-choice").innerText = guess;
  return npcChoice;
}

// Search for gamePicks value in winLose array
// validate against winLoss array
function gameResults(play) {
  let results = winLose.find((x) => x.play == play);
  let result = results.result;
  console.log(result);

  console.log("find plays in winLose");
  //winLose.find(play)
  console.log("determine win/lose");
  let gameResult = winLose.find((p) => p.play == play);
  document.getElementById("game-result").innerText = result;
  if (result == "Win") {
    wins++;
    document.getElementById("wins").innerText = `${wins}`;
  } else if (result == "Lose") {
    losses++;
    document.getElementById("losses").innerText = `${losses}`;
  } else {
    ties++;
    document.getElementById("ties").innerText = `${ties}`;
  }
}

function getChoiceName(value) {
  let obj = choices.find((n) => n.value == value);
  return obj.name;
}

// BONUS
// keep track of the Win/Lose/Tie stats.
