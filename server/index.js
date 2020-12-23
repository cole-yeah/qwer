const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const fs = require("fs");
const path = require("path");
// const { createBundleRenderer } = require("vue-server-renderer");
const { createBundleRenderer } = require("vue-bundle-renderer");

const app = new Koa();
const router = new Router();

let renderer;

const serverBundle = require("./dist/vue-ssr-server-bundle.json");
const clientManifest = require("./dist/vue-ssr-client-manifest.json");
const template = fs.readFileSync(
  path.resolve(__dirname, "../dist/index.ssr.html"),
  "utf-8"
);

renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
  vueServerRenderer: require("@vue/server-renderer")
});

app.use(serve(path.resolve(__dirname, "../dist")));

router.get("*", (ctx, next) => {
  const context = {
    url: ctx.url
  };
  const ssrStream = renderer.renderToStream(context);
  ctx.status = 200;
  ctx.type = "html";
  ctx.body = ssrStream;
});

app.listen(5000, () => {
  console.log("服务端渲染: http://localhost:5000");
});
