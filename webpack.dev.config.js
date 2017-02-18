const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'auth.js': ['./src/auth.js', 'webpack-hot-middleware/client']
    },
    output: {
        path: path.join(__dirname, ""),
        publicPath: '/dist/',
        filename: '[name]'
    },
    devtool: '#eval-source-map',
    module: {
        loaders: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: [
                path.resolve(__dirname, "src"),
            ],
        },{
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
    ]
};