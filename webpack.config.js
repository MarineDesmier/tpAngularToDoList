const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: resolve('src', 'test.ts'),
    output: {
        path: resolve('dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            { test: /.ts$/, exclude: /node_modules/, use: 'ts-loader' },
            { test: /.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('src', 'index.html')
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },
    devServer: {
        port: 8080,
        open: true,
        liveReload: true,
        hot: false
    }
}