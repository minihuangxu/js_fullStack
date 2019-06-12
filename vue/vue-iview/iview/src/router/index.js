import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/detail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/table',
      name: 'Home',
      component: Home,
      children: [
        {
        path: '/',
        component: Index
        }
      ]
    }
  ]
})
