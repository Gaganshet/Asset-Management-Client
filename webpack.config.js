const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: ['babel-polyfill','./main.js'],
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8002
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react'],
               plugins: ['transform-class-properties']
            }
         },
         { 
           test: /\.css$/,
           use: ['style-loader', 'css-loader']
         }
      ]
   },
   devtool: 'source-map',
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}