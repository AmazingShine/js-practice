
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    devtool: 'eval-source-map', //ONLY DEV
    entry: __dirname + "/src/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port: 8085
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }]
            },
            {
                test: /\.scss$/,
                use:  [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
              test: /\.svg$/,
              use: ['svg-inline-loader']
            },
            {
              test: /\.(png|jpe?g|gif)(\?.*)?$/,
              loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],
}