// Game Constants & Variables
let inputDir = {x: 0, y: 0};
let lastPaintTime = 0;
let speed = 5;

const foodSound = new Audio("music/food.mp3");
const gameOverSound = new Audio("music/gameover.mp3");
const moveSound = new Audio("music/move.mp3");
const musicSound = new Audio("music/music.mp3");

let snakeArr = [{x: 16, y: 10}];
let food = {x:5, y:13};


// Game Function 

function main(ctime) {
    // console.log(ctime);
    window.requestAnimationFrame(main);

    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    // console.log(ctime);
    // console.log(lastPaintTime);
    gameEngine();
}


function gameEngine(){
    // part 2: Updating the snake array & Food





    // part 1: Display the snake and Food

    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0){
            snakeElement.classList.add('snake');
        }else{
            snakeElement.classList.add('head');
        }
        board.appendChild(snakeElement);
    });

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}








// Main Game Logic Start Here
window.requestAnimationFrame(main);
