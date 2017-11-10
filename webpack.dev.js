const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {

  // webpack dev server live reloading
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [

    // 显示模块的相对路径
    new webpack.NamedModulesPlugin(),

    // 模块热更新
    new webpack.HotModuleReplacementPlugin(),
  ]
});
