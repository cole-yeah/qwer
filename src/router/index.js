import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  createMemoryHistory
} from "vue-router";
import canvasRoutes from "./canvas";
import countDownRoutes from "./countDown";
import dragAndDropRoutes from "./dragAndDrop";
import listRoutes from "./list";

export const routes = [
  {
    path: "/",
    name: "MainPage",
    floor: 1,
    component: () => import("@/views/main")
  },
  ...canvasRoutes,
  ...countDownRoutes,
  ...dragAndDropRoutes,
  ...listRoutes
];

const isServer = typeof window === "undefined";

const createHistory = isServer ? createMemoryHistory : createWebHashHistory;

const _createRouter = () => {
  return createRouter({
    history: createHistory(),
    routes
  });
};

export default _createRouter;
