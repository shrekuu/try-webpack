const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {

    // polyfill
    polyfills: './src/polyfills.js',

    // app
    app: './src/index.js',

    // 第三方依赖列表
    vendor: [
      'lodash',
    ]
  },
  plugins: [

    // 清空 dist 目录
    new CleanWebpackPlugin(['dist']),

    // 编译 html
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new webpack.ProvidePlugin({
      lodash: 'lodash',
    }),

    // 尽量缓存变化不大的第三方依赖
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),

    // 提取 webpack boilerplate
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
  ],
  output: {

    // 输出文件
    filename: '[name].bundle.js',

    // 发布目录
    path: path.resolve(__dirname, 'dist')
  },
};
