// const PrerenderSPAPlugin = require("prerender-spa-plugin");
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

const isNodeEnv = process.env.ENV_TYPE === "node";

const htmlPluginConfig = isNodeEnv
  ? {
      template: path.resolve(__dirname, "../src/index.ssr.html"),
      filename: "index.ssr.html",
      files: {
        js: "client.bundle.js"
      },
      excludeChunks: ["server"]
    }
  : {
      template: path.resolve(__dirname, "../src/index.html"),
      filename: "index.html"
    };

module.exports = {
  configureWebpack: config => {
    return {
      entry: isNodeEnv ? "./src/entry-server.js" : "./src/entry-client.js",
      target: isNodeEnv ? "node" : "web",
      devtool: "source-map",
      node: isNodeEnv ? undefined : false,
      output: {
        libraryTarget: isNodeEnv ? "commonjs2" : undefined
      },
      externals: isNodeEnv ? [nodeExternals()] : undefined,
      plugins: [
        isNodeEnv ? new VueSSRServerPlugin() : new VueSSRClientPlugin(),
        new HtmlWebpackPlugin(htmlPluginConfig)
      ]
    };
  }
};
