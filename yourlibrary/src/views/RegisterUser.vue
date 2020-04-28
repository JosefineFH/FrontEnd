<template>
  <div>
    <h5>Create Account</h5>
    <form class="container" @submit.prevent="userRegister">
      <i class="far fa-user icon"></i>
      <input class="input-field" v-model="register.username" type="text" placeholder="Username" />

      <i class="far fa-envelope icon"></i>
      <input class="input-field" v-model="register.email" type="email" placeholder="Email" />

      <i class="fas fa-unlock icon"></i>
      <input class="input-field" v-model="register.password" type="password" placeholder="Password" />

      <i class="fas fa-unlock icon"></i>
      <input
        class="input-field"
        v-model="register.password2"
        type="password"
        placeholder="Password"
      />

      <input class="button" type="submit" name="button" />
      <br>
    
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      register: {
        username: "",
        email: "",
    };
  },
  methods: {
    userRegister() {
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-areas:
    "icon input-field "
  grid-gap: 10px;
  padding-top: 15%;
  justify-content: center;
}

.icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  font-size: 25px;
  color: #ff6cab;
}

input {
  width: 50vw;
}

.button {
  border: none;
  border-radius: 4px;
  color: white;
  background-image: linear-gradient(to bottom right, #ff6cab, #7366ff);
}

.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>