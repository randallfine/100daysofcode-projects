const webpack = require('webpack');
const path = require("path");


const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }]
        }]
    }
}

module.exports = config