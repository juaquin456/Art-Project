<script setup lang="ts">
import Map from './components/Map.vue'
import {ref} from 'vue'

const regionBackground = ref<string>('https://www.peru.travel/contenido/destino/imagen/es/9/1.2/principal/loreto.jpg')

const regionsBackground: {[key: string]: string} = {
  "Loreto": 'https://www.peru.travel/contenido/destino/imagen/es/9/1.2/principal/loreto.jpg',
  "Ucayali": 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/10/16/000718929W.jpg',
  "San Martín": 'https://www.peru.travel/Contenido/Evento/Imagen/es/443/1.1/Evento/San%20Mart%C3%ADn%20Portada.jpg',
  "Amazonas": 'https://ultimatejourneys.pe/wp-content/uploads/2016/03/Fotos-pintura-amazonica-1-1500x750.jpg',
  "Madre de Dios": 'https://www.peru.travel/contenido/destino/imagen/es/10/1.1/principal/tambopata.jpg',
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
  background: -webkit-linear-gradient(to right, #a7d5f2, #3E5902, #D2D904);
  background: linear-gradient(to right, #a7d5f291, #3E59029d, #D2D9048c), url("./assets/bg.jpg") center/cover no-repeat;
  height: 100vh; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-direction: column;
}

p {
  text-align: center;
  font-size: 1.5em;
  color: white;
  margin-bottom: 50px;
  font-family: "Sansita Swashed", system-ui;
}
.title {
  font-size: 10em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;
  color: white;
  will-change: color;
  transition: color 300ms;
  font-family: "Uncial Antiqua";
}

.demo-bg {
  opacity: 0.6;
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  min-height: 100vh;
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
