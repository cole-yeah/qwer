<template>
  <div>
    <h3>clock</h3>
    <canvas id="clock" style="background: #000" width="600" height="600" />
  </div>
</template>
<script>
export default {
  name: "Clock",
  data() {
    return {
      clockCtx: null
    };
  },
  mounted() {
    this.initCtx();
    this.drawCircle();
    this.drawMinuteDial();
    this.drawHourDial();
  },
  methods: {
    initCtx() {
      const clockCanvas = document.getElementById("clock");
      this.clockCtx = clockCanvas.getContext("2d");
    },
    drawCircle() {
      this.clockCtx.beginPath();
      this.clockCtx.lineWidth = 6;
      this.clockCtx.strokeStyle = "#666";
      this.clockCtx.arc(250, 250, 200, 0, 360, false);
      this.clockCtx.stroke();
      this.clockCtx.closePath();
    },
    drawDial({
      deg = 30,
      width = 7,
      color = "#666",
      beginY = -170,
      endY = -190
    }) {
      this.clockCtx.save(); //设置旋转环境
      //设置时针的样式
      this.clockCtx.lineWidth = width;
      this.clockCtx.strokeStyle = color;

      this.clockCtx.translate(250, 250); //设置异次元空间的原点

      this.clockCtx.rotate((deg * Math.PI) / 180); //设置旋转角度
      this.clockCtx.beginPath(); //画笔开始
      this.clockCtx.moveTo(0, beginY); //画线， 从坐标0，-170开始
      this.clockCtx.lineTo(0, endY); //到坐标0，-190结束
      this.clockCtx.stroke(); //绘图
      this.clockCtx.closePath();
      this.clockCtx.restore();
    },
    drawText(index) {
      this.clockCtx.font = "16px";
      this.clockCtx.fillText(`${index}+1`, 0, -240);
      this.clockCtx.fillStyle = "#999";
    },
    drawHourDial() {
      for (let i = 0; i < 12; i++) {
        this.drawDial({ deg: i * 30 });
        this.drawText(i);
      }
    },
    drawMinuteDial() {
      for (let i = 0; i < 60; i++) {
        this.drawDial({
          deg: i * 6,
          width: 5,
          color: "#999",
          beginY: -180,
          endY: -190
        });
      }
    }
  }
};
</script>
