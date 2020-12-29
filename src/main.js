import { createApp, createSSRApp, h } from "vue";
import App from "./App.vue";
import createRouter from "./router";
import createStore, { provideStore } from "./store";
import { Button } from "vant";
import "vant/lib/index.css";

const _createApp = () => {
  const isSSR = process.env.RENDER_ENV === "server";

  const store = createStore();

  const rootComponent = {
    render: () => h(App),
    components: { App },
    setup() {
      provideStore(store);
    }
  };

  const app = isSSR ? createSSRApp(rootComponent) : createApp(rootComponent);
  const router = createRouter();
  //base use
  app.use(router).use(store);

  app.use(Button);

  return {
    app,
    router,
    store
  };
};

export default _createApp;
