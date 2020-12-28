const path = require("path");
const express = require("express");
const { renderToString } = require("@vue/server-renderer");
const manifest = require("./dist/server/ssr-manifest.json");
const fs = require("fs");
const serialize = require("serialize-javascript");

const server = express();

const appPath = path.join(__dirname, "./dist", "server", manifest["app.js"]);
const createApp = require(appPath).default;

server.use(
  "/img",
  express.static(path.join(__dirname, "./dist/client", "img"))
);
server.use("/js", express.static(path.join(__dirname, "./dist/client", "js")));
server.use(
  "/css",
  express.static(path.join(__dirname, "./dist/client", "css"))
);
server.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "./dist/client", "favicon.ico"))
);

server.get("*", async (req, res) => {
  const { app, router, store } = await createApp();
  //路由处理
  router.push(req.url);
  await router.isReady();

  const appContent = await renderToString(app);

  const html = fs.readFileSync(path.join(__dirname, "/dist/client/index.html"));
  const newContent = `<div id="app">${appContent}</div>`;
  const newHtml = html.toString().replace('<div id="app"></div>', newContent);

  res.setHeader("Content-Type", "text/html");
  res.send(newHtml);
});

console.log(`
  You can navigate to http://localhost:8089
`);

server.listen(8089);
