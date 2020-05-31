<template>
  <div class = "box">
    <form action="" method="POST">
      <div>
        <input class="input-box" type="text" name="uname" placeholder="USERNAME" v-model="username">
      </div>
      <div>
        <input class="input-box" type="Password" name="password" placeholder="PASSWORD" v-model="password">
      </div>
      <div>
        <label>Keep me signed in</label>
        <input type="checkbox" name="check1" value="">
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Sign in" @click.prevent="login()">
        <recaptcha ref="recaptcha" @verify="captchaVerified()"></recaptcha>
      </div>
    </form>
      <div v-if="errorstatus" class="errormsg">
       <span>{{ errormsg }}</span>
       </div>
       <div v-if="invalidCategory">
         <p>Select your category:</p>
         <button class= "category-btn">Worker</button>
         <button class = "category-btn">Company</button>
       </div>
  </div>
</template>

<script>
import Vue from 'vue'
import recaptcha from '@/components/reCaptcha/recaptcha.vue'
export default {
  data() {
    return {
      username: "",
      password: "",
      errormsg: "",
      errorstatus: false,
      captchastatus: false,
      invalidCategory: false
    }
  },
  methods: {
    captchaVerified() {
      this.captchastatus = true;
      if(this.captchastatus == false) {
        Vue.$toast.open({
          message: 'Please select captcha',
          type: 'error',
          position: 'bottom-left'
        });
      }
      else {
        if (this.password.length > 6) {
        let url = "http://localhost:3000/customer/login";
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
            let verifyURL = "http://localhost:3000/customer/verifyCategory";
            const username = response.data.username;
            const jwtToken = response.data.jwt;
            this.$http
            .post(verifyURL, {
              userID: username
            })
            .then(responses => {
              if(responses.data.status == "Success") {
                this.$cookies.set("username", username, '1d');
                this.$cookies.set("pid", jwtToken, '1d');
                this.$session.start();
                this.$session.set('jwt', jwtToken);
                window.location.href = "http://localhost:8080/dashboard";
              }
              else {
                this.invalidCategory = true;
                Vue.$toast.open({
                  message: 'Invalid category!',
                  type: 'error',
                  position: 'bottom-left'
              });
              }
            })
          
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
    login() {
      this.$refs.recaptcha.execute();
    },
  },
  components: { recaptcha }
}
</script>

<style scoped>    
  .box {
    width: 33%;
    height: 65%;
    background-color: #fff;
    top: 63%;
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
</style>