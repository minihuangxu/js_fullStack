- 小程序开发工具， 初始化一个项目框架
    小程序是架构在微信（原生 APP），使用前端技术和思想，来快速开发，一份代码，到处运行。

    不用下载，不用写两次，快速高效
- html => wxml (新标签)
  weixin wxml? xml 为了它的性能优化以及新功能，
  有些新的标签 view => div 
  css => wxss
  js => js   bindtap => onclick
  page = wxml + wxss + js
  小程序由一个个page组成， 每个page又由这三部分组成
  app.json是项目描述文件 添加的要在app.json里声明切页面时， wx.navigateTo()

  - MVVM
  只要你有了数据， Model
  Page({
      data:{

      }
  })
  View 视图层 WXML 等着数据编译输出的HTML模板  {{}}
  指令， wx：for