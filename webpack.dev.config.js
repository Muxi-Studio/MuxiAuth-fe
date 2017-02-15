const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'auth.js': ['./src/auth.js', 'webpack-hot-middleware/client'],
        vendor: ["Backbone", "underscore", "jquery", "./src/style.scss"]
    },
    output: {
        path: '/',
        publicPath: '/dist/',
        filename: '[name]'
    },
    devtool: '#eval-source-map',
    module: {
        loaders: [{
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        },
        {
          test: /\.html$/,
          loader: "html-loader"
        },
        {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file',
            'image-webpack-loader'
        ]
    }]
    },
    resolve: {
        extensions: ['', '.js','.scss'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ]
};