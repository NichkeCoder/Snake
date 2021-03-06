const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const scoreText = document.querySelector('.score');
const size = 20;

const rows = canvas.height / size;
const cols = canvas.width / size;

let snake;
let fruit;

window.addEventListener('keydown', ((evt) => {
    const dir = evt.key.replace('Arrow', '');
    snake.changeDirection(dir);
}));

(function gameloop() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update(),
        snake.draw();

        if (snake.eat(fruit))
            fruit.pickLocation();
        snake.checkCollision();

        if (scoreText.innerText.length > 2)
            scoreText.style.fontSize = '15em';
        scoreText.innerText = snake.score;
    }, 100);
}());