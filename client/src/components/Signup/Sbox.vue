<template>
  <div class = "box">
    <form method="POST">
      <div>
        <input class="input-box" type="email" name="email" placeholder="EMAIL" v-model="email">
      </div>
      <div>
        <input class="input-box" type="number" name="phoneno" placeholder="PHONENO" v-model="phone">
      </div>      
      <div>
        <input class="input-box" type="Password" name="password" placeholder="PASSWORD" v-model ="password">
      </div>
      <div>
        <label>Keep me signed in</label>
        <input type="checkbox" name="check1" value="">
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Sign up" @click.prevent="signUp()">
      </div>
      <div>
        <router-link class="" :to="{ path: '/gethired' }">
          <p class="prof">Are you a proffessional?</p>
        </router-link>  
      </div>
    </form>
          
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
      email: "",
      phone: 0,
      password: ""
    }
  },
  methods: {
    signUp() {
      if (this.password.length > 6) {
        let url = "http://localhost:3000/customer/signup";
        this.$http
          .post(url, {
            email: this.email,
            phone: this.phone,
            password: this.password
          })
          .then(response => {
            if(response.data.status == "Success") {
              window.location.href = "http://localhost:8080/login";
            }
            else {
              Vue.$toast.open({
                  message: 'Network Error!',
                  type: 'error',
                  position: 'bottom-left'
              });
            }
          })
          .catch(error => {
            Vue.$toast.open({
                  message: error,
                  type: 'error',
                  position: 'bottom-left'
              });
          });
      } 
      else {
              Vue.$toast.open({
                  message: 'Password should be more than 6 characters!',
                  type: 'warning',
                  position: 'bottom-left'
              });
      }
    }
    }
  }
</script>

<style scoped>    
  .box {
    width: 33%;
    height: 70%;
    background-color: #fff;
    top: 59%;
    left: 50%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 100px;
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
  .prof {
    margin-top: 10px;
    font-size: 15px;
    color: #000;
  }
</style>