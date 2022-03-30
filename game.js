import {SNAKE_SPEED, update as updateSnake, render as renderSnake, getSanekHead, snakeIntersection} from './snake.js';
import {update as updatefood, render as renderfood} from './food.js';
import {outsideGrid} from './grid.js';

let secondTime = 0;
let gameOver = false;
const snakeboard = document.getElementById('snake-board');

function main(firstTime){
    if(gameOver){
       if(confirm('Game Over Click to OK, to Restart.')){
           window.location = "/";
       }
       return;
    }
    window.requestAnimationFrame(main);
    const lastTime = (firstTime - secondTime) / 1000;
    if(lastTime < 1/SNAKE_SPEED) return;
    
    secondTime = firstTime;

    update();
    render();

}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updatefood();
    checkDeath();
}

function render(){
    snakeboard.innerHTML = "";
    renderSnake(snakeboard);
    renderfood(snakeboard);
}

function checkDeath(){

    gameOver =  outsideGrid(getSanekHead()) || snakeIntersection();
}