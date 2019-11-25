const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.ts',
    style: './src/style.sass'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: [ '.ts', '.js', '.css', '.scss', '.sass' ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([
      {
        from: './src/index.html',
        to: './index.html',
        writeToDisk: true,
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: 'source-map-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          'css-loader'
        ]
      }
    ]
  }
};
