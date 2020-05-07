import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Main.vue'
import GetHired from '../components/GetHired/GHMain.vue'
import Signup from '../components/Signup/SMain.vue'
import Login from '../components/Login/LMain.vue'
import About from '../components/About/Aboutmain.vue'
import Services from '../components/ServicesPage/SMain.vue'
import Cleaning from '@/components/Services/Cleaning/Cmain.vue'
import Cmodal from '@/components/Services/Cleaning/Cmodal.vue'
import Dashboard from '@/components/Dashboard/DMain.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: Home 
    },
    { 
      path: '/gethired', 
      component: GetHired 
    },
    { 
      path: '/signup', 
      component: Signup 
    },
    { 
      path: '/login', 
      component: Login 
    },  
    { 
      path: '/about', 
      component: About 
    },
    { 
      path: '/services', 
      component: Services 
    },
    { 
      path: '/services/cleaning', 
      component: Cleaning,
      children: [{
        path: ':id',
        name: 'modal',
        component: Cmodal,
        props: true
      }] 
    },
    { 
      path: '/dashboard', 
      component: Dashboard 
    }           
  ]
})