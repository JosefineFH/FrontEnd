<template>
  <div>
    <header class="main-header">
      <h2>Search for your book</h2>
      <p v-if="showTotalItems">
        There is
        <span>{{totalItems}}</span> total books in your search
      </p>
      <form @submit.prevent="search">
        <input type="text" v-model="searchTerm" placeholder="søk" />
        <button type="submit">search</button>
      </form>
    </header>

    <section class="card">
      <BookCard v-for="book in searchResult.items" :key="book.id" :book="book" />
    </section>
  </div>
</template>
<script>
import axios from "axios";
import BookCard from "@/components/BookCard.vue";

export default {
  components: {
    BookCard
  },
  data() {
    return {
      searchTerm: "sarah j maas",
      searchResult: [],
      totalItems: "",
      showTotalItems: false
    };
  },

  methods: {
    search() {
      axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + this.searchTerm)
        .then(response => {
          this.searchResult = response.data;
          this.totalItems = response.data.totalItems;
          // console.log(this.searchResult);

          if(this.totalItems !== '' ){
            this.showTotalItems = true
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style>
.main-header {
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rm;
}
.main-header span {
  color: #7366ff;
}
h2 {
  font-size: 4rm;
  line-height: 1.2;
}
</style>