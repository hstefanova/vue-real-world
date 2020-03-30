<template>
  <div>
    <h1>Create Event, {{ user.name }} with id: {{ user.id }}</h1>

    <p>There are {{ catLengh }} categories here:</p>
    <p>There are still {{ activeTodos }} to be done.</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>

    <p>Test getEventById getter: {{ getEventById(2) }}</p>

    <!-- dynamic mutation -->
    <input type="number" v-model.number="incrementStep" />
    <button @click="incrementCounter">Increment Counter</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      incrementStep: 10
    }
  },
  methods: {
    incrementCounter() {
      // this.$store.commit('INCREMENT_COUNTER', this.incrementStep)
      this.$store.dispatch('updateCount', this.incrementStep)
    }
  },
  //access state properties
  computed: {
    ...mapGetters(['catLength', 'activeTodos', 'getEventById']),
    ...mapState(['user', 'categories', 'counter'])
  }
}
</script>

<style></style>
