<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'ReactionTimer' }">Reaction Timer</router-link> |
    <router-link :to="{ name: 'VueForm' }">Form</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link> |
    <router-link :to="{ name: 'Modal' }">Modal</router-link>
  </div>
  <!-- <button @click="redirect">Redirect</button> -->
  <button @click="back">Back</button>
  <button @click="forward">Forward</button>
  <router-view />
</template>

<script>
export default {
  methods: {
    // redirect() {
    //   this.$router.push({ name: "Home" });
    // },
    back() {
      // -1 means go back in history by 1
      this.$router.go(-1);
    },
    forward() {
      // 1 means go forward in history by 1
      this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #fff;
  box-shadow: -1px -2px 17px 1px rgba(232, 238, 255, 1);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  transition-duration: 0.1s;
  transition-timing-function: linear;
}

#nav a:hover {
  background: rgba(66, 185, 131, 0.4);
}

#nav a.router-link-exact-active {
  background: #0faf87;
  color: white;
}
button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 30px 10px 0px 10px;
  font-weight: bold;
  transition: all 0.2s linear;
  box-shadow: 2px 2px 5px 2px rgba(77, 77, 77, 0.27);
  -webkit-box-shadow: 2px 2px 5px 2px rgba(77, 77, 77, 0.27);
  -moz-box-shadow: 2px 2px 5px 2px rgba(77, 77, 77, 0.27);
}
button:hover {
  transform: scale(1.1);
}
</style>
