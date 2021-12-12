const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const stylelint = require("stylelint");
const StylelintPlugin = require('stylelint-webpack-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
        },
        compress: true,
        hot: true,
        port: 9000,
        client: {
            overlay: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/twig/pages/index.twig',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/catalog.twig',
            filename: 'catalog.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/contacts.twig',
            filename: 'contacts.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/auth.twig',
            filename: 'auth.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/forgot.twig',
            filename: 'forgot.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/reg.twig',
            filename: 'reg.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/delivery.twig',
            filename: 'delivery.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/card.twig',
            filename: 'card.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/success.twig',
            filename: 'success.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/lk.twig',
            filename: 'lk.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/history.twig',
            filename: 'history.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/favorites.twig',
            filename: 'favorites.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/order.twig',
            filename: 'order.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/twig/pages/404.twig',
            filename: '404.html'
        }),
        new StylelintPlugin(
            {
                configFile: '../.stylelintrc',
                files: '../src/sass/**/*.scss',
                exclude: ['node-modules']
            }
        )
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
});

