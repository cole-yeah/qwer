<template>
  <div class="wrapper">
    <RouterList :list="countDownRoutes" :floor="2" />
  </div>
</template>
<script>
import RouterList from "@/components/RouterList";
import countDownRoutes from "@/router/countDown";
export default {
  name: "CountDown",
  components: {
    RouterList
  },
  data() {
    return {
      countDownRoutes
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
