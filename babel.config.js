module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        targets: { esmodules: true },
        polyfills: []
      }
    ]
  ],
  // plugins: [
  //   [
  //     "import",
  //     {
  //       libraryName: "vant",
  //       libraryDirectory: "es",
  //       style: true
  //     },
  //     "vant"
  //   ]
  // ]
};
