<template>
  <div class="about">
    <h1>This is an {{ count }} about page</h1>
    <van-button @click="increment(count + 1)">+</van-button>
  </div>
</template>
<script>
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
export default defineComponent({
  name: "About",
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const increment = () => {
      store.commit("increment");
    };
    return {
      count,
      increment
    };
  }
});
</script>
