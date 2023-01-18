import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
import VueRouter from "vue-router";
import router from './router/index'
import store from './store/index'

import '@/assets/styles/main.scss'
import VModal from 'vue-js-modal'
import ApiPlugin from './plugins/api'
import LoadPlugin from './plugins/load'



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VModal)
Vue.use(ApiPlugin)
Vue.use(LoadPlugin)


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
