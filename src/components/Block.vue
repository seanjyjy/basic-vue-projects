<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    click me
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer); // as a cleanup
      this.showBlock = false;
      this.$emit("end", this.reactionTime);
    },
  },
  // when the block gets mounted to dom
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  // when block gets updated
  update() {},
  // when block gets unmounted from dom
  unmounted() {},
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 10px;
  background: #123456;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
