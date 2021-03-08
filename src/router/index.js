import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../components/inicio.vue')
  },
  {
    path: '/calculadora',
    name: 'Calculadora',
    component: () => import('../components/calculadora.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
