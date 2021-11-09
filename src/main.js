import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/js/all.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import router from './router'

import vuetify from '@/plugins/vuetify' // path to vuetify export


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
