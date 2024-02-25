<script setup lang="ts">
import Map from '../components/Map.vue'
import { onMounted, ref } from 'vue'

import loretoUrl from '@/assets/loreto.jpg'
import ucayaliUrl from '@/assets/ucayali.jpg'
import sanMartinUrl from '@/assets/san_martin.jpg'
import amazonasUrl from '@/assets/amazonas.jpg'
import madreDeDiosUrl from '@/assets/madre_dios.jpg'

const regionBackground = ref<string>(loretoUrl)
let scrollValue: number;

const regionsBackground: { [key: string]: string } = {
  "Loreto": loretoUrl,
  "Ucayali": ucayaliUrl,
  "San Martín": sanMartinUrl,
  "Amazonas": amazonasUrl,
  "Madre de Dios": madreDeDiosUrl,
}

function changeBackground(region: string) {
  regionBackground.value = regionsBackground[region]
}



onMounted(() => {
  console.log('mounted')
  const bgElement = document.getElementById("bg");
  const titleElement = document.getElementById("title-container");
  const originalPosition = document.getElementById("title-container")!.getBoundingClientRect().top
  scrollValue = originalPosition;
  document.addEventListener("wheel", function(e: Event) {

    const delta = (e as WheelEvent).deltaY
    const nextScrollValue = scrollValue + delta
    if (nextScrollValue >= window.innerHeight) {
      autoScroll()
      scrollValue = window.innerHeight;
    }
    else if (nextScrollValue <= originalPosition) {
      titleElement!.style.transform = `translate(-50%, -50%)`
      bgElement!.style.filter = `blur(10px)`;
      scrollValue = originalPosition;
    }
    else{
      titleElement!.style.transform = `translate(-50%, -${nextScrollValue}px)`
      bgElement!.style.filter = `blur(10px)`;
      scrollValue = nextScrollValue;
    }
  })
})

function autoScroll() {
  const titleElement = document.getElementById("title-container");
  const bgElement = document.getElementById("bg");
  titleElement!.style.transform = `translate(-50%, -${window.innerHeight+titleElement!.getBoundingClientRect().height}px)`
  scrollValue = window.innerHeight;
  bgElement!.style.filter = `blur(0px)`;
}

</script>

<template>
  <div id="container">
    <div class="demo-wrap" id="bg">
      <img :src="regionBackground" class="absolute top-0 left-0 min-h-screen blur-md max-w-none" alt="background">
      <div class="demo-content">
        <Map height="100vh" @current-region="changeBackground" />
      </div>
    </div>
    
    <div id="title-container">
      <h1 class="title">AMAZONÍA</h1>
      <h1 class="title" style="font-size:8vw;">al descubierto</h1>
      <button @click="autoScroll" class=" text-xs sm:text-base md:text-2xl bg-green-dark text-white rounded-lg px-4 py-3 hover:font-bold">Repositorio de artistas visuales indígenas de la Amazonía peruana</button>
    </div>
  </div>
</template>

<style scoped>
#container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* #descriptionButton {
  font-size: 1.6em;
  background-color: #172601;
  border-radius: 10px;
  padding: 20px 30px;
}

#descriptionButton:hover {
  cursor: pointer;
  outline-color: white;
} */

.title {
  font-size: 15vw;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  color: #3E5902; 
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
    1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  will-change: color;
  transition: color 300ms;
  font-family: "Protest Riot", sans-serif;
}

.demo-wrap {
  width: 100%;
            height: 100%;
            filter: blur(5px);
}

#title-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.5s ease-in-out;
}

.demo-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
