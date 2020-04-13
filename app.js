const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let finalScore = document.querySelector(".final-score");
const finalMole = document.querySelector(".finalMole");
const grid = document.querySelector(".grid");
const tryAgain = document.querySelector(".tryAgain");
let rSqId, timerId, result, currentTime;

tryAgain.addEventListener("click", () => {
  finalMole.classList.remove("mole");
  tryAgain.classList.remove("displayFlex");
  grid.classList.remove("noDisplay");
  runGame();
});

const randomSquare = () => {
  squares.forEach((className) => {
    className.classList.remove("mole");
  });
  if (timeLeft.textContent === "0") {
    hitPosition = null;
    setTimeout(() => {
      clearInterval(rSqId);
      grid.classList.add("noDisplay");
      finalScore.textContent = `GAME OVER. Your final score is ${result}.`;
      finalMole.classList.add("mole");
      tryAgain.classList.add("displayFlex");
    }, 500);
    return;
  }
  let randomPosition = squares[Math.floor(Math.random() * 16)];
  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
};

squares.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result++;
      score.textContent = result;
      randomSquare();
    }
  });
});

const moveMole = () => {
  rSqId = setInterval(randomSquare, 1000);
};

const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerId);
  }
};

const defineVariables = () => {
  currentTime = 60;
  timeLeft.textContent = "60";
  result = 0;
  score.textContent = "0";
  finalScore.textContent = "";
};

const runGame = () => {
  defineVariables();

  moveMole();

  timerId = setInterval(countDown, 1000);
};

runGame();
