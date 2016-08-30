const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const marked = require('marked');
const hl = require('highlight.js');

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
];

const codeRenderer = function (code, lang) {
    lang = lang === 'js' ? 'javascript' : lang;
    if (lang === 'html') {
        lang = 'xml';
    }
    var hlCode = lang ? hl.highlight(lang, code).value : hl.highlightAuto(code).value;
    return `<div class="doc-highlight"><pre><code class="${lang || ''}">${hlCode}</code></pre></div>`;
};

var renderer = new marked.Renderer();

renderer.code = codeRenderer;


module.exports = {

    entry: [
        'webpack/hot/dev-server',
        path.join(__dirname, 'docs/index')
    ],
    output: {
        publicPath: 'http://127.0.0.1:3000/',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
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
                loaders: [
                    'react-hot',
                    'babel?babelrc'
                ],
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }, {
                test: /\.md$/,
                loader: 'html!markdown'
            }
        ]
    },
    markdownLoader: {
        renderer: renderer
    }
};
