import { createApp } from "vue";
import { Button } from "vant";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";

const app = createApp(App);

app.use(Button);

app
  .use(store)
  .use(router)
  .mount("#app");
