//index.js
Page({
 /**
   * 页面的初始数据
   */
  data: {
    navData: [
      {
        name: "流水",  //文本
        current: 1,    //是否是当前页，0不是  1是
        style: 0,     //样式
        ico: '../../assest/icon/check.png3.',  //不同图标
        fn: 'gotoIndex'   //对应处理函数
      }, {
        name: "账户",
        current: 0,
        style: 0,
        ico: 'icon-mingpianjia',
        fn: 'gotoAccount'
      }, {
        name: "记一笔",
        current: 0,
        style: 1,
        ico: '',
        fn: 'gotoNoting'
      }, {
        name: "图表",
        current: 0,
        style: 0,
        ico: 'icon-yikeappshouyetubiao35',
        fn: 'gotoChart'
      }, {
        name: "我的",
        current: 0,
        style: 0,
        ico: 'icon-wode',
        fn: 'gotoMine'
      },
    ],
  },
  gotoIndex: function(){
    wx.redirectTo({
      url: '/pages/index/index',
    });
  },
  gotoAccount: function(){
    wx.redirectTo({
      url: '/pages/account/account',
    });
  },
  gotoNoting:function(){
    wx.redirectTo({
      url: '/pages/noting/noting',
    });
  },
  gotoChart:function(){
    wx.redirectTo({
      url: '/pages/chart/chart',
    });
  },
  gotoMine:function(){
    wx.redirectTo({
      url: '/pages/mine/mine',
    });
  }, 
})
