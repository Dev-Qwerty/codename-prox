<template>
  <div class = "box-1">
    <form action="" method="POST">
      <div>
        <input type="text" name="code" id="code" placeholder="Enter confirmation code" v-model="code" class="input-box" v-validate="'required'">
      </div>
      <div>
        <span class="error-msg">{{ errors.first('code') }}</span>
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Confirm Code" @click.prevent="checkCode()">
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
     code: "",
     email: localStorage.getItem("email"),
     category: localStorage.getItem("category")
    }
  },
  methods: {
    checkCode() {
      this.category = this.category[0].toUpperCase() + this.category.slice(1);
      let url = "http://localhost:3000/"+this.category+"/confirmEmail";
      this.$http.post(url, {
        code: this.code,
        email: this.email
      })
      .then(response => {
        if(response.data.status == "Success") {
          localStorage.removeItem("email");
          localStorage.removeItem("category");
          window.location.href = "http://localhost:8080/login";
        }
        else {
          Vue.$toast.open({
                  message: response.data.error.message,
                  type: 'error',
                  position: 'bottom-left'
              });
        }
      })
    }
  }
}
</script>

<style scoped>    
  .box-1 {
    width: 45%;
    height: 30%;
    background-color: #fff;
    top: 11%;
    left: 28%;
    position: absolute;
    box-sizing: border-box;
    /*transform: translate(-50%, -50%);*/
    padding-top: 28px;
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
    margin-top: 2vw;
    margin-left: 13vw;
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
  .error-msg {
    font-size: 12px;
    color: red;
    font-weight: bold;
  }

</style>