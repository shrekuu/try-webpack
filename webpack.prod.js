const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {

  // source map, 在插件里有配置, 这里不必写
  // devtool: 'source-map',

  plugins: [

    // 混淆压缩
    new UglifyJSPlugin({
      sourceMap: true,
    }),

    // manifest
    new ManifestPlugin(),

    // 根据模块的相对路径生成一个四位数的hash作为模块id
    new webpack.HashedModuleIdsPlugin(),

    // 主要配置哪些文件不需要 source map
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].[chunkhash].js.map',
      exclude: [/(^vendor|^polyfills|^runtime)\..+\.js$/],
    }),
  ],

  output: {

    // 输出文件名带 hash 的文件
    filename: '[name].[chunkhash].js',
  },
});
