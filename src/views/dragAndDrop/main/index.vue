<template>
  <div class="wrapper">
    <DragBox>
      <template v-slot:default>
        <div>content 11111</div>
      </template>
    </DragBox>
    <DragBox>
      <template v-slot:default>
        <div>content 22222222</div>
      </template>
    </DragBox>
    <!-- <div class="box" @dragover="dragover" @dragenter="dragenter"></div> -->
  </div>
</template>
<script>
import { defineComponent } from "vue";
import DragBox from "./components/Drag";
export default defineComponent({
  name: "Main",
  components: { DragBox },
  setup() {
    // const dragover = (e) => {
    //   console.log('00000000000', e)
    // }
    // const dra = (e) => {
    //   console.log('00000000000', e)
    // }
    return {
      // dragover
    };
  }
});
</script>
<style lang="less" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}
.box {
  width: 160px;
  height: 160px;
  border: 1px solid #333;
}
</style>
