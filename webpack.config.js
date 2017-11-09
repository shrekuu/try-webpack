const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    app: './src/index.js',

    // 第三方依赖列表
    // vendor: [
    //   'lodash',
    // ]
  },

  // source map, 需要时再开启
  // devtool: 'inline-source-map',


  // webpack dev server live reloading
  devServer: {
    contentBase: './dist',
    hot: true,
  },

  plugins: [

    // 清空 dist 目录
    new CleanWebpackPlugin(['dist']),

    // 编译 html
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),


    // new ManifestPlugin(),

    // 缓存变化不大的第三方依赖
    new webpack.NamedModulesPlugin(),
    // new webpack.HashedModuleIdsPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    // 把第三方依赖放一起
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'runtime'
    // }),

    // 配置哪些文件不需要 source map
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[name].js.map',
    //   exclude: [/^vendor\..+\.js$/]
    // }),
  ],

  output: {

    // 输出文件名带 hash 的文件
    // filename: '[name].[chunkhash].js',
    // filename: '[name].[hash].js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
