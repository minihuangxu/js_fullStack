// components/countdown/countdown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    start: {
      type: Boolean,
      value: false,
      observer(newVal) {
        console.log(newVal, '----------');
        if (newVal === true) {
          this.countdownFunc()
        }
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    timerText: '获取验证码'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _setStartDataEvent: function() {
      this.triggerEvent('setStartDataEvent', {
        start:  this.data.start
      });
    },
    countdownFunc: function() {
      this.setData({
        timerText: 3
      });
      let countdownNum = this.data.timerText;
      let timer = setInterval(() => {
        countdownNum--;
        this.setData({
          timerText: countdownNum
        });
        if (countdownNum === 0) {
          this.setData({
            timerText: '重新发送',
            start: false
          })
          clearInterval(timer);
          this._setStartDataEvent();
        }
      }, 1000)
    }
  }
})