const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js")
  },

  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    // publicPath: "http://localhost:8080/",
    chunkFilename: "js/[id].[chunkash].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(jp(e)?g|png|woff(2)?|eot|ttf|svg|mp4|webm|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[ext]",
              outPath: "assets",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    })
  ]
};