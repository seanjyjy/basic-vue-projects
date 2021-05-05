<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    Loading job details...
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      job: null,
    };
  },
  // popular way to fetch data. Just like when fetching in
  // useEffect!!!
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
