import { RouteRecordRaw } from 'vue-router'

const oneDayRoute: Array<RouteRecordRaw> = [
  {
    path: '/oneDay',
    name: 'oneDay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "oneDay" */ '../views/OneDay.vue')
  },
  {
    path: '/twoDay',
    name: 'twoDay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "twoDay" */ '../views/TwoDay.vue')
  },
  {
    path: '/threeDay',
    name: 'threeDay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "threeDay" */ '../views/ThreeDay.vue')
  },
  {
    path: '/fourDay',
    name: 'fourDay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "fourDay" */ '../views/FourDay.vue')
  },
  {
    path: '/fiveDay',
    name: 'fiveDay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "fiveDay" */ '../views/FiveDay.vue')
  }
]

export default oneDayRoute
