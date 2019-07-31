const tripRoutes = [
  {
    path: '/trip',
    name: 'Trip',
    component: () => import('@/views/trip/trip'),
    meta: {
      title: '出行'
    },
    children: [
      {
        path: 'map',
        name: 'Map',
        component: () => import('../../components/MapLocation/index.vue'),
        meta: {
          title: '地图'
        }
      }
    ]
  }
]

export default tripRoutes