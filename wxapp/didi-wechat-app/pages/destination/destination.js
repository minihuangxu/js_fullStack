// pages/destination/destination.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  toIndex(e) {
    //地址简写
    const destination = e.currentTarget.dataset.destination;
    //详细地址
    const endAddress = e.currentTarget.dataset.end;
    app.globalData.destination = destination;
    //得到经纬度
    app.globalData.qqmapsdk.geocoder({
      address: endAddress,
      success: function(res) {
        app.globalData.endLatitude = res.result.location.lat;
        app.globalData.endLongitude = res.result.location.lng;
        wx.navigateTo({
          url: '../index/index',
        })
      },
      fail: () => {
        wx.showToast({
          title: '选择地址中请包含城市名称',
          icon: 'none'
        })
      }
    })
  },
  searchInput(e) {
    const value = e.detail.value;
    app.globalData.qqmapsdk.getSuggestion({
      keyword: value,
      region: '南昌',
      success: (res) => {
        this.setData({
          address: res.data
        })
      }
    })
  }
})