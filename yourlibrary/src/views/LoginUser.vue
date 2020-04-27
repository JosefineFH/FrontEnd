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
      const loginValues = {
        email: this.loginInfo.email,
        password: this.loginInfo.password
      };

      axios
        .get("http://localhost:3000/users ", loginValues, {
          withCredentials: true
        })
        .then(response => {
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



 <!-- login(e) {
      const loginValues = {
        email: this.email,
        password: this.password
      };
      axios
        .get("http://localhost:3000/register", loginValues)
        .then(response => {
          this.data = response.data;
          this.data.forEach(user => {
            if (this.email != "" && this.password != "") {
              if (user.email == this.email && user.password == this.password) {
                this.$router.replace({ name: "Bookshelf" });
                console.log(user);
              } else {
                console.log("The username and / or password is incorrect");
              }
            } else {
              this.errors.push("A username and password must be present.");
            }
            e.preventDefault();
          });
        })
        .catch(function(e) {
          console.log(e);
        });
    } -->