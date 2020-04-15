<template>
  <div class="navbar">
    <h1>Test</h1>
    <router-link to="login" > Login </router-link>
        <router-link to="login" > Logout </router-link>

<router-link v-if="ifLogedIn" to="Books"> Books </router-link>
  </div>
</template>
<script>
export default {
  data(){
    return{
      ifLogedIn: true,
    }
  }
};
</script>
<style scoped>
.navbar {

  font-family: sans-serif;
  color: white;
  background-image: linear-gradient(to bottom right, #ff6cab, #7366ff);
    padding: 10px;
}
</style>