import createApp from "./main";

export default async context => {
  const { app, store, router } = createApp();
  const { url } = context;

  router.push(url);

  await router.isReady();

  context.state = store.state;
  return app;
};
