var path = require('path')
var config = require('../config')
var utils = require('./util')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var webpack = require('webpack')

process.noDeprecation = true

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        'auth': ['./src/auth.js'],
        'auth_phone': ['./src/auth_phone.js'],
        'newpsd': ['./src/newpsd.js'],
        'newpsd_phone': ['./src/newpsd_phone.js']
        // vendor: ["vue", "whatwg-fetch", "vuelidate", "vue-router"]
    },
    output: {
        path: path.join(__dirname, "../"),
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: process.env.NODE_ENV === 'production'
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src')]
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }]
    },
    plugins: [
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: './template/base.html',
            inject: false,
            template: path.join(__dirname, '../template/base.ejs'),
            //favicon: './src/pictures/favicon.png',
            chunks: ['manifest', 'vendor']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: './template/svg.html',
            inject: false,
            template: './template/svg.ejs'
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: './template/header.html',
            inject: false,
            template: './template/header.ejs'
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: './template/auth_phone.html',
            inject: false,
            template: './template/auth_phone.ejs',
            chunks: ['auth_phone']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: './template/auth.html',
            inject: false,
            template: './template/auth.ejs',
            chunks: ['auth']
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false,
            },
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: './template/newpsd.html',
            inject: false,
            template: './template/newpsd.ejs',
            chunks: ['newpsd']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: './template/newpsd_phone.html',
            inject: false,
            template: './template/newpsd_phone.ejs',
            chunks: ['newpsd_phone']
        }),
        new HtmlWebpackHarddiskPlugin()
    ]
}