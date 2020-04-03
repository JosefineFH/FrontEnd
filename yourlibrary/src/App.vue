<template>
  <div id="app">
    <navbar/>
    <div class="body">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
* {
  margin: 0;
}
.body {
  margin: 20px;
}
</style>
