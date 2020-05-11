<template>
  <div class = "box" v-if="notSentEmail">
    <form action="" method="POST">
      <div>
        <input class="input-box" type="emails" name="email" placeholder="Enter registered email" v-model="username">
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Send Verification Code">
      </div>
    </form>
      <div v-if="errorstatus" class="errormsg">
       <span>{{ errormsg }}</span>
       </div>
  </div>
  <div class = "box" v-else>
    <form action="" method="POST">
      <div>
        <input class="input-box" type="text" name="uname" placeholder="Enter verification code" v-model="code">
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Verify">
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
      username: "",
      password: "",
      errormsg: "",
      code: "",
      notSentEmail: true,
      errorstatus: false,
      captchastatus: false
    }
  },
  methods: {
    
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