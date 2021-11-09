import Vue from 'vue'
import Router from 'vue-router'
import SopaLetras from './components/sopadeLetra/SopaDeLetras.vue'
import JuegoAhorcado from './components/Ahorcado/GameAhorcado.vue'
import JuegoCrucigrama from './components/Crucigrama/JuegoCrucigrama.vue'
import prueba from './components/Crucigrama/prueba.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'SopaLetras',
      component: SopaLetras
    },
    {
      path: '/JuegoAhorcado',
      name: 'JuegoAhorcado',
      component: JuegoAhorcado
    },
    {
      path: '/JuegoCrucigrama',
      name: 'JuegoCrucigrama',
      component: JuegoCrucigrama
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: prueba
    },

    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about"  './views/About.vue')
    }*/
  ]
})
