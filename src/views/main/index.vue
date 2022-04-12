<template>
  <div class="wrapper">
    <div class="bg"></div>
    <div class="content">
      <section class="headerBox">
        <p class="title">QWER</p>
        <p>基于VUE的练习项目</p>
      </section>
      <RouterList :list="routes" :floor="1" />
    </div>
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
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin: -10px;
  padding: 10px;
  z-index: -1;
  background-image: url("../../assets/bg.jpg");
  background-size: 100% auto;
  background-repeat: no-repeat;
  filter: blur(6px) brightness(0.4);
  background-color: #2e3a4a;
  background-position: center;
}
.content {
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.headerBox {
  margin: -30px 0 20px;
  color: #ddd;
  letter-spacing: 4px;
  padding: 20px 80px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.3);
  p {
    margin: 10px 0;
    text-align: center;
  }
  .title {
    font-size: 70px;
  }
}
</style>
