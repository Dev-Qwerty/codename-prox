import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Axios from "axios"
import VueCookies from 'vue-cookies'

//For Cookie Handling
Vue.use(VueCookies)
Vue.$cookies.config('7d')

Vue.prototype.$http = Axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
