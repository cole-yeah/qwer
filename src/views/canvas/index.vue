<template>
  <div class="wrapper">
    <div class="item" @click="pushPage('/canvas/imageNode')">canvas image node</div>
  </div>
</template>
<script>
export default {
  name: "Canvas",
  methods: {
    pushPage(path) {
      this.$router.push({ path });
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  padding: 10px;
  background-color: #f8f8f8;
}
.item {
  padding: 10px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  border-radius: 8px;
  background-color: #fff;
}
</style>
