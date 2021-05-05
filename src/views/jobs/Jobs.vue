<template>
  <h1>Job</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Job 1", id: 1, details: "this is job 1" },
        { title: "Job 2", id: 2, details: "this is job 2" },
        { title: "Job 3", id: 3, details: "this is job 3" },
      ],
    };
  },
};
</script>

<style>
.job h2 {
  background: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: rgb(107, 107, 107);
  transition: 0.3s ease-out;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
