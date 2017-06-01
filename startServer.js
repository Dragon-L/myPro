var webpack = require('webpack');

var webpackServer = require('webpack-dev-server');
var config = require('./webpack.config');

var compiler = webpack(config);
var server = new webpackServer(compiler, {
    publicPath: config.output.path
});

server.app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(8080, function () {
    console.log('please open the url: localhost:8080/');
} );

