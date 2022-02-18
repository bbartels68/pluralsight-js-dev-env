
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const ManifestPlugin = require("webpack-manifest-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");  // not needed for WordPress

// import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
// console.log({
//   test1: path.resolve(process.cwd(), "src/index"),
//   tes2t: path.resolve(__dirname, "../src/index"),
// });
// process.exit();

// export default {
module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src/index"),
    // vendor: path.resolve(__dirname, "src/vendor"), // 3rd party frameworks
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true,
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
};
