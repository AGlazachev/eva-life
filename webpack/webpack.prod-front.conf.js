const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin({}),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/index.twig',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/contacts.twig',
            filename: 'contacts.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/404.twig',
            filename: '404.html'
        }),
        new FileManagerPlugin({
            events: {
              onEnd: {
                  delete: ["./public/assets/img/icons-svg"]
              }
            }
        }),
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
});