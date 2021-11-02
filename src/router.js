import Vue from 'vue'
import Router from 'vue-router'
import SopaLetras from './components/sopadeLetra/SopaDeLetras.vue'
import MemoryGame from './components/MemoryGame/game.vue'

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
      path: '/memoryGame',
      name: 'memoryGame',
      component: MemoryGame
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
