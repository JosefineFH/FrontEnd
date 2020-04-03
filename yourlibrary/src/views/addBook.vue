<template>
  <div>
    <h2>Add your books</h2>
<p> Ther is {{totalItems}} total books</p>
    <input type="text" v-model="search" placeholder="search" />
    {{books}}
    <div>
     <p v-for="book in filteredBooks" >

     </p>
    </div>
    <p>{{title}}</p>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "Sara J maas",
      books: [],
      totalItems: '',
      title: ''
    };
  },
  created() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.search)
      .then(response => {
        this.books.push(response.data.items[0].volumeInfo);
        this.totalItems = response.data.totalItems
        this.title = response.data.items[0].volumeInfo.title

        // console.log(response.data);
        console.log("Book: " + JSON.stringify(response.data.items[0].volumeInfo.title));
        // console.log(JSON.stringify(...this.books[0].id));
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  computed: {
    filteredBooks: function() {
 
    }
  }
};
</script>