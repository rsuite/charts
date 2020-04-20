const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const markdownRenderer = require('react-markdown-reader').renderer;

const { NODE_ENV } = process.env;
const extractLess = new MiniCssExtractPlugin({
  filename: '[name].[contenthash].css',
  disable: NODE_ENV === 'development'
});

const docsPath = NODE_ENV === 'development' ? './assets' : './';
const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(NODE_ENV),
    __DEV__: JSON.stringify(NODE_ENV !== 'production')
  }),
  extractLess,
  new HtmlwebpackPlugin({
    title: 'Charts for React Suite',
    filename: 'index.html',
    template: 'docs/index.html',
    inject: true,
    hash: true,
    path: docsPath
  })
];

const common = {
  entry: path.resolve(__dirname, 'src/'),
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, ''),
    publicPath: '/'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: {
    splitChunks: {
      maxSize: 2097152
    }
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader?babelrc',
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader?babelrc'],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',
            options: {
              renderer: markdownRenderer()
            }
          }
        ]
      }
    ]
  }
};

module.exports = (env = {}) => {
  return Object.assign({}, common, {
    entry: [path.resolve(__dirname, 'docs/index')]
  });
};
