import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
   {
      path: '/',
      name: 'Home',
      meta: { layout: 'form' },
      component: () => import('../views/Home.vue')
   },
   {
      path: '/basic',
      name: 'Basic',
      meta: { layout: 'main' },
      component: () => import('../views/Basic.vue')
   },
   {
      path: '/adress',
      name: 'Adress',
      meta: { layout: 'main' },
      component: () => import('../views/Adress.vue')
   },
   {
      path: '/passport',
      name: 'Passport',
      meta: { layout: 'main' },
      component: () => import('../views/Passport.vue')
   },
]
const router = new VueRouter({
   // mode: 'history',
   base: process.env.BASE_URL,
   routes,

})
