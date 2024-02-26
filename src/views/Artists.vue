<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import artistas from '../assets/artists.json'

const route = useRoute()
const depto = route.params.departamento as string

const arts = ref(artistas)
const regionArtist = ref(artistas[depto as keyof typeof artistas] as { displayName: string; artistas: { name: string; description: string; image: string; page: string;}[] })

onBeforeRouteUpdate((to, _, next) => {
  const depto = to.params.departamento as string
regionArtist.value = arts.value[depto as keyof typeof arts.value] as { displayName: string; artistas: { name: string; description: string; image: string; page: string; }[] };
  next()
})

</script>

<template>
	<h1 class="pt-14 pb-2 font-black">{{ regionArtist.displayName}}</h1>
  <div class="content">
  	<ul class="team">
  		<li class="member co-funder" v-for="artist in regionArtist.artistas" :key="artist.name">
  			<div class="thumb"><img :src="artist.image"></div>
  			<div class="description">
  				<h3>{{ artist.name }}</h3>
  				<p>{{ artist.description }}<br><router-link :to="artist.page">Explorar</router-link></p>
  			</div>
  		</li>
  	</ul>
  </div>
</template>
<style>
:root {
	--yellow: #D2D904;
	--dark: #172601;
	--deg: -86deg;
	--trans: all 0.4s ease 0s;
}
</style>
<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");



.content {
	width: 90vmin;
}
h2 {
	text-align: center;
}

.team {
	padding: 2em 0 2em 2.5em;
	margin: 0;
}

.member {
	margin: 1.5em 0 0.5em;
	padding: 0.73em;
	background: linear-gradient(
		83deg,
		var(--yellow) 0 97%,
		#fff0 calc(97% + 1px) 100%
	);
	position: relative;
	list-style: none;
	display: inline-block;
	transform: scale(0.85);
	transition: var(--trans);
}

.member:nth-of-type(even) {
	text-align: right;
	background: linear-gradient(
		-83deg,
		var(--yellow) 0 97%,
		#fff0 calc(97% + 1px) 100%
	);
}

.thumb {
	width: 13vmin;
	height: 13vmin;
	float: left;
	margin-right: 1.25em;
	background: linear-gradient(
		var(--deg),
		var(--dark) 0 70%,
		var(--yellow) 0% 100%
	);
	transform: rotate(-4deg);
	transition: var(--trans);
	border-radius: 0.25em;
	overflow: hidden;
	margin-left: -3em;
	padding: 0.5em;
}

.member:nth-of-type(even) .thumb {
	--deg: 86deg;
	float: right;
	margin-left: 2em;
	margin-right: -3em;
	transform: rotate(4deg);
}

.thumb img {
	width: 100%;
	height: 100%;
	border-radius: 0.25em;
	filter: grayscale(1);
	background: var(--dark);
}

.member:hover {
	transform: scale(1);
	transition: var(--trans);
	filter: drop-shadow(0px 20px 10px #0008);
}

.member:hover .thumb {
	padding: 0.1em;
	transition: var(--trans);
	transform: rotate(-1deg);
	--deg: -89deg;
}

.member:nth-of-type(even):hover .thumb {
	--deg: 91deg;
}

.member:hover .thumb img {
	filter: none;
	transition: var(--trans);
}

.description {
	padding-top: 1vmin;
}

.description p {
	padding: 0 2em;
	margin-bottom: 1em;
  color: black;
}

h3 {
	background: var(--dark);
	display: inline;
	transform: rotate(-2deg);
	position: absolute;
	margin: 0;
	margin-top: -2.25em;
	left: 9vmin;
	padding: 0.5em 0.75em;
	color: var(--yellow);
	border-radius: 0.25em;
	font-size: 1.35em;
	transform-origin: left bottom;
  /*color: #A7D5F2;*/


}

.member:nth-of-type(even) h3 {
	left: inherit;
	right: 9vmin;
	transform: rotate(2deg);
	transform-origin: right bottom;
}

.member:hover h3 {
	transition: var(--trans);
	transform: rotate(0deg);
}

.co-funder:after {
	content: "Pintor";
	font-size: 0.75em;
	position: absolute;
	top: -1.5em;
	background: var(--yellow);
	right: 4em;
	transform: rotate(3deg);
	padding: 0.35em 0.75em 0.5em;
	border-radius: 0.25em;
	color: var(--dark);
	font-weight: bold;
}

.co-funder:nth-of-type(even):after {
	right: inherit;
	left: 4em;
	transform: rotate(-3deg);
}

.description p a {
	display: inline-block;
	margin: 0.5em 0 0 0;
	background: var(--dark);
	color: var(--yellow);
	padding: 0.1em 0.5em 0.35em;
	border-radius: 0.5em;
	text-decoration: none;
	transition: var(--trans);
}
.description p a:hover {
	transition: var(--trans);
	color: var(--dark);
	background: var(--yellow);
	font-weight: bold;
}

.description p a img {
	float: left;
	width: 22px;
	filter: invert(1);
	border-radius: 0.15em;
	padding: 2px;
	background: #fff;
	margin-right: 2px;
}

</style>