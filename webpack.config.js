const path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'server/dist');
var SRC_PATH = path.resolve(ROOT_PATH, 'src/app.jsx');

module.exports = {
    entry: SRC_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,              //why?
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by webpack')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
    }
};
