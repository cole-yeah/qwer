class Confetti {
  constructor({
    ctx,
    color = "#999",
    x = 280,
    y = 280,
    width = 10,
    heigth = 10,
    angle = 50,
    gravity = 3,
    velocity = 50,
    canvasWidth = 300,
    canvasHeight = 300
  }) {
    this.ctx = ctx;
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = heigth;
    this.angle = angle;
    this.gravity = gravity;
    this.velocity = velocity;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    // this.ctx.transform()
    this.ctx.fillRect(this.x, this.y, this.width, this.heigth);
    this.ctx.stroke();
  }
  move() {
    if (this.x <= 0 || this.y <= 0) return;
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.x -= Math.cos(this.angle) * this.velocity;
    this.y += Math.sin(this.angle) * this.velocity + this.gravity;
    this.draw();
  }
}

export default Confetti;
