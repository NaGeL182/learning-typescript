'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.ts']
    },
    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin({})
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};