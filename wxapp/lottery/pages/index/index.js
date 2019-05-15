//index.js
//计数器
let interval = null
//旋转速度
let intime = 50
Page({
  data: {
    color: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
    images: ['/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png'],
    btnconfirm: '/images/dianjichoujiang.png',
    clickLuck: 'clickLuck',
    luckPosition: 0
  },
  loadAnimation() {
    let self = this
    let index = 0
    interval = setInterval(() => {
      if (index > 7) {
        index = 0
        self.data.color[7] = 0.5
      }else if (index != 0){
        self.data.color[index - 1] = 0.5 
      }
      self.data.color[index] = 1
      self.setData({
        color: self.data.color
      })
      index++
    },1000)
  },
  clickLuck() {
    let self = this
    //判断中奖的位置
    if (self.data.luckPosition == null || isNaN(self.data.luckPosition || self.data.luckPosition > 7)) {
      wx.showModal({
        title: '提示',
        content: '请填写正确的位置',
        showCancel: false
      })
      return 
    }

    //设置按钮不得点击
    self.setData({
      btnconfirm: '/images/dianjichoujiangd.png',
      clickLuck: 'clickLuck',
    })

    //清空定时器
    clearInterval(interval)
    let index = 0
    interval = setInterval(() => {
      if (index > 7) {
        index = 0
        self.data.color[7] = 0.5
      }else if (index != 0){
        self.data.color[index - 1] = 0.5 
      }
      self.data.color[index] = 1
      self.setData({
        color: self.data.color
      })
      index++
    },intime)

    let stopTime = 2000
    setTimeout(() => {
      self.stop(self.data.luckPosition)
    },stopTime)
  },

  stop(which) {
    let self = this
    clearInterval(interval)
    //初始化当前位置
    let current = -1
    let color = self.data.color
    for (let i = 0; i < color.length; i++) {
      if (color[i] == 1) {
        current = 1
      }
    }
    let index = current + 1
    self.stopLuck(which, index, intime, 10)
  },

  stopLuck(which, index, time, splittime) {
    let self = this
    let color = self.data.color
    setTimeout(() => {
      if (index > 7) {
        index = 0
        color[7] = 0.5
      }else if (index != 0) {
        color[index - 1] = 0.5
      }
      color[index] = 1
      self.setData({
        color
      })

      // 如果旋转时间过短或者当前位置不等于中奖位置
      if (time < 400 || index != which) {
        splittime++
        time += splittime
        index++
        self.stopLuck(which, index, time, splittime)
      } else {
        setTimeout(() => {
          if (which == 1 || which == 3 || which == 5 || which == 7) {
            wx.showModal({
              title: '提示',
              content: '恭喜中奖！！！',
              showCancel: false,
              success(res) {
                self.setData({
                  btnconfirm: '/images/dianjichoujiang.png',
                  clickLuck: 'clickLuck',
                })
                self.loadAnimation()
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '很遗憾，没有中奖！',
              showCancel: false,
              success(res) {
                self.setData({
                  btnconfirm: '/images/dianjichoujiang.png',
                  clickLuck: 'clickLuck',
                })
                self.loadAnimation()
              }
            })
          }
        },1000)
      }
    },time)
  },

  input(e) {
    this.setData({
      luckPosition: e.detail.value
    })
  },
  onLoad: function (options) {
    this.loadAnimation()
  }
})