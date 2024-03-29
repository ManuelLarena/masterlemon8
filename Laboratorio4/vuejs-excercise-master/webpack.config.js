const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const basePath = __dirname;

module.exports = (env, argv) => {
  const isDev = argv.mode !== 'production';
  return {
    context: path.join(basePath, 'src'),
    resolve: {
      extensions: ['.js', '.ts', '.vue'],
      alias: {
        vue: 'vue/dist/vue.runtime.esm.js',
        assets: path.join(basePath, 'src/assets'),
        common: path.join(basePath, 'src/common'),
        pages: path.join(basePath, 'src/pages'),
        'rest-api': path.join(basePath, 'src/rest-api'),
      },
    },
    entry: {
      app: './main.ts',
      vendor: ['vue', 'vuetify', 'vue-router', '@lemoncode/fonk'],
      vendorStyles: ['../node_modules/vuetify/dist/vuetify.min.css'],
    },
    output: {
      path: path.join(basePath, 'dist'),
      filename: '[name].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/, // va a pasar por los ficheros que terminan en .vue
          exclude: /node_modules/, // no queremos que mire dentro de node_modules
          loader: 'vue-loader', //  usaremos el loader que hemos comentado
        },
        {
          test: /\.ts$/,
          use: {
            loader: require.resolve('ts-loader'),
            options: {
              appendTsSuffixTo: [/\.vue$/],
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
              context: __dirname,
            },
          },
        },
        {
          test: /\.css$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                'vue-style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    localsConvention: 'camelCase',
                    modules: {
                      mode: 'local',
                      localIdentName: '[name]__[local]__[hash:base64:5]',
                    },
                  },
                },
              ],
            },
            {
              use: [
                isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
              ],
            },
          ],
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            esModule: false,
          },
        },
        // {
        //   test: /\.(png|jpg)$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 5000,
        //       esModule: false,
        //       name: '[hash].[name].[ext]',
        //     },
        //   },
        // },
      ],
    },
    devtool: isDev ? 'inline-source-map' : 'none',
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        hash: true,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: path.join(basePath, './tsconfig.json'),
          vue: true,
        },
      }),
      isDev &&
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ].filter(Boolean),
  };
};
