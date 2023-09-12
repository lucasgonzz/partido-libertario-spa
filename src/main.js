import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Axios
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)
// Install Axios
Vue.use({
  install (Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL : process.env.VUE_APP_API_URL,
      withCredentials : true
    })
  }
})
Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL : process.env.VUE_APP_API_URL+'/api',
      withCredentials : true
    })
  }
})

// Vue Scrool
Vue.prototype.$scrollToTop = () => window.scrollTo(0,0)

// Notifications
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
 
Vue.use(VueToast, {
  position: 'bottom'
})

// BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import app from './common-vue/mixins/app'
Vue.mixin(app)
import generals from './mixins/generals'
Vue.mixin(generals)
import images from './mixins/images'
Vue.mixin(images)

// Scroll Effect
import VueAnimateOnScroll from 'vue-animate-onscroll'
Vue.use(VueAnimateOnScroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
