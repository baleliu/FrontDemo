const merge = require('webpack-merge');
const devServer = require('./webpack.dev.server.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(devServer, {
    devServer: {
        inline:true,
        port: 8000,
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ]
});