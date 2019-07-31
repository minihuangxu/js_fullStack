// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import store from './store/index'
import AMap from 'vue-amap'


Vue.config.productionTip = false
Vue.use(mandMobile)
Vue.use(AMap)
AMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

// 请求拦截器
import requestPlugin from './request/http'
Vue.use(requestPlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
