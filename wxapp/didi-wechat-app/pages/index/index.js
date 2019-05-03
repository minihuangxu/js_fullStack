//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/index'
Page({
  data: {
    navData: [],
    currentTap: 1,
    scrollLeft: 0,
    isLoading: false,
    waitingTimes: '正在计算中',
    address: '',
    destination: null,
    callCart: false,
    costType: [
      { typeName: '拼车', typeImageUrl: '../../assets/images/costCart.png', pay: null },
      { typeName: '快车', typeImageUrl: '../../assets/images/costCart.png', pay: null },
      { typeName: '优享', typeImageUrl: '../../assets/images/goodCart.png', pay: null },
    ],
    index: 1,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.requestCart();
  },
  onShow() {
    this.setData({
      address: app.globalData.address,
      destination: app.globalData.destination,
    })
  },
  toCallCart() {
    this.setData({
      callCart: true
    })
    const destination = this.data.destination;
    if (destination) {
      let { qqmapsdk, endLatitude, endLongitude } = app.globalData;
      qqmapsdk.calculateDistance({
        mode: 'driving',
        to: [
          {
            latitude: endLatitude,
            longitude: endLongitude
          }
        ],
        success: res => {
          const distance = res.result.elements[0].distance;
          var num1 = 8 + 1.9 * (distance / 1000);
          var num2 = 12 + 1.8 * (distance / 1000);
          var num3 = 16 + 2.9 * (distance / 1000);
          const pay1 = num1.toFixed(1);
          const pay2 = num2.toFixed(1);
          const pay3 = num3.toFixed(1);
          this.setData({
            'costType[0].pay': pay1,
            'costType[1].pay': pay2,
            'costType[2].pay': pay3
          }),
            this.setData({
              callCart: true
            })
        },
        fail: (error) => {
          wx.showToast({
            title: '计算距离失败',
            icon: 'none'
          })
          console.log(error)
        }
      })
    } else {
      wx.showToast({
        title: '目的地不能为空',
        icon: 'fail',
        mask: true,
        duration: 1000
      })
    }
  },
  switchCart(e) {
    const id = e.currentTarget.dataset.index;
    this.setData({
      index: id
    })
  },
  requestCart() {
    util.request({
      url: 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/comments#!method=get'
    })
      .then((res) => {
        const waitingTimesArr = res.data.waitingTimes;
        const index = Math.floor((Math.random() * waitingTimesArr.length));
        this.setData({
          navData: res.data.navData,
          cost: res.data.cost,
          isLoading: false,
          waitingTimes: waitingTimesArr[index]
        })
      })
  },
  switchNav(event) {
    const cart = event.currentTarget.dataset.name;
    const cur = event.currentTarget.dataset.current;
    const info = wx.getSystemInfoSync();
    const windowWidth = info.windowWidth;
    const perNavWidth = windowWidth / 8;
    this.setData({
      cart,
      currentTap: cur,
      scrollLeft: (cur - 1) * perNavWidth,
      isLoading: true,
      waitingTimes: ''
    })
    setTimeout(() => {
      this.requestCart();
    }, 1500)
  },
  toWait() {
    wx.navigateTo({
      url: '/pages/wait/wait'
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
