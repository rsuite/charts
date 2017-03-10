const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const markdownLoader = require('markdownloader').renderer;


const  output = {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
};

const entry=[
     path.join(__dirname, 'docs/index'),
]

const jsloaders=[
     'babel?babelrc'
];

if (process.env.NODE_ENV === 'development') {
    output.publicPath = '/assets/';
    entry.push('webpack/hot/dev-server');
    jsloaders.push('react-hot');
}


const config = {
    entry,
    output,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlwebpackPlugin({
            title: 'RSuite-ECharts',
            filename: 'index.html',
            template: 'docs/index.html',
            inject: true,
            hash: true
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: jsloaders,
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }, {
                test: /\.md$/,
                loader: 'html!markdown'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    markdownLoader
};


module.exports = config;
