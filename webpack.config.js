const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js"
    },
    mode: "development",
    devServer: {
        port: 3003,
        hot: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        new CssMinimizerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()]
    },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, "css-loader", "sass-loader"],
                test: /\.s[ac]ss$/i,
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext][query]'
                  }
            }
        ]
    }
}