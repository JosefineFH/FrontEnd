<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">Name:</label>
      <input v-model="name" type="text" name="name" value />

      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email" value />

      <label for="password">Password:</label>
      <input v-model="password" type="password" name value />

      <button type="submit" name="button">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "Mr Test",
      email: "test@test.com",
      password: "abc123"
    };
  },

  methods: {
    register() {
      axios
        .post("http://localhost:3000/register", {
          username: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "LoginUser" });
          console.log(response);
        })
        .catch(function(e) {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
</style>