- 无编译 不代码
webpack 已经成为工作流程的霸主
vue-cli
编译过程和js 的 promise 异步
1. 代码写在 dev src/
2. 上线在 build dist/
3. 启动 web 服务器 webpack-dev-server

- webpack html template plugin html-webpack-plugin

- log 不在根目录下 怎么找到它 多写点地址 ./utils/log.js alias

- resolve .js -> module rules .js babel-loader

- babel-core babel-cli babel-preset-env
- babel-loader 有点兼容性问题
module
rules: [
    {
        test: /\.js$/,
        use: 'babel-loader
    }
] 
resolve: {
    extensions: ['.js']
}

8080 webpack-dev-server html-webpack-plugin
template ./src/index.html
为什么 js 运行了
html + js

- webpack 一切皆可打包， 打包到js里
css  对于 js 来说就是个文本
img 对于js 打包成为base64
但是 css 应该独立打包， 性能优化的需要
main.js 显示是最慢的

