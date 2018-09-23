const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: JSON.stringify("https://production.com:5443"),
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new UglifyJSPlugin()
    // new CopyWebpackPlugin([{ from: 'static', to: 'static' }]),
  ]
});