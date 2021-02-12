let canvas = document.querySelector("#snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"

function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function creatSnake() {
    for(i = 0; i < snake.length; i++){
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function startGame() {
    createBG()
    creatSnake()

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    switch (direction) {
        case "right" : 
            snakeX += box;
            break;
        case "left" :
            snakeX += box;
            break;
        case "up": 
            snakeY += box;
            break;
        case "down":
            snakeY += box;
            break;
        default:
            console.log("algo deu errado")
    }
    
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame,100);

