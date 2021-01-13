<template>
  <footer class="footer">
    <div class="btn" @click="clickFunc">
      {{ isPlaying ? "PAUSE" : "PLAY" }}
    </div>
    <div class="btn" @click="reset">RESET</div>
  </footer>
</template>
<script>
export default {
  name: "PageTurn",
  props: {
    isPlaying: {
      type: Boolean,
      default: true
    },
    pause: {
      type: Function,
      default: () => {}
    },
    reset: {
      type: Function,
      default: () => {}
    },
    play: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    clickFunc() {
      this.isPlaying ? this.pause() : this.play();
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: #121212;
  display: flex;
  justify-content: center;
}
.btn {
  border: 2px solid #f8f8f8;
  background-color: #111111;
  color: #f8f8f8;
  font-size: 20px;
  padding: 6px 16px;
  border-radius: 20px;
  margin: 0 15px;
}
</style>
