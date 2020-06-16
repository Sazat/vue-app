import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },

  {
    path:'/userAccount/:username',
    name: 'userAccount',
    component: () => import (/* webpackChunkName: "userAccount" */ '../views/userAccount.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router


// router.beforeEach((to,from,next) => {

// if(from.path == "/login" && to.path == "/userAccount") {
//   if(to.params.auth == false) {
//     alert ("bien essayé !")
//     next("/login")
//   }

//   else {
//     console.log("bravo")
//   }
// }
//   if(from.path == "/login") {
//     console.log(to.path)
//     console.log("from" + from.path)
//     console.log("cool je viens de login")
//     console.log("auth " + to.params.username)
//   }
  
//   // if(to.path == "/userAccount"){
  
  
//   // }
  
//   next()
//   })
  