<template>
  <canvas id="canvas"></canvas>
  <!-- <img
    class="img"
    src="https://pic1.zhimg.com/80/v2-3b1906c98643f07605dbb66412af76b8_720w.png"
  /> -->
</template>
<script>
import { Nodes } from "./utils";
export default {
  name: "ImageNode",
  mounted() {
    Nodes.init();
  }
};
</script>
<style lang="less" scoped>
.img {
  width: 100px;
  height: 100px;
}
</style>
