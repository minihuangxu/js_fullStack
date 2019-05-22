//index.js
Page({
  /**
    * 页面的初始数据
    */
  data: {
    monthSum: '239.90',
    isActive: 1,
    isLoading: false,
    animationData: {},
  },
  setActive: function(e){
    console.log("---",e);
    var index = e.target.dataset.index;
    // 初始化动画数据
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0
  });
  // 距离左边位置
  animation.left((index * 250) + 'rpx').step()
  // 设置动画
  this.setData({
      animationData: animation.export()
  });
  this.setData({
    isActive: index,
  })
  },
})
