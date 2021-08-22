/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getSpeed = function () {
    return this.speed;
  }
  this.right = function () {
    if (window.innerWidth - this.size < this.left) {
      return this.right = this.left
    } else
      return this.right = window.innerWidth - this.left - this.size
  }
  this.bottom = function () {
    if (window.innerHeight - this.size < this.top) {
      return this.bottom = this.top
    } else
      return this.right = window.innerHeight - this.top - this.size
  }

  this.setSpeed = function (speed) {
    return this.speed = speed;
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

