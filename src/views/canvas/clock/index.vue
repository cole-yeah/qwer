<template>
  <div>
    <h3>clock</h3>
    <canvas id="clock" style="background: #000" width="600" height="600" />
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  name: "Clock",
  data() {
    return {
      clockCtx: null,
      timer: null
    };
  },
  mounted() {
    this.initCtx();
    this.countDown();
  },
  unmounted() {
    this.timer && clearTimeout(this.timer);
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
      this.clockCtx.save();
      this.clockCtx.lineWidth = width;
      this.clockCtx.strokeStyle = color;

      this.clockCtx.translate(250, 250);
      this.clockCtx.rotate((deg * Math.PI) / 180);
      this.clockCtx.beginPath();
      this.clockCtx.moveTo(0, beginY);
      this.clockCtx.lineTo(0, endY);
      this.clockCtx.stroke();
      this.clockCtx.closePath();
      this.clockCtx.restore();
    },
    drawText(index) {
      this.clockCtx.save();
      this.clockCtx.translate(250, 250);
      this.clockCtx.rotate(((index + 1) * 30 * Math.PI) / 180);
      this.clockCtx.font = "18px Arial";
      this.clockCtx.fillStyle = "#f8f8f8";
      this.clockCtx.fillText(`${index + 1}`, -7, -150);
      this.clockCtx.restore();
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
    },
    drawCircleCenter() {
      this.clockCtx.save();
      this.clockCtx.beginPath();
      this.clockCtx.lineWidth = 1;
      this.clockCtx.strokeStyle = "#333";
      this.clockCtx.arc(250, 250, 6, 0, 360, false);
      this.clockCtx.stroke();
      this.clockCtx.closePath();
      this.clockCtx.fillStyle = "#333";
      this.clockCtx.fill();
      this.clockCtx.restore();
    },
    drawNeedle({ deg, width = 7, length = 100, color = "#999" }) {
      this.clockCtx.save();
      //时针样式
      this.clockCtx.lineWidth = width;
      this.clockCtx.strokeStyle = color;
      this.clockCtx.translate(250, 250);
      this.clockCtx.rotate((deg * Math.PI) / 180);
      this.clockCtx.beginPath();
      this.clockCtx.moveTo(0, -length);
      this.clockCtx.lineTo(0, 10);
      this.clockCtx.stroke();
      this.clockCtx.closePath();
      this.clockCtx.restore();
    },
    drawSecondNeedle(val) {
      this.drawNeedle({ length: 160, color: "#333", width: 4, deg: val * 6 });
    },
    drawMinuteNeedle(val) {
      this.drawNeedle({ length: 140, color: "#666", width: 5, deg: val * 6 });
    },
    drawHourNeedle(h, m) {
      const deg = h * 30 + (m * 6) / 13;
      this.drawNeedle({ length: 120, color: "#999", width: 6, deg });
    },
    countDown() {
      this.clockCtx.clearRect(0, 0, 500, 500);
      this.drawCircle();
      this.drawMinuteDial();
      this.drawHourDial();
      const [h, m, s] = dayjs()
        .format("HH:mm:ss")
        .split(":")
        .map(str => Number(str));
      this.drawHourNeedle(h, m);
      this.drawMinuteNeedle(m);
      this.drawSecondNeedle(s);
      this.drawCircleCenter();
      this.timer = setTimeout(() => {
        this.countDown();
      }, 1000);
    }
  }
};
</script>
