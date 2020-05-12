import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import EventCreate from './views/EventCreate'
import NProgress from 'nprogress'
import store from '@/store/store'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: true
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        // before this route is loaded
        store
          .dispatch('event/fetchEvent', routeTo.params.id)
          .then(event => {
            routeTo.params.event = event // <--- Set the event we retrieved
            next()
          })
          .catch(() => next({ name: '404', params: { resource: 'event' } }))
      }
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      prop: true // we can receive the param as a prop
    },
    {
      //The new catch call router
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routerTo, routerFrom, next) => {
  //start the progress bar.
  NProgress.start()
  next()
})

router.afterEach(() => {
  // complete the animation of the router progress bar.
  NProgress.done()
})

export default router
