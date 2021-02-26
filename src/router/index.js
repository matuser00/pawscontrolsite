import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../components/inicio.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
