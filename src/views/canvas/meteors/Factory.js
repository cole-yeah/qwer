export class Moon {
  constructor({ x, y, r, ctx }) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.beginPath();
    /**
     * x: 圆的中心的 x 坐标
     * y: 圆的中心的 y 坐标
     * r: 圆的半径
     * sAngle: 起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）
     * eAngle: 结束角，以弧度计
     * counterclockwise: 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针
     */
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.shadowBlur = this.r + 5;
    this.ctx.shadowColor = "#fff";
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    this.ctx.fill();
  }
}

export class Star extends Moon {
  constructor({ x, y, r, ctx, width, height }) {
    super({ x, y, r, ctx });
    this.width = width;
    this.height = height;
    this.isShining = Math.random() > 0.9;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    this.ctx.fill();
  }
  move() {
    this.x += 0.04;
    if (this.isShining) {
      this.x += 1;
      this.y += 2;
    }
    if (this.x >= this.width) {
      this.isShining = false;
      this.x = 0;
      this.y = Math.random() * (this.height / 3);
      setTimeout(
        () => (this.isShining = Math.random() > 0.9),
        20000 * Math.random()
      );
    }
    if (this.y >= this.height / 2) {
      this.isShining = false;
      this.x = Math.random();
      this.y = Math.random() * (this.height / 3);
      setTimeout(() => (this.isShining = true), 10000 * Math.random());
    }
    this.draw();
  }
}
