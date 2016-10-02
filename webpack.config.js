var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: "./client/main.js",
  output: {
    filename: "js/main.js",
    path: __dirname + "/public/",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]?v=[hash]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/main.css', {
      allChunks: true
    })
  ],
  postcss: function(){
    return [autoprefixer]
  },
  devServer: {
    secure: false,
    proxy: {
      "*": "http://localhost:3000",
      changeOrigin: true
    }
  }
};

if (isProduction) {
  var DashboardPlugin = require('webpack-dashboard/plugin');
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new DashboardPlugin()
  ])
}
