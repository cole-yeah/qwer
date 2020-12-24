const ManifestPlugin = require("webpack-manifest-plugin");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
// const path = require("path");

module.exports = {
  configureWebpack: config => {
    const isSSR = process.env.RENDER_ENV === "server";

    config.module.rule("vue").uses.delete("cache-loader");
    config.module.rule("js").uses.delete("cache-loader");
    config.module.rule("ts").uses.delete("cache-loader");
    config.module.rule("tsx").uses.delete("cache-loader");

    if (!isSSR) {
      config.devServer.disableHostCheck(true);
      return {
        entry: "./src/entry-client.js"
      };
    }

    //delete
    config.plugins.delete("hmr");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("progress");
    config.plugins.delete("friendly-errors");
    config.optimization.splitChunks(false).minimize(false);

    return {
      target: "node",
      entry: "./src/entry-server.js",
      output: {
        libraryTarget: "commonjs2"
      },
      externals: [nodeExternals({ allowlist: /\.(css|vue)$/ })],
      plugins: [
        new ManifestPlugin({ filename: "ssr-manifest.json" }),
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1
        })
      ]
    };
  }
};
