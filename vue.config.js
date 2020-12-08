const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),
          // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
          routes: ["/", "/canvas", "/about"],
          renderer: new Renderer({
            inject: {
              foo: "bar"
            },
            headless: false,
            renderAfterDocumentEvent: "render-event"
          })
        })
      ]
    };
  }
};
