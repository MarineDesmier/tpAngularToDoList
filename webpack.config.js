const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: __dirname + '/src/test.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            { test: /.ts$/, exclude: /node_modules/, use: 'ts-loader' },
            { test: /.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        })
    ],
    devServer: {
        port: 8080,
        open: true,
        liveReload: true,
    }
}