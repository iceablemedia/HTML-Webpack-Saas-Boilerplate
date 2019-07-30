'use strict';

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';
  return {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'dist/'
    },
    devtool: devMode ? "source-map" : '',
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
          filename: 'main.css'
        }),
      require('autoprefixer')
    ],
    module: {
      rules: [{
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: './',
          }
        },
        {
          loader: "css-loader", options: {
            importLoaders: 1,
            sourceMap: devMode ? true : false
          }
        },
        {
          loader: "postcss-loader", options: {
            sourceMap: devMode ? true : false
          }
        },
        {
          loader: "sass-loader", options: {
            sourceMap: devMode ? true : false
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /.html$/,
        use: [{
            loader: 'file-loader?name=../[name].[ext]'
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader'
          }]
      }]
    }
  }
};
