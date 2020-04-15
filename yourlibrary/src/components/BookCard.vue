<template>
  <router-link :to="{name: 'BookInfo', params: { id:book.volumeInfo.industryIdentifiers[1].identifier  }}">
    <div>
      <p>{{book.volumeInfo.title }}</p>
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
.bookCard {
  background-color: green;
}
</style>