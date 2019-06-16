import Vue from 'vue'  //mvvm
import App from './App'  //根组件
// SPA

new Vue({
  el: '#app',
  rander: h => h(App)
})
