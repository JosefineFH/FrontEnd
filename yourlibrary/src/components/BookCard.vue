<template>
  <router-link :to="{name: 'BookInfo', params: { id:book.volumeInfo.industryIdentifiers[0].identifier  }}">
    <div class="card">
      <h3>{{book.volumeInfo.title }}</h3>
 <img :src="'http://books.google.com/books/content?id=' + book.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'">
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

.card h3 {
        margin-bottom: 2rem;
}
.card img {
    height: 300px;
}

</style>