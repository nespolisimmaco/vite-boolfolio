import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";

const router = createRouter({
  history: createWebHistory(), //createWebHistory() serve a router per capire in quale modo deve spostarsi da una pagina all'altra, finge di essere una navigazione multipagina, simula il passaggio da una pagina all'altra
  routes: [
    //array delle rotte
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUsPage,
    },
  ],
});

export { router };
