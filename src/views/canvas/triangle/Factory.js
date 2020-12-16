export class Triangle {
  constructor({ ctx, color, x0, y0, x1, y1, x2, y2 }) {
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.ctx = ctx;
    this.color = color;
    this.opacity = 0;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x0, this.y0);
    this.ctx.lineTo(this.x1, this.y1);
    this.ctx.lineTo(this.x2, this.y2);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
  fadeOut() {
    this.opacity = Number((this.opacity - 0.01).toFixed(2));
    if (this.opacity <= 0) {
      return;
    }
    this.color = `rgba(0, 0, 0, ${this.opacity})`;
    this.draw();
  }
}
