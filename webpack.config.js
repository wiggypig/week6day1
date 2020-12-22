module.exports = {
    entry: {
      app: "./app/javascript/index",
    },
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "bundle.js",
    },
    module: {
      rules: [
        { test: /\.css$/, use: "style-loader" },
        { test: /\.css$/, use: "css-loader" },
      ],
    },
    resolve: {
      extensions: [".webpack.js", ".web.js", ".js", ".json", ".css"],
      modules: ["./node_modules", "./app"],
    },
  
    devServer: {
      contentBase: "./dist",
      port: "3000",
      inline: true
    },
  };