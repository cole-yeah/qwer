<template>
  <div>
    <h3>clock</h3>
    <canvas id="clock" />
  </div>
</template>
<script>
import { computed, ref, useTransitionState } from "vue";
export default {
  setup() {
    const count = ref();
    const name = computed({});
  }
};
</script>
