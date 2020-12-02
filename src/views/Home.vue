<template>
  <div class="home">
    <div class="item" @click="pushPage('/about')">Counter</div>
    <div class="item" @click="pushPage('/canvas')">Canvas</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    pushPage(path) {
      this.$router.push({ path });
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  background-color: #f8f8f8;
  padding: 10px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
}
.item {
  padding: 10px 15px;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
}
</style>
