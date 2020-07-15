<template>
  <div class="Wrapper">
    <div class="a">
      <div class="aa">
        <div class="aaa">
          <p class="aaa-p1">{{ sr.service.subserviceName }}</p>
          <p class="aaa-p2"><span>Order ID:  </span>{{ sr._id }}</p>
          <p class="aaa-p3"><span>Amount:  </span><span>$</span>{{ sr.totalAmount }}</p>
        </div>
        <div class="aab">
          <div class="aab-top">
            <p>Categories</p>
          </div>
          <div class="aab-body">
            <div class="aab-boxes">
              <div v-for="(arr, index) in sr.service.categories" :key="index">
                <div class="aab-box">
                  <div class="aab-box-col1">
                    <p>{{ arr.category }}</p>
                  </div>
                  <div class="aab-box-col2">
                    <p>{{ arr.quantity }}</p>
                  </div>
                </div> 
              </div>              
            </div>                                                                                      
          </div>
        </div>
      </div>
      <div class="ab">
        <div class="aba">
          <div class="aba-top">
            <p>Contact Details</p>
          </div>
          <div class="aba-body">
            <p>{{ sr.address.name }}</p>
            <p>{{ sr.address.line1 }}</p>
            <p>{{ sr.address.line1 }}</p>
            <p>{{ sr.address.district }}</p>
            <p><span id="pin">Pin:</span>{{ sr.address.pin }}</p>
            <p><span id="phone">Phone:</span>{{ sr.address.phone }}</p>
          </div>
        </div>
        <div class="abb">
          <p>{{ sr.date }}</p>
          <p>02:30 PM</p>
        </div>
      </div>
    </div>
    <div class="happy-code">
      <div class="hc-line"></div>
      <input v-if="this.xvar == 'arrived'" :disabled="(this.yvar == 'start')" type="submit" value="Arrived" class="btn" @click="afn()">
      <input v-if="this.xvar == 'completed'" :disabled="(this.yvar == 'end')" type="submit" value="Completed" class="btn" @click="afn()">     
      <div class="inwrapper" v-if="this.yvar == 'start'">
        <p class="inwrapper-hdn">Enter the start token</p>
        <input type="text" v-model="start_token">
        <div class="inwrapper-btn">
          <input type="submit" value="Start Work" @click="bfn()">
        </div>
      </div>
      <div class="inwrapper" v-if="this.yvar == 'end'">
        <p class="inwrapper-hdn">Enter the end token</p>
        <input type="text" v-model="end_token">
        <div class="inwrapper-btn">
          <input type="submit" value="Confirm" @click="bfn()">  
        </div>
      </div>
      <!--<div v-if="this.xvar == 'done'">
        <p class="inwrapper-end">Work completed successfully!!!</p> 
      </div>-->  
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  components: {
  },
  data() {
    return {
      sr: this.$cookies.get("wd-mw-child"),
      xvar: this.$cookies.get("xvar"),
      yvar: this.$cookies.get("yvar"),
      start_token: '',
      end_token: ''
    }
  },
  methods: { 
    afn() {
      if(this.xvar == 'arrived') {
        let url = this.$serverURLI + "/orderstatus/changestatus"
        this.$http
        .post(url, {
          orderID: this.sr._id,
          status: "arrived"
        }).then(response => {
          if(response.status == 200 && response.data == 'status changed'){
            Vue.$toast.open({
              message: response.data,
              type: 'success',
              position: 'bottom-left'
            });             
            this.yvar = 'start'
            this.$cookies.set("yvar", this.yvar, "1d");                         
          } else {
            Vue.$toast.open({
              message: "Something went wrong",
              type: 'error',
              position: 'bottom-left'
            });    
          }
        }).catch(error => {
          alert(error)
        })
      } else if(this.xvar == 'completed') {
        let url = this.$serverURLI + "/orderstatus/changestatus"
        this.$http
        .post(url, {
          orderID: this.sr._id,
          status: "completed"
        }).then(response => {
          if(response.status == 200 && response.data == 'status changed'){
            Vue.$toast.open({
              message: response.data,
              type: 'success',
              position: 'bottom-left'
            });              
            this.yvar = 'end'
            this.$cookies.set("yvar", this.yvar, "1d");                      
          } else {
            Vue.$toast.open({
              message: "Something went wrong",
              type: 'error',
              position: 'bottom-left'
            });   
          }
        }).catch(error => {
          alert(error)
        })
      } else {
        this.yvar = 'confirm'
        this.$cookies.set("yvar", this.yvar, "1d");
      } 
    },
    bfn() {
      if(this.xvar == 'arrived') {     
        let url = this.$serverURLI + "/orderstatus/verifytoken"
        this.$http
        .post(url, {
          orderID: this.sr._id,
          token: this.start_token
        }).then(response => {
          if(response.status == 200){
            if(response.data.message == 'Work has been arrived') {
              Vue.$toast.open({
                message: response.data,
                type: 'success',
                position: 'bottom-left'
              });               
              this.xvar = 'completed'
              this.$cookies.set("xvar", this.xvar, "1d");
              this.yvar = 'qw'
              this.$cookies.set("yvar", this.yvar, "1d");              
            } else {
              Vue.$toast.open({
                message: "Incorrect token!",
                type: 'error',
                position: 'bottom-left'
              }); 
            }     
          } else {
            Vue.$toast.open({
              message: "Something went wrong",
              type: 'error',
              position: 'bottom-left'
            }); 
          }          
        }).catch(error => {
          alert(error)
        })     
        /*this.xvar = 'completed'
        this.$cookies.set("xvar", this.xvar, "1d");
        this.yvar = 'qw'
        this.$cookies.set("yvar", this.yvar, "1d");*/
      } else if(this.xvar == 'completed') {
        let url = this.$serverURLI + "/orderstatus/verifytoken"
        this.$http
        .post(url, {
          orderID: this.sr._id,
          token: this.end_token
        }).then(response => {
          if(response.status == 200){
            if(response.data.message == 'Work has been completed') {
              Vue.$toast.open({
                message: response.data,
                type: 'success',
                position: 'bottom-left'
              });                   
              this.xvar = 'done'
              this.$cookies.set("xvar", this.xvar, "1d");
              this.yvar = 'qw121'
              this.$cookies.set("yvar", this.yvar, "1d"); 
              window.location.href = this.$serverURLI + "/customerdashboard/myworks";
            } else {
              Vue.$toast.open({
                message: "Incorrect token!",
                type: 'error',
                position: 'bottom-left'
              }); 
            }     
          } else {
            Vue.$toast.open({
              message: "Something went wrong",
              type: 'error',
              position: 'bottom-left'
            }); 
          } 
        }).catch(error => {
          alert(error)
        }) 
        /*this.xvar = 'done'
        this.$cookies.set("xvar", this.xvar, "1d");
        this.yvar = 'qw121'
        this.$cookies.set("yvar", this.yvar, "1d");*/
      } else {
        this.xvar = 'qw121'
        this.$cookies.set("xvar", this.xvar, "1d");
        this.yvar = 'qw121'
        this.$cookies.set("yvar", this.yvar, "1d");
      }
    }
  },
  created() {
    
  }
}       
</script>

