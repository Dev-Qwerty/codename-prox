<template>
  <div class = "box" v-if="notSentEmail">
    <form action="" method="POST">
      <div>
        <input class="input-box" type="email" name="email" placeholder="Enter registered email" v-model="email">
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Send Verification Code" @click.prevent="sendEmail()">
      </div>
    </form>
      <div v-if="errorstatus" class="errormsg">
       <span>{{ errormsg }}</span>
       </div>
  </div>
  <div class = "box-1" v-else>
    <form action="" method="POST">
      <div>
        <input class="input-box" type="text" placeholder="Enter verification code" v-model="code">
      </div>
      <div>
        <input class="input-box" type="password" placeholder="Enter new password" v-model="password">
      </div>
      <div>
        <input class="input-box" type="password" placeholder="Confirm new password" v-model="password1">
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Reset password" @click.prevent="verifyCode()">
      </div>
    </form>
      <div v-if="errorstatus" class="errormsg">
       <span>{{ errormsg }}</span>
       </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errormsg: "",
      code: "",
      notSentEmail: true,
      errorstatus: false,
      captchastatus: false,
      password1: ""
    }
  },
  methods: {
    sendEmail() {
      let url = "http://localhost:3000/auth/forgotPassword";
      this.$http.post(url, {
        email: this.email
      })
      .then(response => {
        if(response.data.status == "Error") {
          this.errormsg = response.data.error;
          this.errorstatus = true;
        }
        else {
          this.notSentEmail = false;
          alert("Email sent to: "+ this.email + "Please check for getting the verification code.");
        }
      })
    },
    verifyCode() {
      let url = "http://localhost:3000/auth/confirmFPassword";
      this.$http.post(url, {
        email: this.email,
        password: this.password,
        code: this.code
      })
      .then(response => {
        if(response.data.status == "Error") {
          this.errorstatus = true;
          this.errormsg = response.data.error;
        }
        else {
          alert("Password reset successfully!");
          window.location.href = "http://localhost:8080/login";
        }
      })
    }
  },
}
</script>

<style scoped>    
  .box {
    width: 50%;
    height: 55%;
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
  .box-1 {
    width: 50%;
    height: 60%;
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

  .box-1 label {
    font-size: 14px;
    padding-top: 15px;
    padding-right: 12px;
    padding-bottom: 15px;
  }
  input[type="submit"] {
    width: 35%;
    background-color: #000;
    border: none;
    color: #fff;
    height: 40px;
    opacity: 0.9;
    border-radius: 3px;
    box-shadow: 5px 5px #eeefef;
    font-size: 19px;
    margin-top: 1vw;
    margin-left: 15vw;
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