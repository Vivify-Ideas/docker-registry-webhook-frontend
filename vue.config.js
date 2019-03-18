module.exports = {
  configureWebpack: {
    entry: "./src/main.ts",
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "ts-loader",
          exclude: "/node_modules/",
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts"]
    }
  }
};
