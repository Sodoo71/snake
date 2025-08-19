const WIDTH = 16;
const HEIGHT = 16;
const unitSpace = 40;

const board = document.querySelector(".board");
const scoreEl = document.querySelector(".score"); 
let gameInterval = null;
let score = 0;

// RIGHT BOTTOM LEFT TOP
let DIRECTION = "RIGHT";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};


const spawnFood = () => {
  let newFood = null;

  for (let i = 0; i < 100; i++) {
    const candidate = {
      x: getRandomInt(0, HEIGHT),
      y: getRandomInt(0, WIDTH),
    };
    if (!snake.some((dot) => dot.x === candidate.x && dot.y === candidate.y)) {
      newFood = candidate;
      break;
    }
  }

  if (!newFood) newFood = { x: 0, y: 0 };
  return newFood;
};

let snake, food;

const initGame = () => {
  DIRECTION = "RIGHT";
  score = 0;
  updateScore();

  snake = [
    { x: Math.floor(HEIGHT / 2), y: Math.floor(WIDTH / 2) },
    { x: Math.floor(HEIGHT / 2), y: Math.floor(WIDTH / 2) - 1 },
    { x: Math.floor(HEIGHT / 2), y: Math.floor(WIDTH / 2) - 2 },
  ];
  food = spawnFood();

  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(update, 200);
  drawBoard();
};

const updateScore = () => {
  scoreEl.textContent = `Score: ${score}`;
};

const drawBoard = () => {
  board.innerHTML = "";
  board.style.width = `${unitSpace * WIDTH}px`;
  board.style.height = `${unitSpace * HEIGHT}px`;

  for (let row = 0; row < HEIGHT; row++) {
    for (let col = 0; col < WIDTH; col++) {
      const tileEl = document.createElement("div");
      tileEl.setAttribute("x", row);
      tileEl.setAttribute("y", col);
      tileEl.className = "tile";
      board.appendChild(tileEl);
    }
  }

  const foodEl = document.querySelector(`[x="${food.x}"][y="${food.y}"]`);
  foodEl.classList.add("food");

  for (let i = 0; i < snake.length; i++) {
    const dot = snake[i];
    const snakeEl = document.querySelector(`[x="${dot.x}"][y="${dot.y}"]`);
    if (i === 0) {
      snakeEl.classList.add("head");
    } else {
      snakeEl.classList.add("body");
    }
  }
};

const gameOver = () => {
  clearInterval(gameInterval);
  alert(`🎮 Game Over! Таны оноо: ${score}`);
  initGame(); 
};

const update = () => {
  const newSnake = [];

  let head;
  if (DIRECTION === "RIGHT") {
    head = { x: snake[0].x, y: (snake[0].y + 1) % WIDTH };
  } else if (DIRECTION === "LEFT") {
    head = { x: snake[0].x, y: (snake[0].y - 1 + WIDTH) % WIDTH };
  } else if (DIRECTION === "BOTTOM") {
    head = { x: (snake[0].x + 1) % HEIGHT, y: snake[0].y };
  } else if (DIRECTION === "TOP") {
    head = { x: (snake[0].x - 1 + HEIGHT) % HEIGHT, y: snake[0].y };
  }

  
  if (snake.some((dot) => dot.x === head.x && dot.y === head.y)) {
    gameOver();
    return;
  }

  newSnake.push(head);

  for (let i = 0; i < snake.length - 1; i++) {
    newSnake.push(snake[i]);
  }

  if (head.x === food.x && head.y === food.y) {
    newSnake.push(snake[snake.length - 1]);
    score++; 
    updateScore();
    food = spawnFood();
  }

  snake = newSnake;
  drawBoard();
};

window.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "ArrowUp" && DIRECTION !== "BOTTOM") {
    DIRECTION = "TOP";
  } else if (key === "ArrowDown" && DIRECTION !== "TOP") {
    DIRECTION = "BOTTOM";
  } else if (key === "ArrowRight" && DIRECTION !== "LEFT") {
    DIRECTION = "RIGHT";
  } else if (key === "ArrowLeft" && DIRECTION !== "RIGHT") {
    DIRECTION = "LEFT";
  }
});


initGame();
