<template>
  <h1>Job</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading jobs...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  // popular way to fetch data. Just like when fetching in
  // useEffect!!!
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => (this.jobs = data))
      .catch((err) => {
        // we will come here iff in real deployment as we are unable to run json-server first
        this.jobs = [
          { title: "Job 1", id: 1, details: "this is job 1" },
          { title: "Job 2", id: 2, details: "this is job 2" },
          { title: "Job 3", id: 3, details: "this is job 3" },
        ];
      });
  },
};
</script>

<style>
.job h2 {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #123456;
  transition: 0.3s ease-out;
  box-shadow: 1px 2px 5px 2px rgba(82, 82, 82, 0.1);
  -webkit-box-shadow: 1px 2px 5px 2px rgba(82, 82, 82, 0.1);
  -moz-box-shadow: 1px 2px 5px 2px rgba(82, 82, 82, 0.1);
}
.job h2:hover {
  background: rgb(243, 243, 243);
}
.job a {
  text-decoration: none;
}
@media screen and (max-width: 600px) {
  .job h2 {
    width: 80%;
  }
}
</style>
