// Game Constants & Variables
let inputDir = { x: 0, y: 0 };
let lastPaintTime = 0;
let speed = 5;

const foodSound = new Audio("music/food.mp3");
const gameOverSound = new Audio("music/gameover.mp3");
const moveSound = new Audio("music/move.mp3");
const musicSound = new Audio("music/music.mp3");

let snakeArr = [{ x: 13, y: 12 }];
let food = { x: 5, y: 5 };

// Game Function
// 1 step
function main(ctime) {
  // console.log(ctime);
  window.requestAnimationFrame(main);

  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  // console.log(ctime);
  // console.log(lastPaintTime);
  gameEngine();
}

// 6 stap
function isCollide(sanke) {
  // if you bump into yourSelf
  for (let i = 1; i < snakeArr.length; i++) {
    if (sanke[i].x === sanke[0].x && sanke[i].y === sanke[0].y) {
      return true;
    }
  }
  if (
    sanke[0].x >= 18 ||
    sanke[0].x <= 0 ||
    sanke[0].y >= 18 ||
    sanke[0].y <= 0
  ) {
    return true;
  }
}

// 2 step
function gameEngine() {
  // part 2: Updating the snake array & Food
  // 5 step
  if (isCollide(snakeArr)) {
    gameOverSound.play();
    musicSound.pause();
    inputDir = { x: 0, y: 0 };
    alert("Game Over. Press any key to ply agin!");
    snakeArr = [{ x: 13, y: 12 }];
    musicSound.play();
  }

  // If you have the food , increment the score and regenerate the food
  // 7 step
  
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    // foodSound.play();
    // snakeArr.unshift({
    //   x: snakeArr[0].x + inputDir.x,
    //   y: snakeArr[0].y + inputDir.y,
    // });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  // 8step
  // MOving the snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

  // part 1: Display the snake and Food

  // 3 step
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index === 0) {
      snakeElement.classList.add("snake");
    } else {
      snakeElement.classList.add("head");
    }
    board.appendChild(snakeElement);
  });

  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Main Game Logic Start Here
window.requestAnimationFrame(main);
// 4 step
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 }; // Start The Game
  moveSound.play();
  musicSound.play();

  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;
    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;
    default:
      break;
  }
});
