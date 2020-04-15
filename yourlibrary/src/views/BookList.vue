<template>
  <div>
    <h2>Add your books</h2>
<p> Ther is {{totalItems}} total books</p>

<form @submit.prevent="search">
    <input type="text" v-model="searchTerm" placeholder="søk" />
    <button type="submit">search</button>
</form>
<div>
  <BookCard v-for="book in searchResult.items" :key="book.id" :book="book"/>
</div>

  </div>
</template>
<script>
import axios from "axios"
import BookCard from '@/components/BookCard.vue'

export default {
  components: {
    BookCard
  },
  data() {
    return {
      searchTerm: 'sarah j maas',
      searchResult: [],
      totalItems: ''
    };
  },

  methods: {
    search() {
       axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.searchTerm)
      .then(response => {
        this.searchResult = response.data
        this.totalItems = response.data.totalItems
      })
      .catch(function(error) {
        console.log(error);
      });
    },
  }

  
};
</script>