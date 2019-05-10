// pages/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasAddress: false,
    address: [],
    orders: [
      { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 3.40 },
      { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 2.60 }
    ]


  },
  getTotalPrice() {
    let orders = this.data.orders
    let total = 0
    for (let i = 0; i < orders.length; i++) {
        total += orders[i].num * orders[i].price
    }
    this.setData({
      total: total.toFixed(2)
    })
  }, 
  toPay() {
    wx.showModal({
      title: '提示',
      content: '付钱了',
      complete() {
        wx.switchTab({
          url: '/pages/user/user'
        })
      }
    })
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
    this.getTotalPrice()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const that = this
    wx.getStorage({
      key: 'address',
      success: (result) => {
       //console.log(result)
       that.setData({
         address: result.data,
         hasAddress: true
       })
      },
      fail: () => {},
      complete: () => {}
    });
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