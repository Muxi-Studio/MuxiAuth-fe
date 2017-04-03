const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'auth.js': ['./src/auth.js'],
        'auth_phone.js': ['./src/auth_phone.js'],
        'newpsd.js': ['./src/newpsd.js'],
        'newpsd_phone.js': ['./src/newpsd_phone.js']
    },
    output: {
        path: path.join(__dirname, ""),
        publicPath: '/dist/',
        filename: '[name]'
    },
    devtool: '#eval-source-map',
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: [
                path.resolve(__dirname, "src"),
            ],
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=20&name=images/[hash:8].[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.vue'],
    }
};
