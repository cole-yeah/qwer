import { createSSRApp } from "vue";
import { Button } from "vant";
import App from "./App.vue";
import createRouter from "./router";
import createStore from "./store";
import "vant/lib/index.css";

const _createApp = () => {
  const app = createSSRApp(App);

  const router = createRouter();
  const store = createStore();

  app.use(Button);

  app.use(store).use(router);

  return { app, router, store };
};

export default _createApp;
