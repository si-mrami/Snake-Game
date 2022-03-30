import { getInputDirction } from "./input.js";

export const SNAKE_SPEED = 3;
const snakeBody = [{x: 10, y: 11}];
let newPoint = 0;

export function update(){
    addPoints();
    let inputDirction = getInputDirction();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
      }
    
      snakeBody[0].x += inputDirction.x;
      snakeBody[0].y += inputDirction.y;
}
export function render(snakeboard){
    snakeBody.forEach(point =>{
        const snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = point.x;
        snakeElement.style.gridRowStart = point.y;
        snakeElement.classList.add("snake"); 
        snakeboard.appendChild(snakeElement);
    })
}

export function bidSnake(amount){

    newPoint += amount;

}

export function onSnake(position, {ignorHead = false} = {}){

    return snakeBody.some((point, index) =>{
        if(ignorHead && index === 0) return false;
        return equalPositions(point, position);
    });

}

export function getSanekHead(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignorHead: true})
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addPoints(){

    for(let i = 0; i < newPoint; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]});
    }

    newPoint = 0;

}