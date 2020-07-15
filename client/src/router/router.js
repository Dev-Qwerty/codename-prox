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
import Cdashboard from '@/components/CustomerDashboard/CDmain.vue'
import bookings from '@/components/CustomerDashboard/bookings/bookings.vue'
import bchild from '@/components/CustomerDashboard/bookings/b-child.vue'
import favorites from '@/components/CustomerDashboard/favorites/favorites.vue'
import notifications from '@/components/CustomerDashboard/notifications/notifications.vue'
import Dashboard from '@/components/Dashboard/DMain.vue'
import workreq from '@/components/Dashboard/workreq/workreq.vue'
//import pworks from '@/components/Dashboard/pworks.vue'
import myworks from '@/components/Dashboard/myworks/myworks.vue'
import mwchild from '@/components/Dashboard/myworks/mw-child.vue'
import myprofile from '@/components/Dashboard/myprofile/myprofile.vue'
import ForgotPassword from '@/components/ForgotPassword/FPMain.vue'
import UpdateProfile from '@/components/UpdateProfile/UPMain.vue'
import CompleteProfile from '@/components/CompleteProfile/CPMain.vue'
import AddAddress from '@/components/AddAddress/AAMain.vue'
import ConfirmEmail from '@/components/ConfirmEmail/CEMain.vue'
import { isNullOrUndefined } from 'util';
import Electronics from '@/components/Services/Electronics/Electronics'
import Ecmodal from '@/components/Services/Electronics/Ecmodal'
import Carpentry from '@/components/Services/Carpentry/Carpentry'
import Ctmodal from '@/components/Services/Carpentry/Ctmodal'
import Plumbing from '@/components/Services/Plumbing/Plumbing'
import Pmodal from '@/components/Services/Plumbing/Pmodal'
import Fabrication from '@/components/Services/Fabrication/Fabrication'
import Fmodal from '@/components/Services/Fabrication/Fmodal'
import Photography from '@/components/Services/Photography/Photography'
import Phmodal from '@/components/Services/Photography/Phmodal'
import Painting from '@/components/Services/Painting/Painting'
import Pamodal from '@/components/Services/Painting/Pamodal'
import Electrical from '@/components/Services/Electrical/Electrical'
import Eemodal from '@/components/Services/Electrical/Eemodal'
import Pestcontrol from '@/components/Services/Pestcontrol/Pestcontrol'
import Pcmodal from '@/components/Services/Pestcontrol/Pcmodal'
import ChangeAvatar from '@/components/ChangeAvatar/CAMain.vue'
import ProcessPayment from '@/components/Checkout/ProcessPayment'
import OrderStatus from '@/components/Checkout/OrderStatus'
import PaymentStatus from '@/components/Checkout/PaymentStatus'

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
          if(Vue.$cookies.get("category") == 'Worker') {
            window.location.href = "http://localhost:8080/dashboard";
          }
          else if(Vue.$cookies.get("category") == 'Customer') {
            window.location.href = "http://localhost:8080/customerdashboard";
          }
          else {
            window.location.href = "http://localhost:8080/companydashboard"; //To be done in future.
          }
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
          if(Vue.$cookies.get("category") == 'Worker') {
            window.location.href = "http://localhost:8080/dashboard";
          }
          else if(Vue.$cookies.get("category") == 'Customer') {
            window.location.href = "http://localhost:8080/customerdashboard";
          }
          else {
            window.location.href = "http://localhost:8080/companydashboard"; //To be done in future.
          }
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
          if(Vue.$cookies.get("category") == 'Worker') {
            window.location.href = "http://localhost:8080/dashboard";
          }
          else if(Vue.$cookies.get("category") == 'Customer') {
            window.location.href = "http://localhost:8080/customerdashboard";
          }
          else {
            window.location.href = "http://localhost:8080/companydashboard"; //To be done in future.
          }
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
          path: 'cmodal',
          name: 'cmodal',
          component: Cmodal,
          beforeEnter(to,from,next) {
            if(Vue.$cookies.get("category") != undefined) {
              if(Vue.$cookies.get("category") == 'Worker') {
                window.location.href = "http://localhost:8080/dashboard";
              } else {
                next()
              }
            }
            else {
              window.location.href = "http://localhost:8080/login";
            }
          }  
        },       
      ]
    },
    { 
      path: '/services/electronics-and-appliances', 
      component: Electronics,    
      children: [
        {
          path: 'ecmodal',
          name: 'ecmodal',
          component: Ecmodal,
          beforeEnter(to,from,next) {
            if(Vue.$cookies.get("category") != undefined) {
              if(Vue.$cookies.get("category") == 'Worker') {
                window.location.href = "http://localhost:8080/dashboard";
              } else {
                next()
              }
            }
            else {
              window.location.href = "http://localhost:8080/login";
            }
          } 
        },       
      ]
    },
    { 
      path: '/services/carpentry', 
      component: Carpentry,    
      children: [
        {
          path: 'ctmodal',
          name: 'ctmodal',
          component: Ctmodal,
          beforeEnter(to,from,next) {
            if(Vue.$cookies.get("category") != undefined) {
              if(Vue.$cookies.get("category") == 'Worker') {
                window.location.href = "http://localhost:8080/dashboard";
              } else {
                next()
              }
            }
            else {
              window.location.href = "http://localhost:8080/login";
            }
          } 
        },       
      ]
    },
    { 
      path: '/services/plumbing', 
      component: Plumbing,    
      children: [
        {
          path: 'pmodal',
          name: 'pmodal',
          component: Pmodal,
          beforeEnter(to,from,next) {
            if(Vue.$cookies.get("category") != undefined) {
              if(Vue.$cookies.get("category") == 'Worker') {
                window.location.href = "http://localhost:8080/dashboard";
              } else {
                next()
              }
            }
            else {
              window.location.href = "http://localhost:8080/login";
            }
          } 
        },       
      ]
    },
    { 
      path: '/services/fabrication', 
      component: Fabrication,    
      children: [
        {
          path: 'fmodal',
          name: 'fmodal',
          component: Fmodal,
          beforeEnter(to,from,next) {
            if(Vue.$cookies.get("category") != undefined) {
              if(Vue.$cookies.get("category") == 'Worker') {
                window.location.href = "http://localhost:8080/dashboard";
              } else {
                next()
              }
            }
            else {
              window.location.href = "http://localhost:8080/login";
            }
          } 
        },       
      ]
    },
    { 
      path: '/services/photography', 
      component: Photography,    
      children: [
        {
          name: 'phmodal',
          path: 'phmodal',
          component: Phmodal,
          beforeEnter(to,from,next) {
            if(Vue.$cookies.get("category") != undefined) {
              if(Vue.$cookies.get("category") == 'Worker') {
                window.location.href = "http://localhost:8080/dashboard";
              } else {
                next()
              }
            }
            else {
              window.location.href = "http://localhost:8080/login";
            }
          } 
        },       
      ]
    },
    { 
      path: '/services/painting', 
      component: Painting,    
      children: [
        {
          name: 'pamodal',
          path: 'pamodal',
          component: Pamodal,
          beforeEnter(to,from,next) {
            if(Vue.$cookies.get("category") != undefined) {
              if(Vue.$cookies.get("category") == 'Worker') {
                window.location.href = "http://localhost:8080/dashboard";
              } else {
                next()
              }
            }
            else {
              window.location.href = "http://localhost:8080/login";
            }
          } 
        },       
      ]
    },
    { 
      path: '/services/electrical-and-wiring', 
      component: Electrical,    
      children: [
        {
          name: 'eemodal',
          path: 'eemodal',
          component: Eemodal,
          beforeEnter(to,from,next) {
            if(Vue.$cookies.get("category") != undefined) {
              if(Vue.$cookies.get("category") == 'Worker') {
                window.location.href = "http://localhost:8080/dashboard";
              } else {
                next()
              }
            }
            else {
              window.location.href = "http://localhost:8080/login";
            }
          }           
        },       
      ]
    },
    { 
      path: '/services/pest-control', 
      component: Pestcontrol,    
      children: [
        {
          name: 'pcmodal',
          path: 'pcmodal',
          component: Pcmodal,
          beforeEnter(to,from,next) {
            if(Vue.$cookies.get("category") != undefined) {
              if(Vue.$cookies.get("category") == 'Worker') {
                window.location.href = "http://localhost:8080/dashboard";
              } else {
                next()
              }
            }
            else {
              window.location.href = "http://localhost:8080/login";
            }
          } 
        },       
      ]
    },
    {
      path: '/services/cart',
      name: 'cart',
      component: cart,
      beforeEnter(to,from,next) {
        if(Vue.$cookies.get("category") != undefined) {
          if(Vue.$cookies.get("category") == 'Worker') {
            window.location.href = "http://localhost:8080/dashboard";
          } else {
            next()
          }
        }
        else {
          window.location.href = "http://localhost:8080/login";
        }
      }, 
      children: [
        {
          path: 'checkout',
          name: 'checkout',
          component: checkout,
        }
      ]
    },
    {
      path: '/processpayment',
      name: 'processpayment',
      component: ProcessPayment
    },
    {
      path: '/orderstatus',
      name: 'orderstatus',
      component: OrderStatus
    },
    {
      path: '/paymentstatus',
      name: 'paymentstatus',
      component: PaymentStatus
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
        },
        {
          path: 'mwchild',
          name: 'mwchild',
          component: mwchild,
          props: true
        },        
        {
          path: 'myprofile',
          name: 'myprofile',
          component: myprofile,
          props: true
        },
        {
          path: 'changeAvatar',
          name: 'changeAvatar',
          component: ChangeAvatar
        }                              
      ],
      beforeEnter (to, from, next) {
        if(Vue.$cookies.get("pid")==undefined) {
          alert("Access Denied! Please login!");
          window.location.href = "http://localhost:8080/login";
        }
        else if(Vue.$cookies.get("category") == "Customer") {
          window.location.href = "http://localhost:8080/customerdashboard";
        }
        else if(Vue.$cookies.get("category") == "Company") {
          window.location.href = "http://localhost:8080/companydashboard"; //To be done in future.
        }
        else {
          next();
        }
      }
    },
    { 
      path: '/customerdashboard', 
      component: Cdashboard,
      beforeEnter(to,from,next) {
        if(Vue.$cookies.get("pid")==undefined) {
          alert("Access Denied! Please login!");
          window.location.href = "http://localhost:8080/login";
        }
        else if(Vue.$cookies.get("category") == "Worker") {
          window.location.href = "http://localhost:8080/dashboard";
        }
        else if(Vue.$cookies.get("category") == "Company") {
          window.location.href = "http://localhost:8080/companydashboard"; //To be done in future.
        }
        else {
          next();
        }
      },
      children: [
        {
          path: 'bookings',
          name: 'bookings',
          component: bookings,
          props: true
        },
        {
          path: 'bchild',
          name: 'bchild',
          component: bchild,
          props: true
        }, 
        {
          path: 'favorites',
          name: 'favorites',
          component: favorites,
          props: true
        }, 
        {
          path: 'notifications',
          name: 'notifications',
          component: notifications,
          props: true
        },                          
      ]  
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
    },          
  ]
})