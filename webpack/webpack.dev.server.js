const merge = require('webpack-merge');
const common = require('../webpack.common.js');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

const mode= 'development';

module.exports = merge(common, {
    mode: mode,
    devtool: 'inline-source-map',
    plugins: [
        // 查看打包输出情况
        new ManifestPlugin({
            // 没什么实际含义
            basePath: '/app/',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(mode)
        }),
    ]
});