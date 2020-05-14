<template>
  <div class="wr-wrapper">
    <div class="wr-grid">
      <div class="incomming-req">
        <p class="ir-header">Incomming Requests</p>
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
      <div class="your-schedule"></div>
    </div>
  </div>    
</template>

<script>
export default {
    
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
  }
  .ir-header {
    margin-bottom: 5px;
    font-size: 15px;
    color: #000;
  }
  .ir-box {
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
    background-color: lightblue;
  }
</style>