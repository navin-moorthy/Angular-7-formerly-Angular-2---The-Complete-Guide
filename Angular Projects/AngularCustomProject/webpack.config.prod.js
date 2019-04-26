var path = require("path");

var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.config.common");
var ngw = require("@ngtools/webpack");

module.exports = webpackMerge(commonConfig, {
  entry: "./src/app/main.aot.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[hash].js",
    chunkFilename: "[id].[hash].chunk.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: "@ngtools/webpack"
      },
      {
        test: /\.ts$/,
        use: [
          { loader: "awesome-typescript-loader" },
          { loader: "angular2-template-loader" }
          // {loader: 'angular-router-loader?aot=true'}
        ]
      }
    ]
  },
  plugins: [
    new ngw.AngularCompilerPlugin({
      tsConfigPath: "./tsconfig.aot.json",
      entryModule: "./src/app/app.module#AppModule"
    })
  ]
});
