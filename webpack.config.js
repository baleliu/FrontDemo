const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    // 输出到dist文件夹, 文件名字为bundle.js
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
    mode: 'production', //可选值有：production development
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }

                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName:"[path][name]-[local]-[hash:base64:5]"
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html'
            }
        )
    ],
    devServer: {
        inline:true,
        port: 8000
    }
}