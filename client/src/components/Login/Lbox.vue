<template>
  <div class = "box">
    <form action="" method="POST" id="login-form">
      <div>
        <input class="input-box" type="text" name="username" placeholder="USERNAME" v-model="username" v-validate="'email|required'">
      </div>
      <div>
        <span class="error-msg">{{ errors.first('username') }}</span>
      </div>
      <div>
        <input class="input-box" type="Password" name="password" placeholder="PASSWORD" v-model="password">
      </div>
      <div>
        <label>Keep me signed in</label>
        <input type="checkbox" name="check1" value="">
      </div>
      <div>
        <vue-recaptcha sitekey="6LfMy68ZAAAAAGJw_zxdSShPDWXh8qkGeOZL37SC" @verify="onCaptchaVerified">
        <input class="sbutton" type="submit" name="" value="Sign in" @click.prevent="onCaptchaVerified">
        </vue-recaptcha>
      </div>
    </form>
      <div v-if="errorstatus" class="errormsg">
       <span>{{ errormsg }}</span>
       </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRecaptcha from 'vue-recaptcha'
export default {
  data() {
    return {
      username: "",
      password: "",
      errormsg: "",
      errorstatus: false,
      captchastatus: false,
    }
  },
  methods: {
    onCaptchaVerified() {
      this.captchastatus = true;
      this.login();
    /*  let url = "http://localhost:3000/auth/verifyToken";
      this.$http.post(url, {
        response: rtoken
      })
      .then(response => {
        if(response.data.success == true) {
          this.captchastatus = true;
          this.login();
        }
        else {
        Vue.$toast.open({
          message: 'Captcha Verified!',
          type: 'success',
          position: 'bottom-left'
        });  
        }
      })
      .catch(error => {
        Vue.$toast.open({
          message: error,
          type: 'warning',
          position: 'bottom-left'
        });
      })*/
    },
    login() {
      if(this.captchastatus == false) {
        Vue.$toast.open({
          message: 'Please select captcha',
          type: 'error',
          position: 'bottom-left'
        });
      }
      else {
        if (this.password.length > 6) {
        let url = "http://localhost:3000/auth/login";
        this.$http
          .post(url, {
            username: this.username,
            password: this.password
          })
          .then(response => {
            if(response.data == "NotAuthorizedException") {
              Vue.$toast.open({
                message: 'Invalid username or password!',
                type: 'error',
                position: 'bottom-left'
              });
            }
            if(response.data == "UserNotConfirmedException") {
              Vue.$toast.open({
                message: 'Please confirm your email!',
                type: 'warning',
                position: 'bottom-left'
              });
            }
            if(response.data.status == "Success") {
              if(response.data.completedProfile == false) {
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("phoneNo", response.data.phoneNo);
                localStorage.setItem("category", response.data.category);
                const username = response.data.username;
                const jwtToken = response.data.jwt;
                this.$cookies.set("username", username, '1d');
                    this.$cookies.set("pid", jwtToken, '1d');
                    this.$session.start();
                    this.$session.set('jwt', jwtToken);
                    this.$cookies.set("id", response.data.id);
                    this.$cookies.set("category", response.data.category);
                    window.location.href = location.protocol + "//"+ location.host + "/completeProfile";
               }
               else {
                const username = response.data.username;
                const jwtToken = response.data.jwt;
                this.$cookies.set("username", username, '1d');
                    this.$cookies.set("pid", jwtToken, '1d');
                    this.$session.start();
                    this.$session.set('jwt', jwtToken);
                    this.$cookies.set("id", response.data.id);
                    this.$cookies.set("category", response.data.category);
                    if(response.data.category == "Customer") {
                      if(this.$cookies.get("ccr")!=null) {
                        window.location.href = decodeURIComponent(this.$cookies.get("ccr"));
                      }
                      else {
                        window.location.href = location.protocol + "//"+ location.host + "/customerdashboard";
                      }
                    }
                    else {
                      window.location.href = location.protocol + "//"+ location.host + "/dashboard";
                    }
               }            
            }
          })
          .catch(function(error) {
            Vue.$toast.open({
                  message: error,
                  type: 'error',
                  position: 'bottom-left'
              });
          });
        }
      }
    },
  },
  components: { VueRecaptcha }
}
</script>

<style scoped>    
  .box {
    width: 33%;
    height: 60vh;
    background-color: #fff;
    top: 58%;
    left: 50%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 110px;
    padding-bottom: 5px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px #ceced1
  }
  input[type="submit"] {
    width: 100%;
    background-color: #000;
    border: none;
    color: #fff;
    height: 40px;
    opacity: 0.9;
    border-radius: 3px;
    box-shadow: 5px 5px #eeefef;
    font-size: 19px;
  }
  .input-box {
    font-size: 14px;
    width: 100%;
    padding-left: 15px;
    margin-top: 30px;
    height: 50px;
    border: 1px solid #dedee0;
    box-shadow: 4px 4px #eeefef;
  }
  .box label {
    font-size: 14px;
    padding-top: 15px;
    padding-right: 12px;
    padding-bottom: 15px;
  }
  .errormsg {
    margin-top: 0.5vw;
    color: red;
    background-color: #FFE0E0;
    font-weight: bold;
    width: 16vw;
    border-radius: 10px;
  }
  .category-btn {
    background: #000;
    color: #fff;
    width: 100px;
    border-radius: 3px;
  }
  .error-msg {
    font-size: 12px;
    color: red;
    font-weight: bold;
  }
</style>