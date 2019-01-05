const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    // polyfill
    polyfills: './src/polyfills.js',

    // utils
    utils: './src/utils.js',

    // index
    index: './src/index.js',

    // vendor
    // vendor: [
    //   'jquery',
    //   'lodash'
    // ]
  },
  plugins: [
    // 清空 dist 目录
    new CleanPlugin(['dist']),

    // 编译 html
    new HtmlPlugin({
      template: './src/index.html',
      hash: true,
      minify: true
    }),

    // 注入依赖, 省得每次都手动引入
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      _: 'lodash'
    })
  ],
  // 把依赖缓存起来, 每加一个依赖记得加到这里
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /[\\/]node_modules[\\/]/,
        cache: true,
        parallel: true,
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: (file) => {
            return `${file}.LICENSE`;
          },
          banner: (licenseFile) => {
            return `License information can be found in ${licenseFile}`;
          },
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        // 把第三方的依赖独立起来, 方便缓存
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
  output: {
    // 发布目录
    path: path.resolve(__dirname, 'dist'),

    // 输出文件
    filename: '[name].bundle.js'
  }
}
