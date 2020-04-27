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

      <input class="button" type="submit" name="button" />
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
        password: ""
      }
    };
  },
  methods: {
    userRegister() {
      axios
        .post("http://localhost:3000/users", this.register)
        .then(response => {
          console.log("Your register data", response);
          // let token = response.data.token;
        });
    }
  }

  // methods: {
  //   userRegister() {
  //     // if input is emty cont send form... update form.

  //     const userParams = {
  //       username: this.register.username,
  //       email: this.register.email,
  //       password: this.register.password
  //     };

  //     axios
  //       .post("http://localhost:3000/users", userParams)
  //       .then(() => {
  //         this.$router.push({ name: "LoginUser" });
  //       })
  //       .catch(function(e) {
  //         console.log(e);
  //       });
  //   }
  // }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-areas:
    "icon input-field "
    "button button";
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
  column-fill: balance;
  border: none;
  width: 100px;
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