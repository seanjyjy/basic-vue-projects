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
      .catch((err) => {
        // we will come here iff in real deployment as we are unable to run json-server first
        let jobs = [
          { title: "Job 1", id: 1, details: "this is job 1" },
          { title: "Job 2", id: 2, details: "this is job 2" },
          { title: "Job 3", id: 3, details: "this is job 3" },
        ];
        this.job = jobs[this.id - 1];
      });
  },
};
</script>

<style></style>
