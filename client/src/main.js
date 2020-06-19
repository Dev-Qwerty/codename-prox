/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Axios from "axios"
import VueCookies from 'vue-cookies'
import VueSession from 'vue-session'
import VueCryptojs from 'vue-cryptojs'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
VeeValidate.Validator.extend('verify_password', {
  getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
  validate: value => {
      var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      return strongRegex.test(value);
  }
});

//For Cookie Handling
Vue.use(VueCookies)
Vue.$cookies.config('7d')

//For sessions
Vue.use(VueSession)

//For encryption
Vue.use(VueCryptojs)

//For toast notification
Vue.use(VueToast)

Vue.prototype.$http = Axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
