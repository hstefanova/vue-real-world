<template>
  <div>
    <h1>Create Event, {{ user.name }} with id: {{ user.id }}</h1>

    <p>There are {{ catLengh }} categories here:</p>
    <p>There are still {{ activeTodos }} to be done.</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  //access state properties
  computed: {
    catLengh() {
      return this.$store.getters.catLength
    },
    activeTodos() {
      return this.$store.getters.activeTodos
    },
    ...mapState(['user', 'categories'])
  }
}
</script>

<style></style>
