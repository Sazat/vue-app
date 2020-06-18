import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import userAccount from '../views/userAccount.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),

    props: true
  },
  {
    path: '/login',
    name: 'Login',
    //component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    component: Login
  },

  {
    path:'/userAccount/:username?',
    name: 'userAccount',
    //component: () => import (/* webpackChunkName: "userAccount" */ '../views/userAccount.vue')
    component: userAccount
  }
]

const router = new VueRouter({
  mode: 'history',
  base:process.envBASE_URL,
  routes
})

export default router