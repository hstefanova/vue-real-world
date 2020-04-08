<template>
  <div>
    <div>All events for {{ user.user.name }}</div>
    <p>Events Total: {{ eventsTotal }}</p>
    <h4>Events:</h4>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />

    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev">Prev Page</router-link>
    </template>

    <router-link
      v-if="hasNextPage"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="prev"
    >Next Page</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.perPage = 3 // Setting perPage here and not in data means it won't be reactive.
    // We don't need it to be reactive, and this way our component has access to it.

    this.$store.dispatch('fetchEvents', {
      perPage: this.perPage,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      // on current page * visible items
      return this.event.eventsTotal > this.page * this.perPage
    },
    ...mapState(['event', 'user'])
  }
}
</script>

<style></style>
