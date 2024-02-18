<script setup lang="ts">
import Map from './components/Map.vue'



</script>

<template>
  <h1 class="title">ART PROJECT</h1>
  <Map style="height: 100vh; width: 100vh;"/>
</template>

<style scoped>
.title {
  display: absolute;
  font-size: 3em;
  text-align: center;
  margin-top: 0;
  color: #646cff;
  will-change: color;
  transition: color 300ms;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
