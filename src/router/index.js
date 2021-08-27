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
    path: '/genotypingForm',
    name: 'Genotyping Form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "genotypingForm" */ '../views/GenotypingForm.vue')
  },
  {
    path: '/kitRequestForm',
    name: 'Kit Request Form',
    component: () => import(/* webpackChunkName: "kitRequestForm" */ '../views/KitRequestForm.vue')
  },
  {
    path: '/contact',
    name: 'Contact Information',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/billing',
    name: 'Billing Information',
    component: () => import(/* webpackChunkName: "billing" */ '../views/Billing.vue')
  },
  {
    path: '/payment',
    name: 'Payment Information',
    component: () => import(/* webpackChunkName: "payment" */ '../views/Payment.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
