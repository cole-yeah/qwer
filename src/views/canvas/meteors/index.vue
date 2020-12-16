<template>
  <div class="meteorsBg">
    <canvas class="canvas" id="stars"></canvas>
    <canvas class="canvas" id="moon"></canvas>
  </div>
</template>
<script>
import { Moon, Star } from "./Factory";
export default {
  name: "Meteors",
  data() {
    return {
      starsCanvas: null,
      moonCanvas: null,
      starsCtx: null,
      moonCtx: null,
      starsList: [],
      width: 0,
      height: 0,
      timer: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.width = document.body.clientWidth;
      this.height = document.body.clientHeight;
      this.initMoon();
      this.initStar();
      //动画
      this.animate();
      this.resize();
    },
    initMoon() {
      this.moonCanvas = document.getElementById("moon");
      this.moonCanvas.width = this.width;
      this.moonCanvas.height = this.height / 3;
      this.moonCtx = this.moonCanvas.getContext("2d");
      const moon = new Moon({
        x: this.moonCanvas.width - 100,
        y: 60,
        r: 30,
        ctx: this.moonCtx
      });
      moon.draw();
    },
    initStar() {
      this.starsCanvas = document.getElementById("stars");
      this.starsCanvas.width = this.width;
      this.starsCanvas.height = this.height;
      this.starsCtx = this.starsCanvas.getContext("2d");
      //星星数量
      const starsNumber = 60;
      const random = Math.random;
      this.starsList = Array.from({ length: starsNumber }, () => {
        const star = new Star({
          x: random() * this.starsCanvas.width,
          y: random() * (this.starsCanvas.height / 3),
          ctx: this.starsCtx,
          r: random(),
          width: this.starsCanvas.width,
          height: this.starsCanvas.height
        });
        star.draw();
        return star;
      });
    },
    animate() {
      if (!this.starsList?.length) return;
      this.starsCtx.fillStyle = "rgba(0, 0, 0, 0.2)";
      this.starsCtx.fillRect(
        0,
        0,
        this.starsCanvas.width,
        this.starsCanvas.height
      );
      this.starsList.forEach(star => star.move());
      requestAnimationFrame(this.animate);
    },
    resize() {
      window.onresize = () => {
        this.timer && clearTimeout(this.timer);

        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;
        this.starsList = [];
        this.timer = setTimeout(() => this.init(), 50);
      };
    }
  }
};
</script>
<style lang="less" scoped>
.meteorsBg {
  background-color: rgb(10, 10, 32);
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.canvas {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
