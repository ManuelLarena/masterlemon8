const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const helpers = require('./helpers');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        core: helpers.resolveFromRootPath('src/core'),
        scenes: helpers.resolveFromRootPath('src/scenes'),
        pods: helpers.resolveFromRootPath('src/pods'),
        layouts: helpers.resolveFromRootPath('src/layouts'),
        assets: helpers.resolveFromRootPath('src/assets'),
        common: helpers.resolveFromRootPath('src/common'),
        'common-app': helpers.resolveFromRootPath('src/common-app'),
      },
    },
    entry: {
      app: ['regenerator-runtime/runtime', './index.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: 'assets/favicon.ico',
        filename: 'index.html',
        template: 'index.html',
      }),
    ],
  }
);
