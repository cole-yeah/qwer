const ManifestPlugin = require("webpack-manifest-plugin");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

exports.chainWebpack = webpackConfig => {
  const isSSR = process.env.RENDER_ENV === "server";
  if (!isSSR) {
    webpackConfig.devServer
      .port(8080)
      .open(true)
      .proxy({
        "/eva": {
          target: "http://192.168.13.93:30889",
          changeOrigin: true
        }
      });
    // This is required for repl.it to play nicely with the Dev Server
    webpackConfig.devServer.disableHostCheck(true);
    webpackConfig
      .entry("app")
      .clear()
      .add("./src/entry-client.js");
    return;
  }
  webpackConfig
    .entry("app")
    .clear()
    .add("./src/entry-server.js");

  webpackConfig.target("node");
  webpackConfig.output.libraryTarget("commonjs2");

  webpackConfig
    .plugin("manifest")
    .use(new ManifestPlugin({ fileName: "ssr-manifest.json" }));

  webpackConfig.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }));

  webpackConfig.optimization.splitChunks(false).minimize(false);

  webpackConfig.plugins.delete("hmr");
  webpackConfig.plugins.delete("preload");
  webpackConfig.plugins.delete("prefetch");
  webpackConfig.plugins.delete("progress");
  webpackConfig.plugins.delete("friendly-errors");

  webpackConfig.plugin("limit").use(
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  );
  // console.log(webpackConfig.toConfig())
};
