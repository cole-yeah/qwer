<template>
  <div id="list" class="list">
    <div class="item" v-for="(item, i) in renderList" :key="i">
      <div class="img"></div>
      <div>节点: {{ item }}</div>
    </div>
  </div>
</template>
<script>
let status = true;
const throttle = (fn, t = 30) => {
  if (!status) return;
  status = false;
  fn();
  setTimeout(() => {
    status = true;
  }, t);
};
export default {
  name: "Virtual",
  data() {
    return {
      list: [],
      renderList: [],
      itemHeight: 63,
      length: 20,
      paddingTop: 0,
      paddingBottom: 0
    };
  },
  mounted() {
    const ary = Array.from({ length: 100 }, (_, i) => i);
    this.list = ary;
    this.renderList = ary.slice(0, this.length);
    const element = document.documentElement;

    window.addEventListener("scroll", () => {
      console.log("xxxxxxxxxxxxxx", element.scrollTop);
      throttle(() => this.caculate(element.scrollTop));
    });
  },
  methods: {
    caculate(scrollTop) {
      const startIndex = Math.round(scrollTop / this.itemHeight);
      const newList = this.list.slice(startIndex, startIndex + this.length);
      console.log("xxxxxxxx==========xxxxxxx", startIndex, newList);
      this.renderList = newList;
    }
  }
};
</script>
<style lang="less" scoped>
// .list {
//   height: 100vh;
//   overflow: auto;
// }
.item {
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
  width: 100%;
  padding: 6px 12px;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
}
.img {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: #ddd;
  margin-right: 10px;
}
</style>
