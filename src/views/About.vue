<template>
  <div class="about">
    <h1>This is an {{ count }} about page</h1>
    <van-button @click="increment(count + 1)">+</van-button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: mapState({
    count: state => state.count
  }),
  methods: {
    ...mapMutations(["increment"])
  }
};
</script>
