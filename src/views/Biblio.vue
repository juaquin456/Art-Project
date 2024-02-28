<script setup lang="ts">
import { onMounted } from 'vue';

interface BibliografiaItem {
  autor: string;
  año: string;
  titulo: string;
  fuente: string;
  enlace: string;
}

const bibliografia: BibliografiaItem[] = [
  {
    autor: 'Amelia Weiss',
    año: 's. f.',
    titulo: 'Información, biografía, archivo, historia.',
    fuente: 'WIKIDAT',
    enlace: 'https://es.wikidat.com/info/amelia-weiss'
  },
  {
    autor: 'Bendayán, C.',
    año: '2021',
    titulo: 'Santiago Yahuarcani Nereyda López. El lugar de los espíritus.',
    fuente: 'Icpna Cultural',
    enlace: 'https://cultural.icpna.edu.pe/portfolio_page/santiago-yahuarcani-nereyda-lopez-el-lugar-de-los-espiritus/'
  },
  {
    autor: 'Comando Plath',
    año: '2021',
    titulo: 'Biografía Olinda Silvano Inuma.',
    fuente: '',
    enlace: 'https://comandoplath.com/biografia-olinda-silvano-inuma/'
  },
  {
    autor: 'Dimas Paredes | CCCB',
    año: '2021',
    titulo: '',
    fuente: 'Centre de Cultura Contempóranea de Barcelona',
    enlace: 'https://www.cccb.org/es/participantes/ficha/dimas-paredes/236103'
  },
  {
    autor: 'Friberg, R.',
    año: '2015',
    titulo: 'Gino Ceccarelli.',
    fuente: 'Anturio Gallery Arte Amazonico',
    enlace: 'https://anturiongallery.com/gino-ceccarelli-bardales/'
  },
  {
    autor: 'Harry Pinedo Valera',
    año: '2022',
    titulo: 'Ruraq Maqui, Nuestra herencia hecha a mano.',
    fuente: '',
    enlace: 'https://ruraqmaki.pe/noticias/harry-pinedo-valera'
  },
  {
    autor: 'Magazine Designer',
    año: '2021',
    titulo: 'Harry Pinedo / ININ METSA . Pertenece al pueblo Shipibo de Ucayali en la Amazonía de Perú.',
    fuente: 'DESIGN YOUR LUXURY LIFESTYLE',
    enlace: 'https://thedesigner.se/harry-pinedo-inin-metsa-pertenece-al-pueblo-shipibo-de-ucayali-en-la-amazonia-de-peru/'
  },
  {
    autor: 'Mecenas',
    año: 's.f.',
    titulo: 'J. Asunción Arteaga.',
    fuente: '',
    enlace: 'https://www.cayomecenas.net/mecenas2680.htm'
  },
  {
    autor: 'Mecenas',
    año: 's.f.',
    titulo: 'Jorge Luis Tenazoa.',
    fuente: '',
    enlace: 'https://www.cayomecenas.net/mecenas3138.htm'
  },
  {
    autor: 'Lima Puzzle',
    año: '2022',
    titulo: 'Roldán Pinedo - Lima Puzzle.',
    fuente: '',
    enlace: 'https://limapuzzle.com/artista/roldan-pinedo/'
  },
  {
    autor: 'Orbezo, Y., & Orbezo, Y.',
    año: '2024',
    titulo: 'Artista amazónico: “La región San Martín está en el ojo del mundo por su arte”.',
    fuente: 'Inforegión',
    enlace: 'https://inforegion.pe/artista-amazonico-la-region-san-martin-esta-en-el-ojo-del-mundo-por-su-arte/'
  },
  {
    autor: 'Quiroz, D.',
    año: '2022',
    titulo: 'Rember Yahuarcani: “Ha habido una gran apertura al arte indígena, pero el comercio de las obras es totalmente injusto”.',
    fuente: 'El Comercio',
    enlace: 'https://elcomercio.pe/luces/arte/rember-yahuarcani-ha-habido-una-gran-apertura-al-arte-indigena-pero-el-comercio-de-las-obras-es-totalmente-injusto-nuio-noticia/'
  },
  {
    autor: 'Ramirez, M.',
    año: '2022',
    titulo: 'Rember Yahuarcani, el artista visual peruano que busca reivindicar el arte indígena.',
    fuente: 'Forbes Perú',
    enlace: 'https://forbes.pe/forbes-life/2022-11-25/rember-yuhuarcani-el-artista-visual-peruano-que-busca-reivindicar-el-arte-indigena'
  },
  {
    autor: 'Riesco, D.',
    año: 's.f.',
    titulo: 'Bio. Portafolio | DIANA RIESCO-LIND',
    fuente: '',
    enlace: 'http://dianariescolind.com/sobre-mi'
  },
  {
    autor: 'Rimay Cultural',
    año: '2022',
    titulo: 'Publicaciones sobre Elena Valera.',
    fuente: '[Página de Facebook]',
    enlace: 'https://www.facebook.com/100067718200797/posts/434487921666076/'
  },
  {
    autor: 'Rubio, B.',
    año: 's.f.',
    titulo: 'Portafolio | Brus Rubio Churay.',
    fuente: '',
    enlace: 'https://www.brusrubio.com/'
  },
  {
    autor: 'Saatchi Art',
    año: 's.f.',
    titulo: 'Diana Riesco.',
    fuente: 'Saatchi Art',
    enlace: 'https://www.saatchiart.com/diana_riesco_lind'
  },
  {
    autor: 'Sólo árboles',
    año: 's.f.',
    titulo: 'Centro Cultural Inca Garcilaso del Ministerio de Relaciones Exteriores del Perú.',
    fuente: '',
    enlace: 'https://www.ccincagarcilaso.gob.pe/actividades/solo-arboles/'
  },
  {
    autor: 'Vargas, R.',
    año: '2013',
    titulo: 'MI IMPRESIÓN ACERCA DE LA EXPOSICIÓN "SUEÑO DE GUÉRNICAS" DEL ARTISTA JUAN ECHENIQUE.',
    fuente: 'Blog de Historia y Crítica de Arte',
    enlace: 'https://rosamariavargashistoriadoradelarte.blogspot.com/2013/05/mi-impresion-acerca-de-la-exposicion.html'
  },
  {
    autor: 'Vázques, L.',
    año: '2008',
    titulo: '«Ojos Mágicos de Saurín, una visión de la Amazonía».',
    fuente: 'Escritores y artistas de la Amazonía peruana',
    enlace: 'https://escritoresamazonicos.blogspot.com/2007/12/saurin-exposicin-de-arte-ojos-mgicos-de.html'
  },
  {
    autor: 'Voces',
    año: '2015',
    titulo: 'Todo un éxito es la exposición pictórica de la pintora Yolanda Razzeto Ruiz.',
    fuente: 'Diario Voces',
    enlace: 'https://diariovoces.com.pe/33374/todo-exito-exposicion-pictorica-pintora-yolanda-razzeto-ruiz'
  },
  {
    autor: 'Voces',
    año: '2015',
    titulo: 'Yolanda Razzeto se prepara para la fiesta del color en Moyobamba.',
    fuente: 'Diario Voces',
    enlace: 'https://diariovoces.com.pe/38634/yolanda-razzeto-prepara-fiesta-color-moyobamba'
  },
  {
    autor: 'Yolanda Razzeto (Yoli) Paintings for sale | RoGallery',
    año: 's.f.',
    titulo: '',
    fuente: 'RoGallery',
    enlace: 'https://www.rogallery.com/artists/yoli-aka-yolanda-razzeto/'
  },
  {
    autor: 'Müller, Regina',
    año: '2010',
    titulo: 'AS ARTES INDÍGENAS E A ARTE CONTEMPOR NEA.',
    fuente: 'Textos Escolhidos de Cultura e Arte Populares',
    enlace: '10.12957/tecap.2010.12046'
  },
  {
    autor: 'Dir, R. C. M. A.',
    año: '2020',
    titulo: 'Necesidad de una política de Estado sobre la Amazonía peruana en el contexto de cambio climático: el aporte de la OTCA.',
    fuente: '',
    enlace: 'http://hdl.handle.net/10644/7454'
  },
  {
    autor: 'Borea, G.',
    año: '2022',
    titulo: 'Conquering Self-Representation: The Rise of Amazonian Indigenous Contemporary Art.',
    fuente: 'MDPI',
    enlace: ''
  } 
].sort((a, b) => a.autor.localeCompare(b.autor));

function formattedReference(reference: BibliografiaItem) {
    const { autor, año, titulo, fuente, enlace } = reference;
    const font = fuente ? `${fuente}.` : '';
    return `${autor} (${año}). ${titulo} ${font}`;
}

</script>

<template>
    <h1 class="py-10 font-bold">Bibliografía</h1>
    <ul class="flex flex-col items-center justify-center gap-5">
        <li v-for="reference in bibliografia" :key="reference.titulo" class="py-10 text-3xl w-3/4 bg-green-dark px-4"  style="text-justify">
            {{ formattedReference(reference) }}
            <span  v-if="reference.enlace !== ''">
                Extraído de 
                <a :href="reference.enlace" target="_blank" class="text-blue-500">{{ reference.enlace }}</a>
            </span>
        </li>
    </ul>
</template>