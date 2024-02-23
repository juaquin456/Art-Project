<script setup lang="ts">
import {ref} from 'vue'

const menuDisplayed = ref(false)


function showMenu() {
  const menu = document.querySelector('.menu') as HTMLElement
  const button = document.querySelector('.button-menu') as HTMLElement
  menu.classList.toggle('active')
  button.classList.toggle('active')
  menuDisplayed.value = !menuDisplayed.value
}
</script>

<template>
  <svg class="button-menu" @click="showMenu" width="800px" height="800px" viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#000000" fill-rule="evenodd" v-if="!menuDisplayed"
      d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
    <path fill="#000000" fill-rule="evenodd" v-else
      d="M16.293 17.707a1 1 0 001.414-1.414L11.414 10l6.293-6.293a1 1 0 00-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293z" />
  </svg>

  <div class="menu">
    <ul>
      <li><router-link @click="()=>{showMenu()}" to="/" class="item-menu">Home</router-link></li>
      <li><router-link @click="()=>{showMenu()}" to="/artistas" class="item-menu">Artistas</router-link></li>
      <li><router-link @click="()=>{showMenu()}" to="/nosotros" class="item-menu">Nosotros</router-link></li>
    </ul>
  </div>
  <RouterView />
</template>

<style scoped>
.button-menu {
  width: 50px;
  height: 50px;
  padding: 10px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 101;
  cursor: pointer;
  vertical-align: middle;
  transition: all 0.3s;
  background-color: #D2D904;
  border-radius: 10%;

  &:hover {
    transform: scale(1.1);
    background-color: none;
  }
}


.menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 30000;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #D2D904;

  &.active {
    display: block;
  }
}


.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 20px;

}

.item-menu {
  display: block;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  color: #172601;
  text-decoration: none;

  &:hover {
    background-color: #172601;
    color: #D2D904;
  }
}
</style>
