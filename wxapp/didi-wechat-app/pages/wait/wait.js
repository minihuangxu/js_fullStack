// pages/wait/wait.js
const app  = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    progressText: '已等待',
    time: '00:00'
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
    this.drawProgressBg()
    this.countInterval();
    this.drawProgressPercent(0);
  },
  format(str) {
    str = '' + str;
    return str.length === 1 ? `0${str}` : str
  },
  handleCancel() {
    clearInterval(this.interval);
    wx.redirectTo({
      url: '/pages/cancel/cancel',
    })
  },
  handleBack () {
    clearInterval(this.interval);
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  countInterval() {
    let cur = 0;
    var timer = new Date(0, 0);
    let randTime = Math.floor(20 * Math.random());
    this.interval = setInterval(() => {
      if (cur <= randTime) {
        cur++;
        timer.setMinutes(cur / 60);
        timer.setSeconds(cur % 60);
        this.setData({
          time: this.format(timer.getMinutes()) + ':' + this.format(timer.getSeconds())
        })
        this.drawProgressPercent(cur / (30));
      } else {
        this.setData({
          progressText: '匹配成功'
        })
        clearInterval(this.interval);
      }
    }, 1000)
  },
  drawProgressPercent(step) {
    const ctx = wx.createCanvasContext('progressCanvas');
    ctx.setLineWidth(4);
    ctx.setStrokeStyle('#fbcb02');
    ctx.setLineCap('round');
    ctx.beginPath();
    ctx.arc(110, 110, 100, - Math.PI / 2, step * Math.PI / 2 - Math.PI / 2, false);
    ctx.stroke();
    ctx.draw();
  },
  drawProgressBg() {
    const ctx = wx.createCanvasContext('progressBg');
    ctx.setLineWidth(4);
    ctx.setStrokeStyle('#e5e5e5');
    ctx.setLineCap('round');
    ctx.beginPath();
    // 3点钟方向 === 0
    ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.draw();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      address: app.globalData.address
    })
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