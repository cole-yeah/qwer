<template>
  <div
    draggable="true"
    class="dragBox"
    @click="click"
    @dragstart="dragStart"
    @dragend="dragEnd"
    @dragenter="dragEnter"
    @dragover="dragOver"
    :style="posStyle"
  >
    <slot />
    <span>{{ countObj.count + "---" + posStyle.top }}</span>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Drag",
  setup() {
    const posStyle = reactive({
      top: 0,
      left: 0
    });
    const countObj = reactive({
      count: 0
    });
    const click = () => {
      countObj.count += 1;
    };
    const dragStart = e => {
      console.log("=========", e);
    };
    const dragEnter = e => {
      console.log("==== enter =====", e);
    };
    const dragOver = e => {
      console.log("==== over =====", e);
    };
    const dragEnd = e => {
      const { offsetX, offsetY, clientX, clientY, pageX, pageY } = e;
      console.log("==== end =====", e);
      posStyle.left = `${pageX}px`;
      posStyle.top = `${pageY}px`;
    };
    return {
      click,
      dragStart,
      dragEnd,
      dragEnter,
      dragOver,
      posStyle,
      countObj
    };
  }
});
</script>
<style lang="less" scoped>
.dragBox {
  display: inline-block;
  padding: 20px;
  background-color: #121212;
  color: #fff;
  cursor: pointer;
  position: absolute;
}
</style>
