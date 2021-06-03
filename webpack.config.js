const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webpack.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    //! optimization
    optimization: {
        minimizer: [
            new UglifyJsPlugin({

            }),
            new CssMinimizerPlugin({

            }),

        ],
        minimize: true,
    },
    //! plugins
    plugins: [
        new HTMLPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new MiniCss({
            filename: 'style.css'
        })

    ],
    //! module and loard
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [MiniCss.loader, 'css-loader'] ,// 'sass-loader']
            }
        ]
    }
};