<template>
  <div class="wrapper">
    <RouterList :list="canvasRoutes" :floor="2" />
  </div>
</template>
<script>
import canvasRoutes from "@/router/canvas";
import RouterList from "@/components/RouterList";
export default {
  name: "Canvas",
  components: {
    RouterList
  },
  data() {
    return {
      canvasRoutes
    };
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  padding: 10px;
  background-color: #f8f8f8;
}
</style>
