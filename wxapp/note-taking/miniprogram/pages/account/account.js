// miniprogram/pages/account/account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sum: '',
    cash: [],
    cashSum: '',
    finance: [],
    financeSum: '',
    virtual: [],
    virtualSum: '',
    creditor: [],
    creditorSum: '',
    invest: [],
    investSum: '',
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
    this.setData({
      cash: [{typeIcon: '../../assest/icon/现金.png', typeName: '现金' , typeSum: '77.90'}],
      finance: [
        {typeIcon: '../../assest/icon/银行卡.png', typeName: '银行卡', typeSum: '95.37'},
        {typeIcon: '../../assest/icon/信用卡.png', typeName: '信用卡', typeSum:'0.00'}
      ],
      virtual: [
        {typeIcon: '../../assest/icon/支付宝.png', typeName: '支付宝', typeSum: '2311.41'},
        {typeIcon: '../../assest/icon/微信.png', typeName: '微信', typeSum: '56.73'},
        {typeIcon: '../../assest/icon/QQ.png', typeName: 'QQ钱包', typeSum: '0.00'}
      ],
      creditor: [
        {typeIcon: '../../assest/icon/付款.png', typeName: '应付款项', typeSum: '0.00'},
        {typeIcon: '../../assest/icon/打印机.png', typeName: '公司报销', typeSum: '0.00'},
        {typeIcon: '../../assest/icon/纸张.png', typeName: '应收款项', typeSum: '1585.00'}
      ],
      invest: [
        {typeIcon: '../../assest/icon/基金.png', typeName: '基金账户', typeSum: '0.00'},
        {typeIcon: '../../assest/icon/股票.png', typeName: '股票账户', typeSum: '0.00'},
        {typeIcon: '../../assest/icon/余额宝.png', typeName: '余额宝', typeSum: '0.00'}
      ],
    })
    this.getcashSum()
    this.getfinanceSum()
    this.getvirtualSum()
    this.getcreditorSum()
    this.getinvestSum()
    this.getSum()
  },
  getcashSum() {
    let cash = this.data.cash
    let total = 0
    for (let i = 0; i < cash.length; i++) {
        total += cash[i].typeSum * 1
    }
    this.setData({
      cashSum: total.toFixed(2),
    })
  },
  getfinanceSum() {
    let finance = this.data.finance
    let total = 0
    for (let i = 0; i < finance.length; i++) {
        total += finance[i].typeSum * 1
    }
    this.setData({
      financeSum: total.toFixed(2)
    })
  },
  getvirtualSum() {
    let virtual = this.data.virtual
    let total = 0
    for (let i = 0; i < virtual.length; i++) {
        total += virtual[i].typeSum * 1
    }
    this.setData({
      virtualSum: total.toFixed(2)
    })
  },
  getcreditorSum() {
    let creditor = this.data.creditor
    let total = 0
    for (let i = 0; i < creditor.length; i++) {
        total += creditor[i].typeSum * 1
    }
    this.setData({
      creditorSum: total.toFixed(2)
    })
  },
  getinvestSum() {
    let invest = this.data.invest
    let total = 0
    for (let i = 0; i < invest.length; i++) {
        total += invest[i].typeSum * 1 
    }
    this.setData({
      investSum: total.toFixed(2)
    })
  },
  getSum() {
    let type = this.data
    let sum = 0
    sum = type.cashSum * 1 + type.financeSum * 1 + type.creditorSum * 1 + type.investSum * 1 + type.virtualSum * 1;
    this.setData({
      sum
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