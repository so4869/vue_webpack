const path = require('path');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
    entry: './my.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCss.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    limit: Math.pow(10, 6),
                }
            }
        ]
    },
    plugins: [
        new MiniCss({filename: 'style.css'})
    ],
};