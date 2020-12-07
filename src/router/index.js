import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
  {
    path: "/canvas",
    name: "Canvas",
    component: () => import("@/views/canvas")
  },
  {
    path: "/canvas/imageNode",
    name: "ImageNode",
    component: () => import("@/views/canvas/imageNode")
  },
  {
    path: "/canvas/triangle",
    name: "Triangle",
    component: () => import("@/views/canvas/triangle")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
