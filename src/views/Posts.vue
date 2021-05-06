<template>
  <div class="post-home">
    <h1>Posts</h1>
    <PostList :posts="posts" v-if="showPosts" />
    <button @click="showPosts = !showPosts">Toggle visbility</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  components: { PostList },
  setup() {
    let lorem =
      "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatem sapiente dolor molestiae odio? Nam aliquam incidunt, error perspiciatis nulla nemo laudantium provident porro numquam eveniet! Blanditiis recusandae adipisci optio.";
    const posts = ref([
      { title: "Post1", body: lorem, id: 1 },
      { title: "Post2", body: lorem, id: 2 },
      { title: "Post3", body: lorem, id: 3 },
    ]);

    const showPosts = ref(true);

    return { posts, showPosts };
  },
};
</script>

<style></style>
