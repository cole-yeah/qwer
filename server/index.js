const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const fs = require("fs");
const path = require("path");
const { renderToString } = require("@vue/server-renderer");
const manifest = require("../dist/server/ssr-manifest.json");

const app = new Koa();
const router = new Router();

const appPath = path.join(__dirname, "../dist", "server", manifest["app.js"]);
const page = require(appPath).default;

app.use("/img", serve.static(path.join(__dirname, "../dist", "img")));
app.use("/js", serve.static(path.join(__dirname, "../dist", "js")));
app.use("/css", serve.static(path.join(__dirname, "../dist", "css")));

router.get("*", (req, res) => {
  const appContent = renderToString(page);
  // const template = fs.readFileSync(path.resolve(__dirname, "../dist/index.html"));
  const html = `
  <html>
    <head>
      <title>Hello</title>
      <link rel="stylesheet" href="${manifest["app.css"]}" />
    </head>
    <body>
      ${appContent}
    </body>
  </html>
  `;
  res.setHeader("Content-Type", "text/html");
  res.end(html);
});

app.listen(5000, () => {
  console.log("服务端渲染: http://localhost:5000");
});
