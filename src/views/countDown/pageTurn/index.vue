<template>
  <div class="box">
    <Card :time="getMinutes()" :isPlaying="isPlaying" timeType="minutes" />
    <Card :time="getSeconds()" :isPlaying="isPlaying" timeType="seconds" />
    <Footer
      :isPlaying="isPlaying"
      :pause="pauseCountDown"
      :reset="resetCountDown"
      :play="playCountDown"
    />
  </div>
</template>
<script>
import Card from "./components/Card";
import Footer from "./components/Footer";
const SIXTY_SECONDS = 60;
const TWENTY_FIVE = 25;
export default {
  name: "PageTurn",
  components: {
    Card,
    Footer
  },
  data() {
    return {
      delay: TWENTY_FIVE * SIXTY_SECONDS,
      timer: null,
      isPlaying: true
    };
  },
  mounted() {
    this.beginCountDown();
  },
  methods: {
    beginCountDown() {
      this.timer = setTimeout(() => {
        this.delay = Math.floor(this.delay - 1);
        this.delay > 0 && this.beginCountDown();
      }, 1000);
    },
    playCountDown() {
      this.isPlaying = true;
      this.beginCountDown();
    },
    pauseCountDown() {
      clearTimeout(this.timer);
      this.isPlaying = false;
    },
    resetCountDown() {
      this.delay = TWENTY_FIVE * SIXTY_SECONDS;
      this.pauseCountDown();
    },
    getMinutes() {
      return this.delay >= SIXTY_SECONDS
        ? Math.floor(this.delay / SIXTY_SECONDS)
        : 0;
    },
    getSeconds() {
      return this.delay >= 0 ? this.delay % SIXTY_SECONDS : 0;
    }
  }
};
</script>
<style lang="less" scoped>
.layout-mixin {
  width: 100%;
  margin: 0 auto;
  max-width: 750px;
}
.box {
  .layout-mixin;
  background-color: #000;
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
</style>
