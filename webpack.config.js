const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    app: './src/index.js',

    // 第三方依赖列表
    vendor: [
      'lodash'
    ]
  },
  plugins: [

    // 清空 dist 目录
    new CleanWebpackPlugin(['dist']),

    // 编译 html
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),


    // new ManifestPlugin(),

    // 缓存变化不大的第三方依赖
    // new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),

    // 把第三方依赖放一起
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ],

  output: {

    // 输出文件名带 hash 的文件
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
};
