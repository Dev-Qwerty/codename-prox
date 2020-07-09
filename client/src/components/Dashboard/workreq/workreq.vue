<template>
  <div class="wr-wrapper">
    <div class="wr-grid">
      <div class="incomming-req">
        <p class="ir-header">Incomming Requests</p>

        <div v-for="sr in reqarr" v-bind:key="sr.orderID">

          <div class="ir-box sh-bottom">
            <div class="ir-box-one sh-left" data-toggle="collapse" :href="'#cid-'+sr.requestID">
              <p class="ir-box-one-one">{{ sr.service.subserviceName }}</p>
              <!--<p class="ir-box-one-two">9:30 AM, May 10, Kanjirappally</p>-->
            </div>
            <div class="ir-box-two">
              <p class="ir-box-two-one">00:00</p>
            </div>
            <div class="ir-box-three" @click="acceptfn(sr)">
              <div class="ir-box-three-img"></div>
            </div>
            <div class="ir-box-four" @click="declinefn(sr)">
              <div class="ir-box-four-img"></div>
            </div>                       
          </div> 
          <div :id="'cid-'+sr.requestID" class="collapse c-body  c-body-ys-sh-all">
            <div class="c-r">
              <p class="c-r-1">Place:</p>
              <P class="c-r-2">{{ sr.place }}</p>
            </div>            
            <div class="c-r">
              <p class="c-r-1">Date:</p>
              <P class="c-r-2">{{ sr.date }}</p>
            </div>
            <div class="c-r">
              <p class="c-r-1">Time:</p>
              <P class="c-r-2">{{ sr.time }}</p>
            </div> 
            <div class="c-r">
              <p class="c-r-1">Due:</p>
              <P class="c-r-2">{{ sr.dueDate }}</p>
            </div>             
            <div class="c-r">
              <p class="c-r-1">Amount:</p>
              <P class="c-r-2">{{ sr.amount }}</p>
            </div>
            <div class="c-r1">
              <p class="c-r1-hding">Categories:</p>
              <div v-for="(srq, index) in sr.service.categories" :key="index">
                  <div class="c-r1-1">
                    <p class="c-r1-1-1">{{ srq.category }}</p>
                    <p class="c-r1-1-2">{{ srq.quantity }}</p>
                  </div>                                 
              </div>
            </div>                       
          </div>   

        </div>                 
      
      </div>
      <div class="your-schedule">
        <p class="ys-header">Your Schedule</p>
        <div class="ys-box ys-sh-all">
          <div v-for="sr in reqarr" v-bind:key="sr.orderID">
            <div class="ys-box-inwrapper">
              <p class="ys-box-one">{{ sr.date }}  {{ sr.time }}</p>
              <p class="ys-box-two">{{ sr.service.subserviceName }}</p>
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
  data() {
    return {
      wid: this.$cookies.get("id"),
      reqarr: []
    }
  },
  methods: {
    apiCall() {
      let url = 'http://localhost:3000/request/workrequest/' + this.wid
      this.$http.get(url)
      .then((response) => {
        this.reqarr = response.data
      })
      .catch((error) => {
        alert(error);
      })     
    },
    acceptfn(obj) {
      let arr = obj
      let url = 'http://localhost:3000/request/workrequest/' + this.wid
      this.$http.post(url, {
        "orderId": arr.orderID,
        "requestId": arr.requestID,
        "requestStatus": "accepted"         
        })
        .then(function (response) {
          //console.log(response);
          //alert(JSON.stringify(response.data))
          
          if(response.status === 200) {
            Vue.$toast.open({
              message: response.data,
              type: 'success',
              position: 'top-right'
            });  
            window.location.reload();        
          } else {
            Vue.$toast.open({
              message: "Something went wrong",
              type: 'error',
              position: 'top-right'
            });             
          }       
        })
        .catch(function (error) {
          //console.log(error);
          alert(error)
        })      
    },
    declinefn(obj) {
      let arr = obj
      let url = 'http://localhost:3000/request/workrequest/' + this.wid
      this.$http.post(url, {
        "orderId": arr.orderID,
        "requestId": arr.requestID,
        "requestStatus": "declined"         
        })
        .then(function (response) {
          //console.log(response);
          //alert(JSON.stringify(response))
          if(response.status === 200) {
            Vue.$toast.open({
              message: response.data,
              type: 'success',
              position: 'top-right'
            });  
            window.location.reload();        
          } else {
            Vue.$toast.open({
              message: "Something went wrong",
              type: 'error',
              position: 'top-right'
            });             
          }         
        })
        .catch(function (error) {
          //console.log(error);
          alert(error)
        }) 
    }    
  },
  created() {
   this.apiCall()
  }
} 
</script>

  <style scoped>
  .wr-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .incomming-req {
    padding-left: 30px;
    padding-top: 10px;
  }
  .ir-header {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #000;
  }
  .ir-box {
    margin-top: 15px;
    width: 98%;
    height: 70px;
    display: grid;
    grid-template-columns: 55% 25% 10% 10%;
    background-color: #fff;
    border: 1px solid #F5F5F5;
  }
  .sh-bottom {
    box-shadow: 0 5px 5px -6px #707070;
  }
  .sh-left {
    box-shadow: -5px 0 5px -6px #707070;
  }  
  .ir-box-one {
    padding-left: 20px;
    padding-top: 22px;
  }
  .ir-box-one-one {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
  .ir-box-one-two {
    font-size: 11px;
    /*font-weight: bold;*/
    margin: 0;
  }
  .ir-box-two {
    text-align: end;
    padding-right: 30px;
    padding-top: 20px;    
  }
  .ir-box-two-one {
    font-size: 17px;
    color: #707070;
    margin: 0;
  }
  .ir-box-three {
    border-left: 1px solid #DBDBDB;
    padding-left: 21px;
    padding-top: 22px;
  }
  .ir-box-three-img {
    width: 23px;
    height: 23px;
    background-image: url('../../../assets/ir-tick.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;  
  }
  .ir-box-four {
    border-left: 1px solid #DBDBDB;
    padding-left: 21px;
    padding-top: 25px;    
  }
  .ir-box-four-img {
    width: 19px;
    height: 19px;    
    background-image: url('../../../assets/ir-close-btn.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;       
  }
  .c-body {    
    margin-left: 10px;
    border: 2px solid #DBDBDB;
    background-color: #fff;
    width: 95%;
    padding: 20px;
  }
  .c-body-sh-all {
    box-shadow: 0 0 5px #DBDBDB;
  }   
  .c-r {
    display: flex;
  }
  .c-r-1 {
    font-size: 15px;
    font-weight: bold;
  }
  .c-r-2 {
    font-size: 15px;
    margin-left: 8px;
  }
  .c-r1-hding {
    font-size: 15px;
    font-weight: bold;
  }
  .c-r1-1 {
    font-size: 15px;
    margin-left: 20px;
    display: flex;
  }
  .c-r1-1-1 {

  }
  .c-r1-1-2 {
    margin-left: 10px;
  }
  .your-schedule {
    padding-left: 40px;
    padding-top: 10px;  
  }
  .ys-header {
    margin-bottom: 5px;
    font-size: 15px;
    color: #000;
    font-weight: bold;
  }  
  .ys-box {
    width: 80%;
    background-color: #fff;
    padding: 20px;
  }
  .ys-sh-all {
    box-shadow: 0 0 5px #DBDBDB;
  }
  .ys-box-inwrapper {
    margin-bottom: 15px;
  } 
  .ys-box-one {
    font-size: 15px;
    margin-bottom: 2px;
    text-decoration: underline;
  }
  .ys-box-two {
    margin-top: 0px;
    margin: 0;
    font-size: 14px;
  }
</style>