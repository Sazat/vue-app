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

let session=sessionStorage.getItem("auth");

router.beforeEach((to,from,next) => {
  
  if(to.path == '/login' && session){
   
    next('/userAccount/'+sessionStorage.getItem("username"))
    // if(session){
      // next('/userAccount')
    // }
    // else{
    //   next()
    // }
  
  }

  else if(to.path.includes('/userAccount')){
    
    if(!session) {
    
      next('/login')
    }

  else { next()}

    // else {
    
    //   console.log(sessionStorage.getItem("username"))
    //    next('/userAccount/'+sessionStorage.getItem("username"))
    // }

  }
    

  else {
    next()
  }

  
  
})
  