<template>
  <div>
    <h1>Events Listing {{user.user.name}}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page</router-link
      >

      <template v-if="hasNextPage"> | </template>
    </template>

    <router-link
      v-if="hasNextPage"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
    >
      Next Page</router-link
    >
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
import store from '@/store/store'

// Moved the current page & action call outside the component
function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1
  store
    .dispatch('event/fetchEvents', {
      page: currentPage
    })
    .then(() => {
      //current page gets passed in as a prop, so we can print next page
      routeTo.params.page = currentPage
      next()
    })
}
export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },

  components: {
    EventCard
  },
  beforeRouteEnter(routeTo, reouterFrom, next) {
    //before we enter the route
    getPageEvents(routeTo, next)
  },

  //repit the same code as in beforeRouteEnter. Make a function.
  beforeRouteUpdate(routeTo, routeFrom, next) {
    //before we update the route.
    getPageEvents(routeTo, next)
  },
  computed: {
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage
    },
    ...mapState(['event', 'user'])
  }
}
</script>
