const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/public/index.jsx',
        bundle: './src/public/profile.jsx',
        index_scripts: './src/public/index_scripts.js'
    },

    watch: true,
    watchOptions: {
        ignored: '/node_modules',
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '/dist/src/index.html'),
            template: './src/index.html',
            chunks: ['index', 'index_scripts'],
        }),
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: '/',
    },
}