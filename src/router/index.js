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
    path: '/miclServicesForm',
    name: 'MICL Services Form',
    component: () => import(/* webpackChunkName: "MICLServicesForm" */ '../views/MICLServicesForm.vue')
  },
  {
    path:'/crisprGeneEditingRequestForm',
    name: 'CRISPR Gene Editing Request Form',
    component: () => import(/* webpackChunkName: "CRISPRGeneEditingRequestForm" */ '../views/CRISPRGeneEditingRequestForm')
  },
  {
    path:'/rodentModelCRISPRGeneEditingForm',
    name: 'Rodent Model CRISPR Gene Editing Form',
    component: () => import(/* webpackChunkName: "RodentModelCRISPRGeneEditingForm" */ '../views/RodentModelCRISPRGeneEditingForm')
  }
]

const router = new VueRouter({
    routes
})

export default router
