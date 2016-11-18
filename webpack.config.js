var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/main',
        'webpack-dev-server/client?http://localhost:3006'
    ],
    output: {
        publicPath: "/",
        path:  __dirname,
        filename: 'main.js'
    },
    debug: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            }, {
            test: /\.less$/,
            loader: "style!css!less"
        }]
    },
    devServer: {
        contentBase: "./src",
        port: "3006"
    }
};