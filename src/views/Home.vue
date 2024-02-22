<script setup lang="ts">
import Map from '@/components/Map.vue'
import {ref} from 'vue'

import loretoUrl from '@/assets/loreto.jpg'
import ucayaliUrl from '@/assets/ucayali.jpg'
import sanMartinUrl from '@/assets/san_martin.jpg'
import amazonasUrl from '@/assets/amazonas.jpg'
import madreDeDiosUrl from '@/assets/madre_dios.jpg'

const regionBackground = ref<string>(loretoUrl)

const regionsBackground: {[key: string]: string} = {
  "Loreto": loretoUrl,
  "Ucayali": ucayaliUrl,
  "San Martín": sanMartinUrl,
  "Amazonas": amazonasUrl,
  "Madre de Dios": madreDeDiosUrl,
}

function changeBackground(region: string) {
  regionBackground.value = regionsBackground[region]
}


</script>

<template>
 <div class="container">
   <h1 class="title">Amazonía</h1> <h1 class="title" style="font-size:7em;">al descubierto</h1>
   <p>¡Ven a conocer a artistas visuales indígenas de nuestra amazonía peruana!</p>
  </div>
  
  <div class="demo-wrap">
    <img
      :src="regionBackground"
      class="demo-bg"
      alt="background"
    >
    <div class="demo-content">
    <Map height="100vh" @current-region="changeBackground"/>
    </div>
  </div>

</template>

<style scoped>
.container {
  background: -webkit-linear-gradient(to right, #a7d5f2, #3E5902, #D2D904);
  background: linear-gradient(to right, #a7d5f291, #3E59029d, #D2D9048c), url("@/assets/bg.jpg") center/cover no-repeat;
  height: 100vh; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-direction: column;
}

p {
  text-align: center;
  font-size: 1.5em;
  color: black;
  margin-bottom: 10px;
  font-family: "Sansita Swashed", system-ui;
  background-color: rgb(175, 245, 118);
  border-radius: 10px;
}
.title {
  font-size: 13em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  color: rgb(55, 161, 23);
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  will-change: color;
  transition: color 300ms;
  font-family: "Protest Riot", sans-serif;
}

.demo-bg {
  opacity: 0.8;
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  min-width: 100vw;
  filter: blur(5px);
}

.demo-wrap {
  overflow: hidden;
  position: relative;
  width: 100vw;
}


.demo-content {
  position: relative;
}

</style>
