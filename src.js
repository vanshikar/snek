let lastRenderTime = 0;
const gamefield = document.getElementById('gamefield');
let gameOver=false;
function main(currentTime){
    if(gameOver){
        if(confirm('Lmao. Restart')){
            window.location='/';
        }
        return alert('F');
    }
    window.requestAnimationFrame(main); //constantly requesting main to run
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000;
    if(secondsSinceLastRender<1/SNAKE_SPEED)
        return;
    lastRenderTime=currentTime;
    //console.log('hello');
    update();
    draw(gamefield);
    checkDeath();
}

window.requestAnimationFrame(main);


function checkDeath(){
    gameOver = outsideGrid() || snakeIntersect();
    //console.log(outsideGrid());
    //console.log(snakeIntersect());
    //console.log(gameOver);
}

function outsideGrid(){
    return snakeBody[0].x<1 || snakeBody[0].x>GRID_SIZE ||
    snakeBody[0].y<1 || snakeBody[0].y>GRID_SIZE;
}

function snakeIntersect(){
    for(let i=1;i<snakeBody.length;i++)
        if(snakeBody[0]==snakeBody[i]){
            //console.log(i);
            return true;
        }
    return false;
}