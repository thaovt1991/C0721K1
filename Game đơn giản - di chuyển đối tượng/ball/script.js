
function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getSpeed = function () {
    return this.speed;
  }
  this.setSpeed = function (speed) {
      this.speed = speed;
  }

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;

  }

  this.moveLeft = function () {
    this.left -= this.speed;

  }

  this.moveUp = function () {
    this.top -= this.speed;

  }

  this.moveDown = function () {
    this.top += this.speed;

  }
}

var hero = new Hero('ball.png', 20, 30, 100, 20);


const l = hero.left;
const t = hero.top;
const sp = hero.speed;

function start() {
  if ((hero.left < (window.innerWidth - hero.size - l )) && (hero.top == t)) {
    hero.moveRight();
  }

  if ((hero.top < (window.innerHeight - hero.size - t)) && (hero.left >= (window.innerWidth - hero.size - l))) {
    hero.moveDown();
  }
  if ((hero.left > l + sp ) && (hero.top >= window.innerHeight - hero.size - t)) {
    hero.moveLeft();
  }

  if ((hero.top > t) && (hero.left == l + sp )) {
    hero.moveUp();
  }

document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100)
}
start();

