<template>
  <router-link
    :to="{name: 'BookInfo', params: { id:book.volumeInfo.industryIdentifiers[0].identifier }}"
  >
    <div class="card">
      <div class="text">
        <h3>{{book.volumeInfo.title }}</h3>
        <h4>{{book.volumeInfo.authors[0]}}</h4>
        <p>{{book.volumeInfo.description}}</p>
      </div>

      <img
        :src="'http://books.google.com/books/content?id=' + book.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    book: Object
  }
};
</script>

<style scoped>
.card {
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  background: #f1f1f1;
  margin: 2rem 8rem 0rem 8rem;
  padding: 1rem;
}
/* unvisited link */
a:link {
  color: red;
  text-decoration: none;
  cursor: pointer;
}

/* visited link */
a:visited {
  color: black;
}
/* mouse over link */
p:hover {
  color: hotpink;
}

.text h3 {
  margin-bottom: 2rem;
}
.card img {
  margin: auto;
  height: 350px;
}
</style>