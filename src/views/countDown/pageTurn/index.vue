<template>
  <div class="box">
    <div
      :class="['card', isActive ? 'activeCard' : ''].join(' ')"
      :data-before="25"
      @click="beginCountDown"
    >
      25
    </div>
    <div class="card">12</div>
  </div>
</template>
<script>
export default {
  name: "PageTurn",
  data() {
    return {
      delay: 25 * 60,
      isActive: false
    };
  },
  mounted() {},
  methods: {
    beginCountDown() {
      this.isActive = true;
      // setTimeout(() => )
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
.card {
  font-size: 160px;
  font-weight: bold;
  // color: #f8f8f8;
  background-color: #121212;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 8px;
  position: relative;
}
.card::before {
  display: block;
  content: attr(data-before);
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 2px solid #121212;
  font-size: 160px;
  font-weight: bold;
  background-color: #121212;
  padding: 20px;
  text-align: center;
  color: #f8f8f8;
}
.card::after {
  display: block;
  content: attr(data-after);
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 2px solid #121212;
}
.activeCard::before {
  transform-origin: bottom;
  transform: rotateX(90deg);
  transition: 0.5s ease;
}
</style>
