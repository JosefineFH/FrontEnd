<template>
  <div>
    <form @submit.prevent="checkForm">

      <input type="text" v-model="name" name="name" />
      <br />
      <input type="password" v-model="password" />
      <br />
      <input class="button" type="submit" value="Submit" />
            
    <div v-if="errors.length">
          <p v-for="error in errors" :key="error">
              {{error}}
              </p>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      name: "abc",
      password: "abc123"
    };
  },

  methods: {
    checkForm: function(e) {
      if (this.name && this.password) {
        this.$router.push({name: "Books"});
return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.password) {
        this.errors.push("password required.");
      }

      e.preventDefault();
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
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>