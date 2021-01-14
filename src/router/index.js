import {
  createRouter,
  createWebHistory,
  createMemoryHistory
} from "vue-router";
import canvasRoutes from "./canvas";
import countDownRoutes from "./countDown";

export const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/main")
  },
  ...canvasRoutes,
  ...countDownRoutes
];

const isServer = typeof window === "undefined";

const createHistory = isServer ? createMemoryHistory : createWebHistory;

const _createRouter = () => {
  return createRouter({
    history: createHistory(),
    routes
  });
};

export default _createRouter;
