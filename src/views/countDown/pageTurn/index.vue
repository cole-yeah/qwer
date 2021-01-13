<template>
  <div class="box">
    <Card :time="getMinutes()" timeType="minutes" />
    <Card :time="getSeconds()" timeType="seconds" />
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
.box {
  background-color: #000;
  width: 100%;
  max-width: 750px;
  height: 100vh;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
