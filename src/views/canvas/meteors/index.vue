<template>
  <div class="meteorsBg">
    <canvas class="canvas" id="stars"></canvas>
    <canvas class="canvas" id="moon"></canvas>
    <canvas class="canvas" id="meteors"></canvas>
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
      meteorsCanvas: null,
      starsCtx: null,
      moonCtx: null,
      meteorsCtx: null,
      starsList: [],
      width: 0,
      height: 0
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
      this.starsCanvas.height = this.height / 3;
      this.starsCtx = this.starsCanvas.getContext("2d");
      //星星数量
      const starsNumber = 60;
      const random = Math.random;
      this.starsList = Array.from({ length: starsNumber }, () => {
        const star = new Star({
          x: random() * this.starsCanvas.width,
          y: random() * this.starsCanvas.height,
          ctx: this.starsCtx,
          r: random(),
          width: this.starsCanvas.width,
        });
        star.draw();
        return star;
      });
    },
    animate() {
      this.starsCtx.clearRect(
        0,
        0,
        this.starsCanvas.width,
        this.starsCanvas.height
      );
      this.starsList.forEach(star => star.move());
      requestAnimationFrame(this.animate);
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
