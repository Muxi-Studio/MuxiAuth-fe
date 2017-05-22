const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: {
        'auth': ['./src/auth.js'],
        'auth_phone': ['./src/auth_phone.js'],
        'newpsd': ['./src/newpsd.js'],
        'newpsd_phone': ['./src/newpsd_phone.js'],
        vendor: ["vue", "whatwg-fetch", "vuelidate"]
    },
    output: {
        path: path.join(__dirname, ""),
        publicPath: '/static/',
        filename: '[name].js'
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/base.html',
            inject: false,
            template: './template/base.ejs',
            chunks: ['vendor']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/svg.html',
            inject: false,
            template: './template/svg.ejs'
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/auth_phone.html',
            inject: false,
            template: './template/auth_phone.ejs',
            chunks: ['auth_phone']
        }),
        new HtmlWebpackPlugin({ 
            alwaysWriteToDisk: true,
            filename: 'template/auth.html', 
            inject: false,
            template: './template/auth.ejs',
            chunks: ['auth']
        }),
        new HtmlWebpackPlugin({ 
            filename: 'template/newpsd.html', 
            template: './template/newpsd.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'template/newpsd_phone.html', 
            template: './template/newpsd_phone.html' 
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    ]
};
