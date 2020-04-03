<template>
    <div>
        <h1> Bøker </h1>
        <ul>
            <li v-for="post of posts" :key="post.id">
                {{post.title}}
            </li></ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: []
        }
    },

    created() {
        axios
        .get('http://localhost:3000/posts')
        .then(response => {
            this.posts = response.data
            console.log(response.data);
        })
        .catch (function (error) {
            console.log(error);
        })
    }
}
</script>

<style>
    
</style>