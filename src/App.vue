<script setup lang="ts">
import Map from './components/Map.vue'
import {ref} from 'vue'

const regionBackground = ref<string>('https://www.peru.travel/contenido/destino/imagen/es/9/1.2/principal/loreto.jpg')

const regionsBackground: {[key: string]: string} = {
  "Loreto": 'https://www.peru.travel/contenido/destino/imagen/es/9/1.2/principal/loreto.jpg',
  "Ucayali": 'https://www.peru.travel/contenido/destino/imagen/es/9/1.2/principal/ucayali.jpg',
  "San Martín": 'https://www.peru.travel/contenido/destino/imagen/es/9/1.2/principal/san-martin.jpg',
  "Amazonas": 'https://ultimatejourneys.pe/wp-content/uploads/2016/03/Fotos-pintura-amazonica-1-1500x750.jpg',
  "Madre de Dios": 'https://www.peru.travel/contenido/destino/imagen/es/9/1.2/principal/madre-de-dios.jpg',
}

function changeBackground(region: string) {
  regionBackground.value = regionsBackground[region]
}


</script>

<template>
 <div class="container">
   <h1 class="title">AmazonArt</h1>
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
  height: 100vh; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-direction: column;
}
p {
  text-align: center;
  font-size: 1.5em;
  color: #333;
  margin-bottom: 50px;
}
.title {
  font-size: 10em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;
  color: black;
  will-change: color;
  transition: color 300ms;
}

.demo-bg {
  opacity: 0.6;
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  min-height: 100vh;
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
