<template>
  <div class="wcsignup">
    <div class="Mbg">
      <router-link :to="{ path: '/gethired' }">
        <div class="top-box">
          <div class="arrowIcon"></div>
          <h3></h3>
        </div>      
      </router-link>      
      <div class="sh-left">
        <div class="Mbox sh-bottom">
          <div class="leftPic">
          
          </div>
          <div class="right">
            <p class="wchdn">Urban Associates</p>
            <form class="inp" action="" method="">
              <div>
                <input class="input-box" type="email" name="uname" placeholder="Email" v-model="email">
              </div>              
              <div>
                <input class="input-box" type="text" name="contactno" placeholder="Phone Number" v-model="phone">
              </div>
              <div>
                <input class="input-box" type="password" name="flatname" placeholder="Password" v-model="password">
              </div>  
              <div>
                <input class="input-box" type="password" name="flatname" placeholder="Confirm Password" v-model="password2">
              </div>              
              <select name="jtitle" id="jtitle" v-model="category">
                <option value="worker">Worker</option>
                <option value="company">Company</option>
              </select>   
              <div>
              <div class="terms">
                <input type="checkbox" name="check1" id="checkbox" value="">
                <label class="terms-label">I agree with terms and conditions</label>
              </div>                
              <div class="signupbtn">
                  <input type="submit" value="Sign Up" @click.prevent="signupfn()">
              </div> 
              </div>                                 
            </form> 
            <div>
              <router-link class="" :to="{ path: '/login' }">
                <p class="wcsignin">Already have an account? Sign in.</p>
              </router-link>  
            </div>                         
          </div>      
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import Vue from 'vue';

export default {
  name: 'wcSignup',
  components: { 
  },
  data() {
    return {
      email: "",
      phone: 0,
      password: "",
      password2: "",
      category: ""
    }
  },
  methods: {
    signupfn() {
      if((this.password == this.password2) && (this.password.length>6)) {
        if(document.getElementById('checkbox').checked == true) {
          let url = "http://localhost:3000/"+this.category+'/signup';
          this.$http.post(url, {
            email: this.email,
            password: this.password,
            phoneNo: this.phone
          })
          .then(response=> {
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
          .catch(error=>{
            Vue.$toast.open({
                  message: error,
                  type: 'error',
                  position: 'bottom-left'
              });
          })
        }
      }
    }
  }
}
</script>

<style scoped>
  .Mbg {
    background-color: #eeefef;
    width:100%;
    height: 722px;
    padding-top: 55px;
    padding-left: 13%;
  }
  .Mbox {
    width: 85%;
    height: 615px;
    display: grid;
    grid-template-columns: 55% 45%;
  }  
  .top-box {
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    background-color: #000;
    width: 66px; 
    box-sizing: border-box;
    padding-left: 20px;
    padding-top: 10px;
    display: flex;
  }
  .arrowIcon {
    margin-top: 3px;
    width: 20px;
    height: 20px;
    background-image: url(../../assets/arrow.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;    
  }  
  .top-box h3 {
    margin-top: 2px;
    margin-left: 15px;
    color: #aaa;
    font-style: italic;
    font-size: 21px;
  }  
  .sh-bottom {
    box-shadow: 0 5px 15px -6px #707070;
  }
  .sh-left {
    box-shadow: -5px 0 5px -6px #707070;
  }    
  .ys-sh-all {
    box-shadow: 0 0 5px #DBDBDB;
  }  
  .leftPic {
    margin: 0px;
    width: 100%;
    background-image: url(../../assets/wcsignup.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;  
  }
  .right {
    background-color: #fff;
  }
  .wchdn {
    font-size: 25px;
    color: #000;
    text-align: center;
    margin-top: 50px;
  }  
  .inp {
    margin-left: 90px;
    margin-top: 20px;
  }
  .inp .input-box {
    font-size: 15px;
    width: 78%;
    margin-top: 20px;
    border-right: none;
    border-top: none;
    border-left: none; 
    border-bottom: 1px solid #aaa;
    height: 30px;  
  } 
  .inp select {
    margin-top: 30px;
    width: 40%;
    height: 30px;  
  }
  #jtitle {
    font-size: 14px;
  }
  .terms {
    font-size: 15px;
    margin-top: 30px;
  }  
  .terms-label {
    margin-left: 10px;
  }
  .signupbtn input[type="submit"]{
    margin-left: 110px;
    margin-top: 40px;
    font-size: 15px;
    width: 30%;
    height: 40px;
    border: none;
    color: #fff;
    background-color: black;
    border-radius: 5px;
  }  
  .wcsignin {
    margin-left: 160px;
    margin-top: 50px;
    color: #000;
    font-size: 14px;
    text-decoration: underline;
  }

</style>