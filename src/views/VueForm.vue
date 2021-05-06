<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <!-- v-model creates a two way data binding -->
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="!!passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="web developer">Web Developer</option>
      <option value="mobile developer">Mobile Developer</option>
      <option value="ai developer">AI Developer</option>
      <option value="db developer">Database Developer</option>
      <option value="no job">Jobless</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkills" @keydown="addSkills" ref="skills" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept Terms and Conditions</label>
    </div>
    <div class="submit">
      <button>Create account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkills(e) {
      if (e.key === "Enter" && this.tempSkills) {
        if (!this.skills.includes(this.tempSkills)) {
          this.skills.push(this.tempSkills);
        }
        this.tempSkills = "";
        this.$refs["skills"].value = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => item !== skill);
    },
    handleSubmit() {
      this.passwordError =
        this.password.length > 5 ? "" : "Password must be at least length of 5";
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 2px rgba(82, 82, 82, 0.23);
  -webkit-box-shadow: 1px 2px 5px 2px rgba(82, 82, 82, 0.23);
  -moz-box-shadow: 1px 2px 5px 2px rgba(82, 82, 82, 0.23);
}
@media screen and (max-width: 520px) {
  form {
    width: 80%;
  }
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.68em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input:focus,
select:focus {
  outline: none;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
  filter: hue-rotate(30deg);
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: rgb(233, 233, 233);
  border-radius: 8px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: rgb(139, 139, 139);
  cursor: pointer;
}
.submit button {
  background: #0faf87;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
}
</style>
