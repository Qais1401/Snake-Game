const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d")
const scale = 10;
const rows = canvas.height / scale;
const column = canvas.width / scale;

var snake;

(function setup() {
snake = new Snake();
fruit = new Fruit();
fruit.pickLocation();

window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();
     
if (snake.eat(fruit)) {
    fruit.pickLocation();
}

}, 250);
}());

window.addEventListener('keydown', ((evt) => {
constant.direction = evt.key.replace('Arrow', '');
snake.changeDirection(direction);
))