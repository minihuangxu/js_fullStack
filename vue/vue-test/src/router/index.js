import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import { Button, Select, Form } from 'element-ui';

Vue.use(Router)
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
