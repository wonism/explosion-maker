const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

const baseConfig = {
  mode,
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    }, {
      test: /\.worker\.js$/,
      use: {
        loader: 'worker-loader',
        options: { name: '[name].[hash:8].js', inline: true, fallback: false },
      },
    }, {
      loader: 'ts-loader',
      test: /\.ts$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
    }],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
};

const prodConfig = {
  ...baseConfig,
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: false,
      filename: path.join(__dirname, 'dist', 'index.html'),
    }),
  ],
  optimization: {
    minimize: true,
  },
  externals: {
    "react": "react",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
};

const devConfig = {
  ...baseConfig,
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    inline: true,
    port: 8888,
    historyApiFallback: true,
    compress: false,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: false,
    },
  },
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.resolve('src'),
    filename: 'bundle.js',
    publicPath: '/',
  },
};

module.exports = isProduction ? prodConfig : devConfig;
