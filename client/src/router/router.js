import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Main.vue'
import GetHired from '../components/GetHired/GHMain.vue'
import Signup from '../components/Signup/SMain.vue'
import Login from '../components/Login/LMain.vue'
import About from '../components/About/Aboutmain.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home },
    {path: '/gethired', component: GetHired },
    {path: '/signup', component: Signup },
    {path: '/login', component: Login },  
    {path: '/about', component: About }      
  ]
})