const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: {
    index: "./src/index.js",
    imageModule: "./src/image_viewer.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    publicPath: "build/"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  mode: "development",
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      },
      {
        loader: ExtractTextPlugin.extract({
          use: "css-loader"
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 40000
            }
          },
          "image-webpack-loader"
        ]
      }
    ]
  },
  plugins: [new ExtractTextPlugin("style.css")]
};

module.exports = config;
