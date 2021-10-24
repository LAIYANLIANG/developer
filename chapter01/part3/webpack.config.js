//引入一個包
//path就是nodeJs中的一個模塊，直接引入就好~~
const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//webpack中的所有的配置信息，都應該寫在module.exports中
module.exports = {

    //指定入口文件(指主要的啟動第一個文件)
    entry: "./src/index.ts",

    //指定打包文件所在的目錄
    output: {
        //指定打包文件的目錄
        //寫path:"./path"這種的也行
        path: path.resolve(__dirname, 'dist'),
        //打包後文件的文件
        filename: "bundle.js"
    },
    //指定webpack打包時要使用的模塊
    module: {
        //指定要加載的規則
        rules: [
            {
                //test指定的是規則生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: 'ts-loader',
                //要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin(
            {
                //title:"這是一個自定義的title"
                template: "./src/index.html"
            }),
    ],
    //用來設引用模塊
    resolve: {
        extensions: ['.ts', '.js']
    }
};
