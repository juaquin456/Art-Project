<script setup lang="ts">
import Map from '@/components/Map.vue'
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

    if (scrollValue >= window.innerHeight) {
      if (delta < 0) {
        scrollValue += delta
        titleElement!.style.transform = `translate(-50%, -${scrollValue}px)`
        bgElement!.style.filter = `blur(10px)`;
      }
    }
    else if (scrollValue <= originalPosition) {
      if (delta > 0) {
        scrollValue += delta
        titleElement!.style.transform = `translate(-50%, -${scrollValue}px)`
      }
    }
    else {
      scrollValue += delta
      titleElement!.style.transform = `translate(-50%, -${scrollValue}px)`
      if (scrollValue >= window.innerHeight) {
        bgElement!.style.filter = `blur(0px)`;
      }
    }
  })
})

function autoScroll(e: MouseEvent) {
  const titleElement = document.getElementById("title-container");
  const bgElement = document.getElementById("bg");
  titleElement!.style.transform = `translate(-50%, -${window.innerHeight}px)`
  scrollValue = window.innerHeight;
  bgElement!.style.filter = `blur(0px)`;
}

</script>

<template>
  <div id="container">
    <div class="demo-wrap" id="bg">
      <img :src="regionBackground" class="demo-bg" alt="background">
      <div class="demo-content">
        <Map height="100vh" @current-region="changeBackground" />
      </div>
    </div>
    
    <div id="title-container">
      <h1 class="title">Amazonía</h1>
      <h1 class="title" style="font-size:7em;">al descubierto</h1>
      <p @click="autoScroll">Repositorio de artistas visuales indígenas de la amazonia peruana</p>

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

p {
  text-align: center;
  font-size: 1.5em;
  color: white;
  margin-bottom: 10px;
  font-family: "Sansita Swashed", system-ui;
  background-color: #172601;
  border-radius: 10px;
}

.title {
  font-size: 13em;
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
}
</style>
