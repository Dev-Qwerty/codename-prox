<template>
  <div class="wr-wrapper">
    <div class="wr-grid">
      <div class="incomming-req">
        <p class="ir-header">Incomming Requests</p>
        <div v-for="n in 5" v-bind:key="n">
          <div class="ir-box sh-bottom">
            <div class="ir-box-one sh-left">
              <p class="ir-box-one-one">1 BHK Home Cleaning</p>
              <p class="ir-box-one-two">9:30 AM, May 10, Kanjirappally</p>
            </div>
            <div class="ir-box-two">
              <p class="ir-box-two-one">00:36</p>
              <p class="ir-box-two-two">view details</p>
            </div>
            <div class="ir-box-three">
              <div class="ir-box-three-img"></div>
            </div>
            <div class="ir-box-four">
              <div class="ir-box-four-img"></div>
            </div>
          </div>        
        </div>         
      </div>
      <div class="your-schedule">
        <p class="ys-header">Your Schedule</p>
        <div class="ys-box ys-sh-all">
          <p class="ys-box-one">10th May 2019</p>
          <p class="ys-box-two">10:30 AM - Kitchen Clean</p>
          <p class="ys-box-two">10:45 AM - Sofa Clean</p>
        </div>
      </div>
    </div>
  </div>    
</template>

<script>
export default {
  data() {
    return {
      wid: this.$cookies.get("id"),
      reqarr: []
    }
  },
  methods: {
    apiCall() {
      let url = 'http://localhost:3000/request/workrequest/f35ce2de4348f6943f9621bed9af307f'
      this.$http.get(url)
      .then((response) => {
        this.reqarr = response.data
      })
      .catch((error) => {
        alert(error);
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
    height: 676px;
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
    margin-top: 10px;
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
    padding-top: 12px;
  }
  .ir-box-one-one {
    font-size: 15px;
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
    padding-top: 14px;    
  }
  .ir-box-two-one {
    font-size: 18px;
    color: #707070;
    margin: 0;
  }
  .ir-box-two-two {
    font-size: 13px;
    margin-top: -5px;
    color: #0084E9;
  }
  .ir-box-three {
    border-left: 1px solid #DBDBDB;
    padding-left: 21px;
    padding-top: 22px;
  }
  .ir-box-three-img {
    width: 23px;
    height: 23px;
    background-image: url('../../assets/ir-tick.png');
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
    background-image: url('../../assets/ir-close-btn.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;       
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
    height: 300px;
    background-color: #fff;
    padding: 10px;
  }
  .ys-sh-all {
    box-shadow: 0 0 5px #DBDBDB;
  } 
  .ys-box-one {
    font-size: 15px;
    margin-bottom: 10px
  }
  .ys-box-two {
    margin-top: 0px;
    margin: 0;
    font-size: 14px;
  }
</style>