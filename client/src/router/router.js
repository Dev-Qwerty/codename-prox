/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Main.vue'
import GetHired from '../components/GetHired/GHMain.vue'
import wcSignup from '@/components/GetHired/wcSignup.vue'
import Signup from '../components/Signup/SMain.vue'
import Login from '../components/Login/LMain.vue'
import About from '../components/About/Aboutmain.vue'
import construct from '../components/construct/construct.vue'
import Blog from '../components/Blog/Bmain.vue'
import Services from '../components/ServicesPage/SMain.vue'
import Cleaning from '@/components/Services/Cleaning/Cmain.vue'
import Cmodal from '@/components/Services/Cleaning/Cmodal.vue'
import cart from '@/components/Checkout/cart.vue'
import checkout from '@/components/Checkout/checkout.vue'
import PayLaterConfirm from '@/components/Checkout/PayLaterConfirm.vue'
import Dashboard from '@/components/Dashboard/DMain.vue'
import workreq from '@/components/Dashboard/workreq.vue'
//import pworks from '@/components/Dashboard/pworks.vue'
import myworks from '@/components/Dashboard/myworks.vue'
import ForgotPassword from '@/components/ForgotPassword/FPMain.vue'
import UpdateProfile from '@/components/UpdateProfile/UPMain.vue'
import CompleteProfile from '@/components/CompleteProfile/CPMain.vue'
import AddAddress from '@/components/AddAddress/AAMain.vue'
import ConfirmEmail from '@/components/ConfirmEmail/CEMain.vue'
import { isNullOrUndefined } from 'util';

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
      component: GetHired,    
    },    
    { 
      path: '/wcsignup', 
      component: wcSignup,
      beforeEnter(to,from,next) {
        if(Vue.$cookies.get("pid")!=undefined) {
          window.location.href = "http://localhost:8080/dashboard";
        }
        else {
          next();
        }
      }   
    },    
    { 
      path: '/signup', 
      component: Signup,
      beforeEnter(to,from,next) {
        if(Vue.$cookies.get("pid")!=undefined) {
          window.location.href = "http://localhost:8080/dashboard";
        }
        else {
          next();
        }
      }      
    },
    { 
      path: '/login', 
      component: Login,
      beforeEnter(to,from,next) {
        if(Vue.$cookies.get("pid")!=undefined) {
          window.location.href = "http://localhost:8080/dashboard";
        }
        else {
          next();
        }
      }     
    },  
    { 
      path: '/about', 
      component: About 
    },
    { 
      path: '/blog', 
      component: Blog
    },    
    { 
      path: '/services', 
      component: Services 
    },
    { 
      path: '/services/cleaning', 
      component: Cleaning,    
      children: [
        {
          path: 'modal',
          name: 'modal',
          component: Cmodal,
          props: true
        },       
      ]
    },
    {
      path: '/services/cart',
      name: 'cart',
      component: cart,
      props: true,
      children: [
        {
          path: 'checkout',
          name: 'checkout',
          component: checkout,
          props: true,      
          children: [
            {
              path: 'confirm',
              name: 'confirm',
              component: PayLaterConfirm,
              props: true,
            }
          ]        
        }
      ]
    },
    { 
      path: '/dashboard', 
      component: Dashboard,
      children: [
        {
          path: 'workrequests',
          name: 'workrequests',
          component: workreq,
          props: true
        },
        /*{
          path: 'pendingworks',
          name: 'pendingworks',
          component: pworks,
          props: true
        },*/
        { 
          name: 'construct', 
          path: 'construct', 
          component: construct,    
        },        
        {
          path: 'myworks',
          name: 'myworks',
          component: myworks,
          props: true
        }              
      ],
      beforeEnter (to, from, next) {
        if(Vue.$cookies.get("pid")==undefined) {
          alert("Access Denied! Please login!");
          window.location.href = "http://localhost:8080/login";
        }
        else {
          next();
        }
      }
    },
    {
      path: '/forgotPassword',
      component: ForgotPassword
    },
    {
      path: '/updateProfile',
      component: UpdateProfile
    },
    {
      path: '/completeProfile',
      component: CompleteProfile
    },
    {
      path: '/addAddress', 
      component: AddAddress
    },
    {
      path: '/confirmEmail',
      component: ConfirmEmail
    }           
  ]
})