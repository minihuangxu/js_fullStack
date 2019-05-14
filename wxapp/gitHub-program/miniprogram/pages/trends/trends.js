// miniprogram/pages/trends/trends.js
const github = require('../../api/github.js');

const timeRange = [
  { label: 'Daily', value: 'Daily' },
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Monthly', value: 'Monthly' }
]
const languages = [
  'All',
  'C', 'CSS', 'C#', 'C++',
  'Dart', 'Dockerfile',
  'Erlang',
  'Gradle', 'Go',
  'HTML', 'Haskell',
  'Java', 'JavaScript', 'JSON', 'Julia',
  'Kotlin',
  'MATLAB',
  'Python', 'PHP',
  'R', 'Ruby', 'Rust',
  'Shell', 'SQL', 'Swift',
  'TeX',
  'Vue'
].map(it => ({ label: it, value: it }));

Page({

  /**
   * 页面的初始数据
   */
  data: {
    since: timeRange[0],
    lang: languages[0],
    trends: [],
    selectorValues: [timeRange, languages],
    selectedIndices: [0, 0]
  },
  reloadData() {
    const { selectedIndices } = this.data;
    const since = timeRange[selectedIndices[0]]
    .value.toLowerCase();
    const language = languages[selectedIndices[1]]
    .value.toLowerCase();
    // 返回一个 promise
    github.trendings({since, language})
    .then(data => {
      console.log(data);
      this.setData({
        trends: data
      })
      wx.stopPullDownRefresh();
    })
    .catch(() => {
      wx.stopPullDownRefresh();
    })
  },
  changeFilter(event) {
    const selectedIndices = event.detail.value;
    this.setData({
      selectedIndices
    });
    wx.startPullDownRefresh();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.startPullDownRefresh();
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
    this.reloadData();
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