<template>
  <canvas id="triangle"></canvas>
</template>
<script>
export default {
  name: "Triangle",
  data() {
    return {
      canvas: null,
      ctx: null,
      width: window.innerWidth,
      height: window.innerHeight,
      defaultHeight: 90,
      round: 0,
      posMap: []
    };
  },
  mounted() {
    this.initCtx();
    this.initPos();
    this.init();
  },
  methods: {
    initCtx() {
      const ratio = window.devicePixelRatio || 1; //页面缩放比例
      this.canvas = document.getElementById("triangle");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = this.width * ratio;
      this.canvas.height = this.height * ratio;
      this.ctx.scale(ratio, ratio); //画布缩放
      this.ctx.globalAlpha = 0.6;
      this.ctx.clearRect(0, 0, this.width, this.height);
    },
    initPos() {
      this.posMap = [
        { x: 0, y: this.height * 0.7 + this.defaultHeight },
        { x: 0, y: this.height * 0.7 - this.defaultHeight }
      ];
    },
    init() {
      this.draw(this.posMap[0], this.posMap[1]);
      if (this.posMap[1].x < this.width + this.defaultHeight) {
        setTimeout(() => {
          this.init();
        }, 200);
      }
    },
    draw(i, j) {
      this.ctx.beginPath();
      //开始 画三角形
      this.ctx.moveTo(i.x, i.y);
      this.ctx.lineTo(j.x, j.y);
      const nextPosX = j.x + (Math.random() * 2 - 0.25) * this.defaultHeight;
      const nextPosY = this.getHeight(j.y);
      this.ctx.lineTo(nextPosX, nextPosY);
      this.ctx.closePath();
      //结束 画三角形
      this.round = this.round - (Math.PI * 2) / 50;
      //(R,G,B)转成十六进制的颜色值可以用(R << 16 | G << 8 | B).toString(16)
      const r = (Math.cos(this.round) * 127 + 128) << 16;
      const g = (Math.cos(this.round + (Math.PI * 1) / 3) * 127 + 128) << 8;
      const b = Math.cos(this.round + (Math.PI * 2) / 3) * 127 + 128;
      this.ctx.fillStyle = "#" + (r | g | b).toString(16);
      this.ctx.fill();
      //三角形坐标重新赋值，确保前后两个三角形有一条边是共用的
      this.posMap[0] = this.posMap[1];
      this.posMap[1] = { x: nextPosX, y: nextPosY };
    },
    getHeight(val) {
      const curVal = val + (Math.random() * 2 - 1.1) * this.defaultHeight;
      return curVal > this.height || curVal < 0 ? this.getHeight(val) : curVal;
    }
  }
};
</script>
