import Vue from 'vue'
import Router from 'vue-router'
import LoginUser from "@/views/LoginUser.vue";
import RegisterUser from "@/views/RegisterUser.vue"
import Bookshelf from "@/views/Bookshelf.vue";
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
      path: "/registerUser",
      name: "RegisterUser",
      component: RegisterUser
    },
    {
      path: "/bookshelf",
      name: "Bookshelf",
      component: Bookshelf,
      props: true
    },
    {
      path: "/booksearch",
      name: "BookSearch",
      component: BookSearch,
      props: true
    },
    {
      path: "/bookinfo",
      name: "BookInfo",
      component: BookInfo,
      props: true
    }
  ]
});
