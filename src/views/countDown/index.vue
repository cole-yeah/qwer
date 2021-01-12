<template>
  <div class="wrapper">
    <div
      class="item"
      v-for="(route, i) in countDownRoutes"
      :key="i"
      @click="pushPage(route.path)"
    >
      {{ route.name }}
    </div>
  </div>
</template>
<script>
import countDownRoutes from "@/router/countDown";
export default {
  name: "CountDown",
  data() {
    return {
      countDownRoutes
    };
  },
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
  margin-bottom: 10px;
}
</style>
