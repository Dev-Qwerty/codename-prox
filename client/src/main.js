import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home/Main.vue'
import GetHired from './components/GetHired/GHMain.vue'
import Signup from './components/Signup/SMain.vue'
import Login from './components/Login/LMain.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home },
  {path: '/gethired', component: GetHired },
  {path: '/signup', component: Signup },
  {path: '/login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
