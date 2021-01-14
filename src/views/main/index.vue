<template>
  <div class="wrapper">
    <RouterList :list="routes" :floor="1" />
  </div>
</template>
<script>
import { routes } from "@/router";
import RouterList from "@/components/RouterList";
export default {
  name: "Main",
  components: {
    RouterList
  },
  data() {
    return {
      routes
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
