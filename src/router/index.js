import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import canvasRoutes from "./canvas";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  ...canvasRoutes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
