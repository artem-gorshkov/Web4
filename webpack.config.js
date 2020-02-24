const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        index: './src/main/js/index.jsx',
        main: './src/main/js/main.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/js'),
        filename: '[name].js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
            }),
        ],
    },
    module: {
        rules: [
            {test: /\.css$/, use: 'css-loader'},
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
        ]
    },
};