import { RouteRecordRaw } from 'vue-router'

const oneDayRoute: Array<RouteRecordRaw> = [
  {
    path: '/oneDay',
    name: 'oneDay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "oneDay" */ '../views/days/one-day.vue')
  },
  {
    path: '/twoDay',
    name: 'twoDay',
    component: () => import(/* webpackChunkName: "twoDay" */ '../views/days/two-day.vue')
  },
  {
    path: '/threeDay',
    name: 'threeDay',
    component: () => import(/* webpackChunkName: "threeDay" */ '../views/days/three-day.vue')
  },
  {
    path: '/fourDay',
    name: 'fourDay',
    component: () => import(/* webpackChunkName: "fourDay" */ '../views/days/four-day.vue')
  },
  {
    path: '/fiveDay',
    name: 'fiveDay',
    component: () => import(/* webpackChunkName: "fiveDay" */ '../views/days/five-day.vue')
  },
  {
    path: '/sixthDay',
    name: 'sixthDay',
    component: () => import(/* webpackChunkName: "sixthDay" */ '../views/days/sixth-day.vue')
  }
]

export default oneDayRoute
