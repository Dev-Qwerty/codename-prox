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
                <input class="input-box" type="email" name="uname" placeholder="Email" v-model="username">
              </div>
              <div>
                <input class="input-box" type="text" name="contactno" placeholder="Phone Number" v-model="password">
              </div>
              <div>
                <input class="input-box" type="password" name="flatname" placeholder="Password" v-model="username">
              </div>  
              <select name="jtitle" id="jtitle">
                <option value="worker">Worker</option>
                <option value="company">Company</option>
              </select>                      
            </form>              
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
    height: 610px;
    display: grid;
    grid-template-columns: 60% 40%;
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
    margin-left: 60px;
    margin-top: 50px;
  }
  .inp .input-box {
    font-size: 15px;
    width: 80%;
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
</style>