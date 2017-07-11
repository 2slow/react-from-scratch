var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template : __dirname + '/src/index.html',
            hash     : true,
            filename : 'index.html',
            inject   : 'body'
        })
    ],
    entry: [
        'babel-polyfill',
        './src/main',
        'webpack-dev-server/client?http://localhost:3006'
    ],
    output: {
        path:  __dirname + "/dist",
        filename: 'main.[hash].js'
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
            query: {
                plugins: ['transform-runtime', 'transform-react-jsx'],
                presets: [["env", {
                    "targets": {
                        "chrome": 35,
                        "browsers": [">1%"]
                    }
                }]]
            }
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }]
    },
    devServer: {
        contentBase: "./src",
        port: "3006"
    }
};