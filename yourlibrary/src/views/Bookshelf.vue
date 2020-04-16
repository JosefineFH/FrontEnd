<template>
  <div>
    <p>Welcome</p>
    <button @click="search()">search for book</button>
  </div>
</template>

<script>
export default {
  methods: {
    search(){
      this.$router.push({name: "BookSearch"});
    }
  }
}
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