const tripUser = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../../views/user/login.vue'),
    meta: {
      title: '登录'
    }
  }
]
export default tripUser