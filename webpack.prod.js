const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {

  // source map
  devtool: 'source-map',

  plugins: [

    // 混淆压缩
    new UglifyJSPlugin(),

    // manifest
    new ManifestPlugin(),

    // 根据模块的相对路径生成一个四位数的hash作为模块id
    new webpack.HashedModuleIdsPlugin(),

    // 配置哪些文件不需要 source map
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: [/^vendor\..+\.js$/]
    }),
  ],

  output: {

    // 输出文件名带 hash 的文件
    filename: '[name].[chunkhash].js',
  },
});
