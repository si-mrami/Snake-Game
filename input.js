let inputDirction = { x: 0, y: 0};
let lastInputDirction = { x: 0, y: 0};

window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        if(lastInputDirction.y !==0) break;
        inputDirction = { x: 0, y: -1 };
        break;
      case "ArrowDown":
        if(lastInputDirction.y !==0) break;
        inputDirction = { x: 0, y: 1 };
        break;
      case "ArrowLeft":
        if(lastInputDirction.x !==0) break;
        inputDirction = { x: -1, y: 0 };
        break;
      case "ArrowRight":
        if(lastInputDirction.x !==0) break;
        inputDirction = { x: 1, y: 0 };
        break;
    }
  });

export function getInputDirction(){
    lastInputDirction = inputDirction;
    return inputDirction;
}