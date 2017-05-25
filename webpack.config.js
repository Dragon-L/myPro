var webpack = require('webpack');

module.exports = {
    entry: './server.js',
    output: {
        path: './server',
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
