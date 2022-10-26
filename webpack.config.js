const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: resolve(__dirname, 'src', 'main.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    module: {
        rules: [

            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [{
                    loader: 'img-optimize-loader',
                    options: {
                        compress: {
                            mode: 'high',
                            disableOnDevelopment: false
                        }
                    }
                }
                ]
            },
            {
                test: /\.mp[3|4]$/i,
                use: 'file-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9000
    }
};
