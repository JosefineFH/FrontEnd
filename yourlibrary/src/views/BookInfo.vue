<template>
  <div>
    <router-link to="booksearch">back</router-link>
    <p>Book Info</p>

    <p>{{book.title}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      book: {}
    };
  },

  created() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.id)
      .then(response => {
        this.book = response.data.items[0].volumeInfo;
        // console.log(response.data.items[0].volumeInfo)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
</style>