import Player from "./player08.js";
import InputHandle from "./input08.js";
import { drawStatusText } from "./utils08.js";

window.addEventListener("load", function () {
  const loading = this.document.getElementById("loading");
  loading.style.display = "none";
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  const CANVAS_WIDTH = (canvas.width = window.innerWidth);
  const CANVAS_HEIGHT = (canvas.height = window.innerHeight);

  const player = new Player(canvas.width, canvas.height);
  const input = new InputHandle();

  let lastTime = 0;
  function animate(timeStamp) {
    const detalTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx, detalTime);
    player.update(input.lastKey);
    drawStatusText(ctx, input, player);
    requestAnimationFrame(animate);
  }
  animate(0);
});
