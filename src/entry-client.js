import createApp from "./main";

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

(async (curRouter, curApp) => {
  await curRouter.isReady();
  curApp.mount("#app");
})(router, app);
