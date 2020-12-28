import createApp from "./main";

const { app, router } = createApp({
  store: {}
});

(async (r, a) => {
  await r.isReady();

  a.mount("#app", true);
})(router, app);
