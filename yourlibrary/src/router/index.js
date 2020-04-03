import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main.vue'
import Books from '@/views/yourbooks.vue'
import Login from '@/views/login.vue'
import AddBook from '@/views/AddBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/books",
      name: "Books",
      component: Books,
    },
    {
      path: "/add",
      name: "AddBook",
      component: AddBook,
    },
  ],
});
