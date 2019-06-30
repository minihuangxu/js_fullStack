//index.js
Page({
  /**
    * 页面的初始数据
    */
  data: {
    monthSum: '',
    records: [
        {recordIcon: '../../assest/icon/米饭.png', recordName: '早午晚餐', recordNote: '晚餐', recordNum: '9.00', recordDate:'26/06/2019', income: false},
        {recordIcon: '../../assest/icon/冰淇淋.png', recordName: '水果零食', recordNote: '水果', recordNum: '13.60', recordDate:'26/06/2019', income: false},
        {recordIcon: '../../assest/icon/红包.png', recordName: '礼金收入', recordNote: '红包', recordNum: '50.00', recordDate:'24/06/2019', income: true},
        {recordIcon: '../../assest/icon/米饭.png', recordName: '早午晚餐', recordNote: '晚餐', recordNum: '6.40', recordDate:'26/06/2019', income: false},
        {recordIcon: '../../assest/icon/汽车.png', recordName: '打车租车', recordNote: '打车', recordNum: '23.30', recordDate:'25/06/2019', income: false},
        {recordIcon: '../../assest/icon/米饭.png', recordName: '早午晚餐', recordNote: '午餐', recordNum: '9.00', recordDate:'25/06/2019', income: false},
        {recordIcon: '../../assest/icon/家具.png', recordName: '日常用品', recordNote: '纸巾', recordNum: '19.60', recordDate:'24/06/2019', income: false},
        {recordIcon: '../../assest/icon/米饭.png', recordName: '早午晚餐', recordNote: '早餐', recordNum: '3.50', recordDate:'24/06/2019', income: false}
      ],
  },
  onShow: function () {
    this.setData({
    
    })
    this.getSum()
  },
  getSum () {
    let record = this.data.records;
    let sum = 0;
    for(let i = 0; i < record.length; i++) {
      sum += record[i].recordNum * 1
    }
    this.setData({
      monthSum: sum.toFixed(2)
    })
  }
})
