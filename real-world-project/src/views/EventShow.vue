<template>
  <div>
    <h1>Showing event #{{ id }}</h1>

    <h2>Event title</h2>
    <span>Event Subtitle</span>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      ratione minus debitis harum laborum similique alias deserunt aperiam nisi
      cupiditate?
    </p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {}
  }
}
</script>

<style></style>
