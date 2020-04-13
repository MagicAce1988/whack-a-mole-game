const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let finalScore = document.querySelector(".final-score");
const finalMole = document.querySelector(".finalMole");
const grid = document.querySelector(".grid");

let result = 0;
let currentTime = timeLeft.textContent;
score.textContent = result;

const randomSquare = () => {
  squares.forEach((className) => {
    className.classList.remove("mole");
  });
  if (timeLeft.textContent === "0") {
    hitPosition = null;
    setTimeout(() => {
      grid.classList.add("noDisplay");
      finalScore.textContent = `GAME OVER. Your final score is ${result}`;
      finalMole.classList.add("mole");
    }, 500);
    return;
  }
  let randomPosition = squares[Math.floor(Math.random() * 9)];
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
  let timerId = null;
  timerId = setInterval(randomSquare, 500);
};

moveMole();

const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerId);
  }
};

let timerId = setInterval(countDown, 1000);
