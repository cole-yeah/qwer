<template>
  <canvas id="triangle"></canvas>
</template>
<script>
import { Triangle } from "./Factory";
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
      posMap: [],
      triangleList: []
    };
  },
  mounted() {
    this.initCtx();
    this.initPos();
    this.init();
    this.fadeOut();
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
        }, 500);
      }
    },
    draw(i, j) {
      const nextPosX = j.x + (Math.random() * 2 - 0.25) * this.defaultHeight;
      const nextPosY = this.getHeight(j.y);

      this.round = this.round - (Math.PI * 2) / 50;
      //(R,G,B)转成十六进制的颜色值可以用(R << 16 | G << 8 | B).toString(16)
      const r = (Math.cos(this.round) * 127 + 128) << 16;
      const g = (Math.cos(this.round + (Math.PI * 1) / 3) * 127 + 128) << 8;
      const b = Math.cos(this.round + (Math.PI * 2) / 3) * 127 + 128;
      const color = "#" + (r | g | b).toString(16);
      const triangle = new Triangle({
        x0: i.x,
        y0: i.y,
        x1: j.x,
        y1: j.y,
        x2: nextPosX,
        y2: nextPosY,
        ctx: this.ctx,
        color
      });
      this.triangleList.push(triangle);
      triangle.draw();
      //三角形坐标重新赋值，确保前后两个三角形有一条边是共用的
      this.posMap[0] = this.posMap[1];
      this.posMap[1] = { x: nextPosX, y: nextPosY };
    },
    getHeight(val) {
      const curVal = val + (Math.random() * 2 - 1.1) * this.defaultHeight;
      return curVal > this.height || curVal < 0 ? this.getHeight(val) : curVal;
    },
    fadeOut() {
      if (this.triangleList.length) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.triangleList.forEach(triangle => {
          triangle.fadeOut();
        });
      }
      setTimeout(() => this.fadeOut(), 20);
    }
  }
};
</script>
