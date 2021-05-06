<template>
  <h1>Good luck in your reaction time!</h1>
  <button @click.prevent="start" :disabled="isPlaying">play</button>
  <p v-if="isPlaying">Get ready it will come out anytime soon!!!</p>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <div class="empty-block" />
  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from "../components/Block.vue";
import Results from "../components/Results.vue";

export default {
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 3000;
      this.showResults = false;
      let element = document.querySelector(".empty-block");

      element.classList.remove("hide");

      element.scrollIntoView({ behavior: "smooth" });
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
      let element = document.querySelector(".empty-block");
      element.classList.add("hide");
    },
  },
};
</script>

<style>
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
.empty-block {
  width: 420px;
  padding: 100px 0;
  margin: 40px auto;
}

.empty-block.hide {
  display: none;
}
</style>
