const rollBtn = document.getElementById("rollBtn");
let message = document.getElementById("message");

let player1Dice = document.getElementById("player1Dice");
let player2Dice = document.getElementById("player2Dice");

let player1Scoreboard = document.getElementById("player1Scoreboard");
let player2Scoreboard = document.getElementById("player2Scoreboard");

let player1Turn = true;

let randomNumber1;
let dice1Array = [];
let sum1 = 0;

let randomNumber2;
let dice2Array = [];
let sum2 = 0;

const resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", function () {
  if (player1Turn) {
    randomNumber1 = parseInt(Math.floor(Math.random() * 6 + 1));
    player1Dice.textContent = parseInt(randomNumber1);
    sum1 += randomNumber1;
    console.log(sum1);
    player2Dice.textContent = "-";

    // dice1Array.push(parseInt(randomNumber1))

    // for(let i = 0; i < dice1Array.length; i++){
    //     sum1 += dice1Array[i]
    // }

    // // console.log(sum1)
    player1Scoreboard.textContent = sum1;
    dice1Array = [];

    player1Turn = false;
    message.textContent = `Player 2 Turn`;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");

    if (sum1 >= 20) {
      resetBtn.style.display = "block";
      message.textContent = "Player 1 wins 🍾";
      rollBtn.style.display = "none";
    }
  } else {
    randomNumber2 = parseInt(Math.floor(Math.random() * 6 + 1));
    player2Dice.textContent = parseInt(randomNumber2);
    player1Dice.textContent = "-";

    dice2Array.push(parseInt(randomNumber2));

    for (let i = 0; i < dice2Array.length; i++) {
      sum2 += dice2Array[i];
    }

    // console.log(dice2Array)
    // console.log(sum2)
    player2Scoreboard.textContent = sum2;

    dice2Array = [];

    player1Turn = true;

    message.textContent = `Player 1 Turn`;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");

    if (sum2 >= 20) {
      resetBtn.style.display = "block";
      message.textContent = "Player 2 wins 🍾";
      rollBtn.style.display = "none";
    }
  }
});

resetBtn.addEventListener("click", function () {
  sum1 = 0;
  sum2 = 0;
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn";
  player1Turn = true;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.classList.add("active");
});
