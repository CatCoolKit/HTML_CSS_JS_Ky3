let cvs = document.querySelector("canvas");
let ctx = cvs.getContext("2d");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

let particleArray = [];
let noOfParticles = 400;
let mouse = {
    x: null,
    y: null,
};

let angle = (Math.PI * 2)/400;
let gravity = 0.005;
let friction = 0.99;

let colorCode = [
    "#FF0000", // Đỏ
    "#00FF00", // Xanh lá cây
    "#0000FF", // Xanh dương
    "#FFFF00", // Vàng
    "#FF00FF", // Tím
    "#00FFFF", // Cyan
    "#FFA500", // Cam
    "#800080"  // Tím đậm
];

function pickAColor() {
    return colorCode[Math.floor(Math.random() * colorCode.length)];
}

addEventListener("resize", (e) => {
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
})

addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

addEventListener("mousedown", (e) => {
    init();
})

// Tạo một hình ảnh làm background
const backgroundImage = new Image();
backgroundImage.src = './image/IMG_1961.PNG';

// Đợi cho hình ảnh được tải xong trước khi vẽ lên canvas
backgroundImage.onload = function() {
    function animate() {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        // Vẽ background image lên canvas
        ctx.fillRect(0,0, cvs.width, cvs.height);
        // ctx.drawImage(backgroundImage, 0, 0, cvs.width, cvs.height);

        requestAnimationFrame(animate);

        particleArray.forEach((particle, i) => {
            if (particle.alpha > 0) {
                particle.draw();
                particle.update();
            } else {
                particleArray.splice(i, 1);
            }
        });
    }

    // Gọi hàm animate() để bắt đầu vòng lặp animation
    animate();
};

function init(){
    for (let index = 0; index < noOfParticles; index++) {
        particleArray.push(
            new Particles(mouse.x, mouse.y, {
                x: Math.cos(angle*index)* Math.random()*5,
                y: Math.sin(angle*index)* Math.random()*5,
            })
        )
        
    }
}

class Particles {
    constructor(x,y,spin){
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.spin = spin;
        this.color = pickAColor();
        this.alpha = 1;
    }
    draw(){
        
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore;
        
    }
    update(){
        this.spin.x *= friction;
        this.spin.y *= friction;
        this.spin.y += gravity;
        this.x += this.spin.x;
        this.y += this.spin.y;
        this.alpha -= 0.002;

    }
}

const canvas = document.getElementById('myCanvas');
const ctx1 = canvas.getContext('2d');

// Vẽ đám mây
function drawCloud(x, y, width, height) {
    ctx1.beginPath();
    ctx1.arc(x, y, width * 0.2, 0, Math.PI * 2);
    ctx1.arc(x + width * 0.2, y - height * 0.2, width * 0.25, 0, Math.PI * 2);
    ctx1.arc(x + width * 0.5, y - height * 0.2, width * 0.3, 0, Math.PI * 2);
    ctx1.arc(x + width * 0.8, y, width * 0.25, 0, Math.PI * 2);
    ctx1.closePath();
    ctx1.fillStyle = 'white';
    ctx1.fill();
}

