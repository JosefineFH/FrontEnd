<template>
  <div>
    <form @submit.prevent="login">
      <label>Email:</label>
      <input type="email" v-model="loginInfo.email" name="email" />

      <label>Password:</label>
      <input type="password" v-model="loginInfo.password" />

      <input class="button" type="submit" value="Login" />
    </form>

    <a>{{ errors }}</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loginInfo: {
        email: "",
        password: ""
      },
      errors: ""
    };
  },

  methods: {
    login() {

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
