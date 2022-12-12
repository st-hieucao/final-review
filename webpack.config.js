const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path');

const routes = require('./src/routing/app.json');

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    // keep the structure folder image when build
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name].[hash][ext][query]`;
    },
    clean: true,
  },
  watch: true,
  plugins: [
    new ESLintPlugin(),
  ],
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      // asset module webpack 5 - bundle image
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          },
        ],
       type: 'javascript/auto'
      },
    ],
  },
  // Code spliting
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  // Resolve alias
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared')
    },
  },
}

// add muitiple file html
routes.forEach((route) => {
  module.exports.plugins.push(new HtmlWebpackPlugin({
    template: `./src/pages/${route.page}.html`,
    filename: `${route.page}.html`,
    inject: false,
  }))
})
