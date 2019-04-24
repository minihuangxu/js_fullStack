Page({
  data: {
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    addShow:false,
    addText:'',
    todos:[]
  },
  addInput:function(e) {
    this.setData({
      addText:e.detail.value
    })
  },
  getUserInfo:function(e){
    //console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      // MVVM编程 响应式 状态
      hasUserInfo: true
    })
  },
  addToDoShow:function(e) {
    this.setData({
      addShow: true
    })
  },
  addToDoHide:function(e) {
    this.setData({
      addShow: false
    })
  },
  addTodo:function(e) {
    //- 输入框有内容
    if(!this.data.addText.trim()){
      return;
    }
    let todos = this.data.todos;
    todos.push({
      id: new Date().getTime(),
      title:this.data.addText,
      status:'0'
    })
    this.setData({
      todos
    });
    this.addToDoHide();
    //- todos 界面上 wx：for setData（） 重新绘制页面
    //- 退出输入状态
  }
})

  