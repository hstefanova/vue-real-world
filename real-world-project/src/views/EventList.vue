<template>
  <div>
    <div>This is Event List View</div>

    <h4>Events:</h4>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  data() {
    return {
      events: []
    }
  },
  components: {
    EventCard
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error =>
        console.log('There is an error with loading the file.' + error.response)
      )
  }
}
</script>

<style></style>
