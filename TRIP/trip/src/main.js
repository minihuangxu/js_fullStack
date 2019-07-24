// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'


Vue.config.productionTip = false
Vue.use(mandMobile)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
