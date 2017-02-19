module.exports = {
    entry: ['./app.index.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    }
}

const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './app'),
    entry: {
        app: './index.js',
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    }
};