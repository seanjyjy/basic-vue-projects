<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      let len = Math.random() * 100 + 50;
      return `${props.post.body.substring(0, len)}...`;
    });
    return { snippet };
  },
};
</script>

<style></style>
