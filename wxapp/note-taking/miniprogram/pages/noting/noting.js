// miniprogram/pages/noting/noting.js
Page({

  data: {
    isActive: 0, 
    isSelect: 0,
    isSelected: 0,
    isLoading: false,
    animationData: {},
    // 计算版面数据
    idb:"back",
    idc:"clear",
    idt:"toggle",
    idadd:"＋",
    id9:"9",
    id8:"8",
    id7:"7",
    idj:"－",
    id6:"6",
    id5:"5",
    id4:"4",
    idx:"×",
    id3:"3",
    id2:"2",
    id1:"1",
    id0:"0",
    idd:".",
    ide:"＝",
    ids:"保存",
    screenData:"0.00",
    operaSymbo:{"＋":"+","－":"-",".":"."},
    lastIsOperaSymbo:false,
    iconType:'waiting_circle',
    iconColor:'white',
    arr:[],
    logs:[],
    outcome:[
      {icon:'../../assest/icon/米饭.png', type: '早午晚餐', id: 0},
      {icon:'../../assest/icon/家具.png', type: '日常用品', id: 1},
      {icon:'../../assest/icon/汽车.png', type: '打车租车', id: 2},
      {icon:'../../assest/icon/冰淇淋.png', type: '水果零食', id: 3},
      {icon:'../../assest/icon/宠物.png', type: '宠物用品', id: 4},
      {icon:'../../assest/icon/电脑.png', type: '休闲娱乐', id: 5},
      {icon:'../../assest/icon/礼服.png', type: '衣服裤子', id: 6},
      {icon:'../../assest/icon/杠铃选中.png', type: '健身运动', id: 7},
      {icon:'../../assest/icon/礼物.png', type: '请客送礼', id: 8},
      {icon:'../../assest/icon/电话.png', type: '手机话费', id: 9},
      {icon:'../../assest/icon/插头.png', type: '物业管理', id: 10},
      {icon:'../../assest/icon/保健.png', type: '药品保健', id: 11},
      {icon:'../../assest/icon/钻石.png', type: '珠宝首饰', id: 12},
      {icon:'../../assest/icon/跳伞.png', type: '休闲度假', id: 13},
      {icon:'../../assest/icon/酒水.png', type: '聚餐酒会', id: 14},
    ],
    income: [
      {icon:'../../assest/icon/公文包.png', type:'工资收入', id: 0},
      {icon:'../../assest/icon/奖杯.png', type:'奖金所得', id: 1},
      {icon:'../../assest/icon/彩票.png', type:'意外中奖', id: 2},
      {icon:'../../assest/icon/红包.png', type:'礼金收入', id: 3},
      {icon:'../../assest/icon/店铺.png', type:'经营所得', id: 4},
    ],
    today: '2019年6月30日',
    account: '现金',
    currentType: '早午晚餐',
  },
  setActive: function(e){
    // console.log("---",e);
    var index = e.target.dataset.index;
    // 初始化动画数据
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0
  });
  // 距离左边位置
  animation.left((index * 250) + 'rpx').step()
  // 设置动画
  this.setData({
      animationData: animation.export()
  });
  this.setData({
    isActive: index,
  })
  },
  selectType: function(e){
    var outcome = this.data.outcome;
    var index = e.target.dataset.index;
    //console.log("---",e);
      for(let i = 0; i < outcome.length; i++) {
        if (index === outcome[i].id) {
          var current = outcome[i].type;
        }
      }     
      this.setData({
        isSelect: index,
        currentType: current
      })
  },
  selectedType: function(e) {
    var index = e.target.dataset.index;
    var income = this.data.income;
    for(let i = 0; i < income.length; i++) {
      if (index === income[i].id) {
        var current = income[i].type;
      }
    }    
    this.setData({
      isSelected: index,
      currentType: current
    })
  },
  save: function(e) {
    wx.navigateTo({
      url:'../index/index'
    })
  },
  clickBtn:function(event){
    var id = event.target.id;
    if(id == this.data.idb){  //退格←
      var data = this.data.screenData;
      if(data == "0"){
          return;
      }
      data = data.substring(0,data.length-1);
      if(data == "" || data == "－"){
          data = 0;
      }
      this.setData({"screenData":data});
      this.data.arr.pop();
    }else if(id == this.data.idc){  //清屏C
      this.setData({"screenData":"0"});
      this.data.arr.length = 0;
    }else if(id == this.data.idt){  //正负号+/-
      var data = this.data.screenData;
      if(data == "0"){
          return;
      }
      var firstWord = data.charAt(0);
      if(data == "－"){
        data = data.substr(1);
        this.data.arr.shift();
      }else{
        data = "－" + data;
        this.data.arr.unshift("－");
      }
      this.setData({"screenData":data});
    }else if(id == this.data.ide){  //等于＝
      var data = this.data.screenData;
      if(data == "0"){
          return;
      }
      //eval是js中window的一个方法，而微信页面的脚本逻辑在是在JsCore中运行，JsCore是一个没有窗口对象的环境，所以不能再脚本中使用window，也无法在脚本中操作组件                 
      //var result = eval(newData);           
      
      var lastWord = data.charAt(data.length);
      if(isNaN(lastWord)){
        return;
      }

      var num = "";

      var lastOperator = "";
      var arr = this.data.arr;
      var optarr = [];
      for(var i in arr){
        if(isNaN(arr[i]) == false || arr[i] == this.data.idd || arr[i] == this.data.idt){
          num += arr[i];
        }else{
          lastOperator = arr[i];
          optarr.push(num);
          optarr.push(arr[i]);
          num = "";
        }
      }
      optarr.push(Number(num));
      var result = Number(optarr[0])*1.0;
      console.log(result);
      for(var i=1; i<optarr.length; i++){
        if(isNaN(optarr[i])){
            if(optarr[1] == this.data.idadd){
                result += Number(optarr[i + 1]);
            }else if(optarr[1] == this.data.idj){
                result -= Number(optarr[i + 1]);
            }else if(optarr[1] == this.data.idx){
                result *= Number(optarr[i + 1]);
            }else if(optarr[1] == this.data.iddiv){
                result /= Number(optarr[i + 1]);
            }
        }
      }
      //存储历史记录
      // this.data.logs.push(data + result);
      // wx.setStorageSync("calclogs",this.data.logs);

      // this.data.arr.length = 0;
      // this.data.arr.push(result);

      this.setData({"screenData":result+""});
    }else{
      if(this.data.operaSymbo[id]){ //如果是符号+-*/
        if(this.data.lastIsOperaSymbo || this.data.screenData == "0"){
          return;
        }
      }

      var sd = this.data.screenData;
      var data;
      if(sd == 0){
        data = id;
      }else{
        data = sd + id;
      }
      this.setData({"screenData":data});
      this.data.arr.push(id);

      if(this.data.operaSymbo[id]){
        this.setData({"lastIsOperaSymbo":true});
      }else{
        this.setData({"lastIsOperaSymbo":false});
      }
    }
  },
})