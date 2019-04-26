// pages/play/play.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const audioId = options.id;
    console.log(audioId);
    wx.request({
      url: app.globalData.API_BASE + '/song/url',
      data: {
        id: audioId
      },
      success: res => {
        console.log('/song/url', res);
        if (res.statusCode === 200) {
          this.createBgAudio(res.data.data[0]);
        }
      }
    })
    wx.request({
      url: app.globalData.API_BASE + '/song/detail',
      data: {
        ids: audioId
      },
      success: res => {
        console.log('歌曲详情' ,res);
        if (res.statusCode === 200) {
          this.setData({
            song: res.data.songs[0]
          })
        }
      }
    })
  },
  createBgAudio (res) {
    const bgAudioManage = wx
    .getBackgroundAudioManager();
    app.globalData.bgAudioManage = bgAudioManage;
    bgAudioManage.title = 'title';
    bgAudioManage.src = res.url;
    bgAudioManage.onPlay(res => {
      this.setData({
        isPlay: true
      })
    });
  },
  handleToggleBGAudio () {
    const bgAudioManage = app
    .globalData.bgAudioManage;
    const { isPlay } = this.data;
    if (isPlay) {
      bgAudioManage.pause();
    } else {
      bgAudioManage.play();
    }
    this.setData({
      isPlay: !isPlay
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