<template>
  <div class = "box-1">
    <form action="" method="POST">
      <div>
        <input type="text" name="line1" id="line1" placeholder="Address Line 1*" v-model="line1" class="input-box">
      </div>
      <div>
        <input type="text" name="line2" id="line2" v-model="line2" class="input-box" placeholder="Line 2">
      </div>
      <div>
        <input type="text" name="city" id="city" v-model="city" class="input-box" placeholder="City">
      </div>
      <div>
        <input type="text" name="district" id="district" v-model="district" class="input-box" placeholder="District*">
      </div>
      <div>
        <input type="text" name="state" id="state" v-model="state" class="input-box" placeholder="State*">
      </div>
      <div>
        <input type="text" name="pincode" id="pincode" v-model="pincode" class="input-box" placeholder="Pin Code*">
      </div>
      <div>
        <p>* - Required fields</p>
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Continue" @click.prevent="addAddress()">
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
      line1: "",
      line2: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
      category: localStorage.getItem('category'),
      address: {}
    }
  },
  methods: {
    addAddress() {
      this.address.line1 = this.line1;
      this.address.line2 = this.line2;
      this.address.city = this.city;
      this.address.district = this.district;
      this.address.state = this.state;
      this.address.pincode = this.pincode;
      let url = 'http://localhost:3000/'+this.category+'/addAddress';
      this.$http.post(url,{
        token: this.$cookies.get("pid"),
        id: this.$cookies.get('id'),
        address: this.address,
        completedProfile: true
      })
      .then(response => {
        if(response.data.status == "Success") {
          if(this.category == "Customer" || this.category == "customer") {
            window.location.href = "http://localhost:8080/customerdashboard";
          }
          else {
          window.location.href = "http://localhost:8080/dashboard";
          }
        }
        else {
          Vue.$toast.open({
                  message: 'Error!',
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
    height: 85%;
    background-color: #fff;
    top: 11%;
    left: 28%;
    position: absolute;
    box-sizing: border-box;
    /*transform: translate(-50%, -50%);*/
    padding-top: 15px;
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
    margin-top: 10px;
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
</style>