const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    allowedHosts: ['loginapp-production.up.railway.app'],
    port: 8080,
  },
}