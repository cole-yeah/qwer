<template>
  <div class="wrapper">
    <RouterList :list="dragAndDropRoutes" :floor="2" />
  </div>
</template>
<script>
import RouterList from "@/components/RouterList";
import dragAndDropRoutes from "@/router/dragAndDrop";
export default {
  name: "CountDown",
  components: {
    RouterList
  },
  data() {
    return {
      dragAndDropRoutes
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
