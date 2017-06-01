const path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'server/dist');
var SRC_PATH = path.resolve(ROOT_PATH, 'src/server.js');

module.exports = {
    entry: SRC_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by webpack')
    ]
};
