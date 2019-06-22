import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import star from '@components/star/star'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})
