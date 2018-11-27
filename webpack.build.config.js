const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: {
        'auth': ['./src/auth.js'],
        'auth_phone': ['./src/auth_phone.js'],
        'newpsd': ['./src/newpsd.js'],
        'newpsd_phone': ['./src/newpsd_phone.js'],
        vendor: ["vue", "whatwg-fetch", "vuelidate", "vue-router"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: 'http://ossfrontend.muxixyz.com/muxiauth',
        filename: 'static/[name].1.1.3.js'
    },
    devtool: '#eval-source-map',
    module: {
        noParse: /vue.runtime.min/,
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
            loader: 'url-loader?limit=20&name=/static/[hash:8].[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.vue'],
        alias: {
            'vue': path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.min'),
            'vue-router': path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.min')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/main/base.html',
            inject: false,
            template: './template/base.ejs',
            favicon: './src/pictures/favicon.png',
            chunks: ['vendor']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/main/svg.html',
            inject: false,
            template: './template/svg.ejs'
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/main/header.html',
            inject: false,
            template: './template/header.ejs'
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/main/auth_phone.html',
            inject: false,
            template: './template/auth_phone.ejs',
            chunks: ['auth_phone']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/main/auth.html',
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
            filename: 'template/main/newpsd.html',
            inject: false,
            template: './template/newpsd.ejs',
            chunks: ['newpsd']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/main/newpsd_phone.html',
            inject: false,
            template: './template/newpsd_phone.ejs',
            chunks: ['newpsd_phone']
        }),
        new HtmlWebpackHarddiskPlugin(),
        new FaviconsWebpackPlugin('./src/pictures/favicon.png'),
        new webpack.optimize.CommonsChunkPlugin("vendor", "static/vendor.1.10.3.js"),
    ]
};
