import { createSSRApp } from "vue";
import { Button } from "vant";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";

const _createApp = () => {
  const app = createSSRApp(App);

  app.use(Button);

  app.use(store).use(router);

  return { app, router, store };
};

export default _createApp;
