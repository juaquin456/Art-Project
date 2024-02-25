import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Home", component: () => import("./views/Home.vue") },
        { path: "/artistas/:departamento", name: "Arstists", component: () => import("./views/Artists.vue")},
        { path: "/artistas/:departamento/:artista", name: "Brus", component: () => import("./views/ArtistPage.vue")}
    ],
});

export default router;