const path = require('path');
const webpack = require('webpack');

const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    stats: 'minimal',
    
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      hot: true,
      port: 9000,
    },
    
    entry: {
      main: './src/index.ts',
    },
    
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    
    resolve: {
      extensions: ['.ts', '.js', '.css', '.scss', '.sass'],
    },
    
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new CopyPlugin([
        {
          from: './src/index.html',
          to: './index.html',
        },
      ]),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new CleanWebpackPlugin(),
    ],
    
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
        },
        {
          test: /\.js$/,
          use: 'source-map-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },
    
    optimization: isProd ? {
      minimizer: [
        new OptimizeCSSAssetsPlugin({}),
        new TerserPlugin(),
      ]
    } : undefined,
  };
};
