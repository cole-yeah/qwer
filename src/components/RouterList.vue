<template>
  <div class="list">
    <div v-for="(route, i) in list" :key="i">
      <div
        class="item"
        @click="pushPage(route.path)"
        v-if="route.floor === floor"
      >
        {{ route.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RouterList",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    floor: {
      type: Number,
      default: 1
    }
  },
  methods: {
    pushPage(path) {
      this.$router.push({ path });
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  display: flex;
  justify-content: flex-start;
}
.item {
  padding: 6px 12px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  border-radius: 4px;
  background-color: #eee;
  margin-bottom: 10px;
  margin-right: 12px;
  cursor: pointer;
}
</style>
