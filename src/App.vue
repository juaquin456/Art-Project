<script setup lang="ts">

function showMenu() {
  const menu = document.querySelector('.menu') as HTMLElement
  menu.classList.toggle('active')
}
</script>

<template>
  <svg class="button-menu" @click="showMenu" width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path fill="#172601" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
</svg>
  <div class="menu">
    <router-link to="/" class="item-menu">Home</router-link>
    <router-link to="/about" class="item-menu">About</router-link>
    <router-link to="/contact" class="item-menu">Contact</router-link>
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
  z-index: 100;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #D2D904;
  border-radius: 10%;
  &:hover {
    transform: scale(1.1);
  }
}

.menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #D2D904;
  z-index: 99;
  display: none;
  transition: all 0.3s;
  transform: translateX(100%);
  opacity: 0.9;
  &.active {
    display: block;
    transform: translateX(0);
  }
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
  /* center items vertically */
  display: flex;
  align-items: center;
  justify-content: center;
  /* center items horizontally */
  text-align: center;
  /* remove default list style */
  list-style: none;
}

</style>
