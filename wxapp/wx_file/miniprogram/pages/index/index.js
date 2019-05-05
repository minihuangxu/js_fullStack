// miniprogram/pages/index/index.js
const db = wx.cloud.database();
const userInfo = db.collection('userInfo');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: []
  },
  getUserInfo(e){
    console.log(e);
    // openid是有安全问题的，这是前端，我们可以到云端去， 安全openid是专有业务
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        console.log(res);
        userInfo
      .where({
        _openid: res.result.openId
      }).count()
      .then( res => {
        if(res.total == 0){
          // 新用户
          userInfo.add({
            data: e.detail.userInfo
          })
          .then( res => {
            wx.navigateTo({
              url: '../add/add'
            })
          })
        } else {
          console.log('已经存在了')
          wx.navigateTo({
            url: '../add/add'
          })  
        }
      })
      }
    })
    
    // //  table === collection
    
    // 把用户存到数据库中，database
    // 用户表 ，核心表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    userInfo
      .get()
      .then( res => {
        console.log(res);
        this.setData({
          userList: res.data
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})