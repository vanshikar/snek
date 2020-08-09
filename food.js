const GRID_SIZE = 21;
let food = getRandFood();
const EXPANSION_RATE = 1;
let newSeg=0;
function updateFood(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandFood();
    }
}

function drawFood(gamefield){
    //for each segment of snek, drawing on screen
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gamefield.appendChild(foodElement);
}

function getRandFood(){
    let newFoodPos;
    while(newFoodPos== null || onSnake(newFoodPos)){
        newFoodPos= {x: Math.floor(Math.random()*GRID_SIZE) +1,
            y: Math.floor(Math.random()*GRID_SIZE) +1
        };
    }
    return newFoodPos;
}