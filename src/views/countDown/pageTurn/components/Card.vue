<template>
  <div
    :class="
      [
        'card',
        isBeforeActive ? 'beforeActiveCard' : '',
        isAfterActive ? 'afterActiveCard' : ''
      ].join(' ')
    "
    :data-before="joinPlace(curTime)"
    :data-after="joinPlace(curTime)"
    @click="beginCountDown"
  >
    {{ joinPlace(time) }}
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {
      isBeforeActive: false,
      isAfterActive: false,
      curTime: this.time //倒计时(动画显示时间)
    };
  },
  props: {
    time: {
      type: Number,
      default: 0
    },
    timeType: {
      type: String,
      default: "seconds"
    }
  },
  watch: {
    time() {
      this.beginAni();
    }
  },
  methods: {
    beginAni() {
      this.isBeforeActive = true;
      setTimeout(() => {
        this.isAfterActive = true;
        this.$nextTick(() => (this.curTime = this.time));
        setTimeout(() => {
          this.resetStatus();
        }, 200);
      }, 300);
    },
    resetStatus() {
      this.isBeforeActive = false;
      this.isAfterActive = false;
    },
    joinPlace(num) {
      return num < 10 ? `0${num}` : num;
    }
  }
};
</script>
<style lang="less" scoped>
.card-mixin {
  font-size: 160px;
  color: #f8f8f8;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  background-color: #121212;
}
.card {
  .card-mixin;
  margin-bottom: 20px;
  border-radius: 8px;
  position: relative;
  perspective: 800;
  -webkit-perspective: 800;
}
.pseudo-mixin {
  display: block;
  width: 100%;
  height: 50%;
  position: absolute;
  left: 0;
  overflow: hidden;
}
.card::before {
  .card-mixin;
  .pseudo-mixin;
  content: attr(data-before);
  top: 0;
  border-bottom: 1px solid #121212;
  transform-origin: bottom;
  border-radius: 8px 8px 0 0;
}
.card::after {
  .card-mixin;
  .pseudo-mixin;
  content: attr(data-after);
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transform-origin: top;
  border-radius: 0 0 8px 8px;
}
.beforeActiveCard::before {
  animation: beforeActive 0.25s ease forwards;
}
@keyframes beforeActive {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
}
.afterActiveCard::after {
  animation: afterActive 0.2s ease-out forwards;
}
@keyframes afterActive {
  0% {
    transform: rotateX(60deg);
    background-color: #333;
  }
  100% {
    transform: rotateX(0deg);
  }
}
.line {
  position: absolute;
  width: 100%;
  left: 0;
  height: 4px;
  background-color: #121212;
  top: calc(50% - 2px);
  z-index: 2;
}
</style>
