const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
  devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: JSON.stringify("http://localhost:5000")
    })
  ]
});