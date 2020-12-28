import { createApp, createSSRApp, h } from "vue";
import App from "./App.vue";
import createRouter from "./router";
import createStore from "./store";

const _createApp = () => {
  const isSSR = process.env.RENDER_ENV === "server";

  const rootComponent = {
    render: () => h(App),
    components: { App }
  };

  const app = isSSR ? createSSRApp(rootComponent) : createApp(rootComponent);
  const router = createRouter();
  const store = createStore();
  //base use
  app.use(router).use(store);

  return {
    app,
    router
  };
};

export default _createApp;
