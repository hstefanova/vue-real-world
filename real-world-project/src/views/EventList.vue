<template>
  <div>
    <div>This is Event List View</div>

    <h4>Events:</h4>
    <EventCard />
    <EventCard />
    <EventCard />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard
  }
}
</script>

<style></style>
