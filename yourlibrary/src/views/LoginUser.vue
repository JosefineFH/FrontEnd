<template>
  <div>
    <form @submit.prevent="login">
      <label for="email"> Username: </label>
      <input type="email" v-model="email" name="email" />

      <label for="password"> Password: </label>
      <input type="password" v-model="password" />

      <input class="button" type="submit" value="Submit" />

      <div v-if="errors.length">
        <p v-for="error in errors" :key="error">{{error}}</p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      errors: [],
      email: "abc@test.com",
      password: "abc123"
    };
  },

  methods: {
    login: function(e) {
      console.log(this.email)
      console.log(this.password)
      // if (this.name && this.password) {
      //   axios
      // .post("http://localhost:3000/users")
      // .then(response => {
      //   console.log(response)
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });

      //   // this.$router.push({ name: "Bookshelf" });
      //   // return true;
      // }

      // this.errors = [];

      // if (!this.name) {
      //   this.errors.push("Name required.");
      // }
      // if (!this.password) {
      //   this.errors.push("password required.");
      // }

      // e.preventDefault();
    }
  }
};
</script>
<style scoped>
input {
  margin: 2px;
}
form {
  text-align: center;
  padding-top: 60px;
}
.button {
  border: none;
  width: 160px;
  padding: 5px;
  border-radius: 4px;
  color: white;
  background-image: linear-gradient(to bottom right, #ff6cab, #7366ff);
}

.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>