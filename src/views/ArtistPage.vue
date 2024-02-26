<script setup lang="ts"> 
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import artistData from '../assets/artistData.json';

const route = useRoute();
const artistsData = ref<DepartmentData>(artistData)
const data = ref<ArtistData | null>(null)

const departamento = route.params.departamento as string;
const artista = route.params.artista as string;

interface ArtistData {
  name: string;
  biography: string;
  image: string;
  works: { title: string; image: string }[];
}

interface DepartmentData {
  [key: string]: {
    [key: string]: ArtistData;
  };
}


if (artistsData.value[departamento] && artistsData.value[departamento][artista]) {
  data.value = artistsData.value[departamento][artista];
} else {
  console.error('No se encontraron datos para el departamento o artista especificado');
}
</script>

<template>
  <h1 class=" pt-14 pb-8 font-black">
    {{ data?.name }}
  </h1>
  <div class=" flex flex-col-reverse md:flex-row justify-center align-middle items-center">
    <p class=" w-3/4 md:w-1/2 text-justify px-8 py-9">
      {{ data?.biography }}  
    </p>
    <img class = "img" :src="data?.image">
  </div>

  <h2>Sus obras artísticas</h2>
  
  <div class="carousel">
    <el-carousel :interval="4000" type="card" height="400px" class=" max-w-5xl w-full" autoplay>
      <el-carousel-item v-for="work in data?.works" :key="work.title">
        <img :src="work.image" :alt="work.image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped>
h2 {
  font-size: 1.5em;
  padding-top: 20px;
  padding-bottom: 10px;
}


.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

.img {
  width: 300px;
  border-radius: 8px;
}

.carousel {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 50px;
}

.el-carousel__item img {
  height: 100%;
  border-radius: 8px;
}

.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
  border-radius: 8px;
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #d3dce6; */
  border-radius: 8px;
  
}
</style>
