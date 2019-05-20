生产线 Webpack 代码生产工艺  工作流 Work Flow

- html + css + js = development
    html template {{}}
    css stylus
    js es6,7,8,9 => es5
最后代码的运行环境 env 

- js 
  babel
  使用最新的技术来开发，babel 编译成es5,

- babel-core 核心的转译库
  npm run bulid "babel ..."
  babel-cli
  babel-preset-env .babelrc
  {
      "presets": ["env"]
  }

  build
  dev

- preset 处理
  env 搞不定，安装插件

  webpack 是一切工作流的主宰
    webpack --mode development
    /src 开发目录
    /dist 

- 开发时  development 代码的可读性 dev 本地 localhost
- 上线时 producyion 代码要压缩，混淆 build  服务器上 ，域名访问
- 测试 test 局域网0