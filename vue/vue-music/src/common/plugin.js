let Toast = {}
Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'center',  //默认显示位置
    duration: '1500' //持续的时间
  }
  for (let property in options) {
    opt[property] = options[property]  //使用options的配置
  }
  Vue.prototype.$toast = (tips, type) => {  //挂载到Vue实例上使得他们可以不必引用就可以使用
    if (type) {
      opt.defaultType = type
    }
    if (document.getElementsByClassName('vue-toast').length) {
      return  //如果toast此时是在页面出现状态， 则不再执行
    }
    let toastTpl = Vue.extend({
      template: '<div class="vue-toast toast-' + opt.defaultType +'">' + tips + '</div>'
    })
    let tpl = new toastTpl().$mount.$el
    document.body.appendChild(tpl)
    setTimeout(() => {
      document.body.removeChild(tpl)
    }, opt.duration)
  }
  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })
}

let Loading = {}
Loading.install = function (Vue) {
  let tpl 
  Vue.prototype.$showLoading = () => {
    if (document.getElementsByClassName('vue-loading').length) {
      return
    }
    let loadingTpl = Vue.extend({  // 创建构造器，定义好提示信息的模板
      template: '<div class="vue-loading"></div>'
    })
    tpl = new loadingTpl().$mount.$el
    document.body.appendChild(tpl)
  }
  Vue.prototype.$hideLoading = () => {
    if (document.getElementsByClassName('vue-loading').length) {
      document.body.removeChild(tpl)
    }
  }
}

export {
  Toast,
  Loading
}