import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import firstPage from './views/firstPage.vue'
import inputPage from './views/inputPage.vue'
import Reservation from './views/Reservation.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/inputPage',
      name: 'inputPage',
      component: inputPage
    },
    {
      path: '/Reservation',
      name: 'Reservation',
      component: Reservation
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
