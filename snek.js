const SNAKE_SPEED = 4;
const snakeBody = [{x :11, y: 11}]; //first posn

function update(){
    addSeg();
    //console.log('update');
    for(let i=snakeBody.length-2; i>=0;i--){
        snakeBody[i+1] = { ...snakeBody[i]};    //creating new object to avoid reference bt
    }

    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;

    lastInputDirection=inputDirection;

    updateFood();
}

function draw(gamefield){
    gamefield.innerHTML='';
    snakeBody.forEach(segment =>{
        //for each segment of snek, drawing on screen
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gamefield.appendChild(snakeElement);
    })

    drawFood(gamefield);
}

function expandSnake(amount){
    newSeg+=amount;
}

function onSnake(position){
    return snakeBody.some(segment => {
        return segment.x==position.x && segment.y==position.y;
    })
}

function addSeg(){
    for(let i=0;i<newSeg;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newSeg=0;
}