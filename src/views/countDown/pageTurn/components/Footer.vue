<template>
  <footer class="footer">
    <section class="section">
      <p class="motto">{{ mottoAry[mottoIndex] }}</p>
      <div class="btnBox">
        <div class="btn" @click="clickFunc">
          {{ isPlaying ? "暂停" : "开始" }}
        </div>
        <div class="btn" @click="resetCount">重置</div>
      </div>
    </section>
  </footer>
</template>
<script>
const MOTTO_ARY = [
  "千里之行，始于足下",
  "知行合一",
  "接受失败，但不选择放弃",
  "一年四季总要分明。我们又何必感叹",
  "为成功找方法，不为失败找借口",
  "坚持就是胜利"
];
export default {
  name: "PageTurn",
  data() {
    return {
      mottoAry: MOTTO_ARY,
      mottoIndex: Math.floor(Math.random() * (MOTTO_ARY.length + 1))
    };
  },
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
    },
    resetCount() {
      this.reset();
      this.mottoIndex = Math.floor(Math.random() * (MOTTO_ARY.length + 1));
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
}
.section {
  width: 100%;
  max-width: 750px;
}
.btnBox {
  width: 100%;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  background-color: #121212;
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
.motto {
  margin-bottom: 10vw;
  color: #999;
  font-size: 16px;
  text-align: center;
  font-family: fangsong;
}
</style>
