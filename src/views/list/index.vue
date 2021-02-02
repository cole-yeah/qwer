<template>
  <div class="wrapper">
    <RouterList :list="listRoutes" :floor="2" />
  </div>
</template>
<script>
import listRoutes from "@/router/list";
import RouterList from "@/components/RouterList";
export default {
  name: "List",
  components: {
    RouterList
  },
  data() {
    return {
      listRoutes
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