<style scoped>
  .Wrapper {
    padding-left: 3%;
    padding-top: 3%;
  }
  .a {
    width: 90%;
    display: grid;
    grid-template-columns: 60% 40%;
  }
  .aa {
    display: grid;
    grid-template-rows: 170px max-content;
    margin-right: 25px;
  }
  .aaa {
    /*box-shadow: 0 0 8px #DBDBDB;*/
    box-shadow: -5px 5px 5px #DBDBDB;
    border: 1px solid #DBDBDB;
    background-color: #fff;
    color: #000;
    padding-left: 8%;
    padding-top: 4%;
    margin-bottom: 25px;
  }
  .aaa-p1 {
    font-family: lato-bold;
    font-size: 23px;
  }
  .aaa-p2 {
    margin-top: -8px;
    font-size: 15px;
  }
  .aaa-p3 {
    margin-top: -15px;
    font-size: 15px;
  }  
  .aab {
    background-color: #fff;
    box-shadow: -5px 5px 5px #DBDBDB;
    border: 1px solid #DBDBDB;
  }
  .aab-top {
    width: 22%;
    height: 35px;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding-top: 5px;
  }
  .aab-body {
    padding-left: 5%;
    padding-top: 5%;
  }
  .aab-boxes {
    margin-bottom: 40px;
  }
  .aab-box {
    width: 80%;
    height: 50px;
    border: 1px solid #DBDBDB;
    box-shadow: -5px 5px 5px #DBDBDB;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
  .aab-box-col1 {
    border-right: 1px solid #DBDBDB;
    padding-left: 5%;
    padding-top: 10px;
  }
  .aab-box-col2 {
    padding-left: 10%;
    padding-top: 10px;
  }
  .ab {
    height: 400px;
    grid-template-rows: 75% 25%;
    display: grid;
  }
  .aba {
    /*border: 1px solid #000*/
    box-shadow: -5px 5px 5px #DBDBDB;
    border: 1px solid #DBDBDB;
    background-color: #fff;
    margin-bottom: 25px;
  }
  .aba-top {
    width: 40%;
    height: 35px;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding-top: 5px;
  }
  .aba-body {
    padding-left: 5%;
    padding-top: 5%;
  }
  .aba-body p {
    margin-bottom: 10px;
  }
  #pin {
    margin-right: 5px;
  }
  #phone {
    margin-right: 5px;
  }
  .abb {
    box-shadow: -5px 5px 5px #DBDBDB;
    border: 1px solid #DBDBDB;
    background-color: #fff;
    padding-left: 5%;
    padding-top: 5%;
  }
  .abb p {
    margin-bottom: 8px;
  }
  .happy-code {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .hc-line {
    width: 90%;
    height: 3px;
    background-color: #DBDBDB;
  }
  .btn {
    margin-top: 10px;
    width: 180px;
    height: 40px;
    background-color: #000;
    color: #fff;
    border-right: 20px;
    box-shadow: -4px 4px 4px #DBDBDB;
    /*border: 1px solid #DBDBDB;*/
  }
  .inwrapper{
    margin-top: 10px;
    margin-left: 50px;
  }
  .inwrapper-hdn {
    font-size: 17px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .inwrapper-btn input[type=submit] {
    margin-top: 15px;
    background-color: #fff;
    color: #000;
    border: 1px solid #000
  }
  .inwrapper-end {
    margin-top: 30px;
    font-size: 20px;
  }
</style>