<template>
  <div class="wcsignup">
    <div class="Mbg">
      <div class="sh-left">
        <div class="Mbox sh-bottom">
          <div class="leftPic">
          
          </div>
          <div class="right">
            <form class="inp" action="" method="">
              <div>
                <input class="input-box" type="Text" name="uname" placeholder="Full Name" v-model="username">
              </div>
              <div>
                <input class="input-box" type="email" name="uname" placeholder="Email" v-model="username">
              </div>              
              <div>
                <input class="input-box" type="text" name="contactno" placeholder="Phone Number" v-model="password">
              </div>
              <div>
                <input class="input-box" type="password" name="flatname" placeholder="Password" v-model="username">
              </div>  
              <div>
                <input class="input-box" type="password" name="flatname" placeholder="Confirm Password" v-model="username">
              </div>              
              <select name="jtitle" id="jtitle">
                <option value="worker">Worker</option>
                <option value="company">Company</option>
              </select>   
              <div>
              <div class="terms">
                <input type="checkbox" name="check1" value="">
                <label class="terms-label">I agree with terms and conditions</label>
              </div>                
                <router-link class="signupbtn" :to="{name: ''}" @click.native="paynowfn">
                  <input type="submit" value="Sign Up">
                </router-link> 
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


export default {
  name: 'wcSignup',
  components: { 
  },
  data() {
    return {
    }
  },
  methods: {
    signupfn() {
      
    }
  }
}
</script>

<style scoped>
  .Mbg {
    background-color: #eeefef;
    width:100%;
    height: 722px;
    padding-top: 3%;
    padding-left: 14%;
  }
  .Mbox {
    width: 85%;
    height: 630px;
    display: grid;
    grid-template-columns: 55% 45%;
  }  
  .sh-bottom {
    box-shadow: 0 5px 5px -6px #707070;
  }
  .sh-left {
    box-shadow: -5px 0 5px -6px #707070;
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
  .inp {
    margin-left: 80px;
    margin-top: 80px;
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
    margin-top: 20px;
    width: 40%;
    height: 30px;  
  }
  #jtitle {
    font-size: 14px;
  }
  .terms {
    font-size: 15px;
    margin-top: 20px;
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
    margin-left: 153px;
    margin-top: 50px;
    color: #000;
    font-size: 14px;
    text-decoration: underline;
  }

</style>