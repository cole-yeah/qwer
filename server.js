const path = require("path");
const express = require("express");
const { createSSRApp } = require("vue");
const { renderToString } = require("@vue/server-renderer");
const manifest = require("./dist/server/ssr-manifest.json");
const fs = require("fs");

const server = express();

const appPath = path.join(__dirname, "./dist/server", manifest["app.js"]);
const App = require(appPath).default;

server.use(
  "/img",
  express.static(path.join(__dirname, "./dist/server", "img"))
);
server.use("/js", express.static(path.join(__dirname, "./dist/server", "js")));
server.use(
  "/css",
  express.static(path.join(__dirname, "./dist/server", "css"))
);
server.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "./dist/server", "favicon.ico"))
);

const html = fs.readFileSync(path.join(__dirname, "/dist/server/index.html"));

server.get("*", async (req, res) => {
  const app = createSSRApp(App);
  const appContent = await renderToString(app);
  let newHtml = `<div id="app">${appContent}</div>`;
  newHtml = html.toString().replace('<div id="app"></div>', newHtml);

  res.end(newHtml);
});

console.log(`
  You can navigate to http://localhost:8080
`);

server.listen(8089);
