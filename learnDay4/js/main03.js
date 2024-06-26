/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberOfEnemies = 30;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
  constructor() {
    this.enemyImage1 = new Image();
    this.enemyImage1.src = "enemies/enemy1.png";
    this.enemyImage2 = new Image();
    this.enemyImage2.src = "enemies/enemy2.png";
    this.enemyImage3 = new Image();
    this.enemyImage3.src = "enemies/enemy3.png";
    this.enemyImage4 = new Image();
    this.enemyImage4.src = "enemies/enemy4.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.newX = Math.random() * canvas.width;
    this.newY = Math.random() * canvas.height;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 5);
  }
  update() {
    if (gameFrame % this.interval === 0) {
      this.newX = Math.random() * (canvas.width - this.width);
      this.newY = Math.random() * (canvas.height - this.height);
    }
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    this.x -= dx / 100;
    this.y -= dy / 100;
    if (this.x + this.width < 0) {
      this.x = canvas.width;
    }
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.enemyImage4,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Enemy3 {
  constructor() {
    this.enemyImage3 = new Image();
    this.enemyImage3.src = "enemies/enemy3.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.agle = Math.random() * 500;
    this.agleSpeed = Math.random() * 1.5 + 0.5;
    //this.curve = Math.random() * 200 + 50;
  }
  update() {
    this.x =
      (canvas.width / 2) * Math.sin((this.agle * Math.PI) / 90) +
      canvas.width / 2 -
      this.width / 2;
    this.y =
      (canvas.width / 2) * Math.cos((this.agle * Math.PI) / 270) +
      canvas.height / 2 -
      this.height / 2;
    this.agle += this.agleSpeed;
    if (this.x + this.width < 0) {
      this.x = canvas.width;
    }
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.enemyImage3,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Enemy2 {
  constructor() {
    this.enemyImage2 = new Image();
    this.enemyImage2.src = "enemies/enemy2.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.frame = 0;
    this.agle = Math.random() * 2;
    this.agleSpeed = Math.random() * 0.2;
    this.curve = Math.random() * 7;
  }
  update() {
    this.x -= this.speed;
    this.y += this.curve * Math.sin(this.agle);
    this.agle += this.agleSpeed;
    if (this.x + this.width < 0) {
      this.x = canvas.width;
    }
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.enemyImage2,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Enemy1 {
  constructor() {
    this.enemyImage1 = new Image();
    this.enemyImage1.src = "enemies/enemy1.png";
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.frame = 0;
  }
  update() {
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.enemyImage1,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
