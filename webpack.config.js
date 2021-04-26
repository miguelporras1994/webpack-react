const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry : './src/index.js',
    output:{
        path : path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader'
              }
            ]
          },
    ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3007,
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
          }),
    ],
}