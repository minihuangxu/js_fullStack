// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './vuex/store'
import '../src/assets/css/reset.styl'
import def_lazy_img from '../static/img/loading.gif'
Vue.use(VueLazyload, {
  loading: def_lazy_img,
})

fastclick.attach(document.body)

Vue.config.productionTip = false

import { Toast, Loading } from '@/common/plugin'
Vue.use(Toast)
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
