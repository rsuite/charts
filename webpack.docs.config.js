const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const marked = require('marked');
const hl = require('highlight.js');

const isPublish = process.env.NODE_ENV === 'publish';
const plugins = [
    new ExtractTextPlugin('styles.css')
];

const codeRenderer = function(code, lang) {
    lang = lang === 'js' ? 'javascript' : lang;
    if (lang === 'html') {
        lang = 'xml';
    }
    var hlCode = lang ? hl.highlight(lang, code).value : hl.highlightAuto(code).value;
    return `<div class="doc-highlight"><pre><code class="${lang || ''}">${hlCode}</code></pre></div>`;
};

var renderer = new marked.Renderer();

renderer.code = codeRenderer;


if (isPublish) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    plugins.push(new webpack.BannerPlugin(`Last update: ${new Date().toString()}`));
}

module.exports = {
    entry: {
        index: path.join(__dirname, 'docs')
    },
    output: {
        path: path.join(__dirname, 'docs/assets'),
        filename: '[name].js'
    },
    plugins: plugins,
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: [
                'babel?babelrc'
            ],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loaders: [
                'style',
                'css?minimize',
                'less'
            ],
            include: [
                path.join(__dirname, 'docs')
            ]
        }, {
            test: /\.md$/,
            loader: 'html!markdown'
        }]
    },
    markdownLoader: {
        renderer: renderer
    }
};
