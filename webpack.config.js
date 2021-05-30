const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webpack.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLPlugin({
            filename: "index.html"
        })
    ]
};