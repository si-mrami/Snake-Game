import {bidSnake, onSnake} from './snake.js';
import {randomGridPosition} from './grid.js';

let food = getRandomFoodPosition();
const BID_AMOUNT = 1;

export function update(){
   if(onSnake(food)){
       bidSnake(BID_AMOUNT);
       food = getRandomFoodPosition();
   }
}
export function render(snakeboard){
        const foodElement = document.createElement('div');
        foodElement.style.gridColumnStart = food.x;
        foodElement.style.gridRowStart = food.y;
        foodElement.classList.add("food"); 
        snakeboard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition;

    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }

    return newFoodPosition;
}