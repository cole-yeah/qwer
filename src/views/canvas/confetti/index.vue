<template>
  <div>
    <canvas width="300" height="300" id="confetti"></canvas>
    <div class="btn">run</div>
  </div>
</template>
<script>
import Confetti from "./Factory";
export default {
  name: "Confetti",
  data() {
    return {
      ctx: null,
      canvasWidth: 500,
      canvasHeight: 500
    };
  },
  mounted() {
    this.initCtx();
    this.confetti = new Confetti({ ctx: this.ctx });
    this.confetti.draw();
    this.updateView();
  },
  methods: {
    initCtx() {
      const canvas = document.getElementById("confetti");
      this.ctx = canvas.getContext("2d");
      this.ctx.width = this.canvasWidth;
      this.ctx.height = this.canvasHeight;
    },
    updateView() {
      setTimeout(() => {
        this.confetti.move();
        this.updateView();
      }, 1000);
    }
    // drawFetti({

    // }) {
    //   this.ctx.beginPath();

    // }
  }
};
</script>
<style lang="less" scoped>
.btn {
  padding: 6px 16px;
  color: #333;
}
</style>
