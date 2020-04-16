import Vue from 'vue'
import Router from 'vue-router'
import Bookshelf from "@/views/Bookshelf.vue";
import LoginUser from "@/views/LoginUser.vue";
import BookSearch from "@/views/BookSearch";
import BookInfo from '@/views/BookInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "LoginUser",
      component: LoginUser
    },
    {
      path: "/bookshelf",
      name: "Bookshelf",
      component: Bookshelf
    },
    {
      path: "/booksearch",
      name: "BookSearch",
      component: BookSearch
    },
    {
      path: "/bookinfo",
      name: "BookInfo",
      component: BookInfo,
      props: true
    }
  ]
});
