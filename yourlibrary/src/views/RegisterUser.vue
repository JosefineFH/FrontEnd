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

<p v-if="hide" class="notification">{{this.notification}}</p>

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
        password: "",
        password2: ""
      },
      notification: [],
      hide: false
    };
  },
  methods: {
    userRegister() {
      const userInfo = this.register;
      
      if ((userInfo.username, userInfo.email, userInfo.password, userInfo.password2 === "")) {
        console.log("info missing");
        this.hide = true
        this.notification = 'User info missing'
      } else {
        if (userInfo.password === userInfo.password2) {
          axios
            .post("http://localhost:3000/register", userInfo)
            .then(response => {
              console.log("Your register data", response.data.email);
            });
          console.log("Register is done");
        }
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-areas:
    "icon input-field "
    "icon input-field "
    "icon input-field "
    "icon input-field "
    "empty button";
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
  margin-left: auto;
  grid-area: button;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  color: white;
  background-image: linear-gradient(to bottom right, #ff6cab, #7366ff);
}

.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.notification{
  padding-top: 30px;
  text-align: center;
}
</style>