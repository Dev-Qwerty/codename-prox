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
        <vue-recaptcha sitekey="6LfsCfYUAAAAAEKiFDDFZW9yqlCZpd3G3EFoDy2w" size="invisible" :loadRecaptchaScript="true" @verify="captchaVerified()">
        <input class="sbutton" type="submit" name="" value="Sign in" @click.prevent="login()">
        </vue-recaptcha>
      </div>
      <div>
        
      </div>
    </form>
      <div v-if="errorstatus" class="errormsg">
       <span>{{ errormsg }}</span>
       </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
export default {
  data() {
    return {
      username: "",
      password: "",
      errormsg: "",
      errorstatus: false,
      captchastatus: false
    }
  },
  methods: {
    captchaVerified() {
      this.captchastatus = true;
      if(this.captchastatus == false) {
        this.errorstatus = true;
        this.errormsg = "Please select Captcha"
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
              this.errorstatus = true;
              this.errormsg = "Invalid username or password!";
            }
            if(response.data == "UserNotConfirmedException") {
              this.errorstatus = true;
              this.errormsg = "Please confirm your email!"
            }
            this.$cookies.set("username", response.data.idToken.payload.sub, '1d');
            this.$cookies.set("jwt", response.data.idToken.jwtToken, '1d');
            window.location.href = "http://localhost:8080/dashboard";
            
          })
          .catch(function(error) {
            this.errorstatus = true;
            this.errormsg = error;
          });
        }
      }
    },
    login() {
      this.$refs.recaptcha.execute();
    },
  },
  components: { VueRecaptcha }
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
</style>