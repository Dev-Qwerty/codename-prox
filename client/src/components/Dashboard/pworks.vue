<template>
  <div class="pw-wrapper">
    <div class="pw-body">

      <!-- Work Iteneries -->
      <p class="wi-header">Work Iteneries</p>
      <div v-for="n in 2" v-bind:key="n">
        <div class="box-wrapper">
          <div class="sh-left">
            <div class="box sh-bottom">
              <div class="row1">
                <div class="row1-col1">
                  <p class="row1-col1-one">Kitchen Cleaning</p>
                  <p class="row1-col1-two">Kanjirapally, Kottayam</p>
                </div>
                <div class="row1-col2">
                  <p class="row1-col2-one">11:30 AM</p>
                </div>
              </div>
              <div class="row2">
                <div class="row2-col1">
                  <p class="row2-col1-one">$99</p>
                </div>
                <div class="row2-col2">
                  <div class="c-l-c">
                    <div class="wi-circle"></div>
                    <div class="wi-line"></div>
                    <div class="wi-circle"></div>
                    <div class="wi-line"></div>
                    <div class="wi-circle"></div>
                  </div>
                  <div class="status">
                    <p class="s-one">Arrived</p>
                    <p class="s-two">In Progress</p>
                    <p class="s-three">Done</p>
                  </div>
                </div>
                <div class="row2-col3"></div>
              </div>
              <div class="row3">
                <div class="row3-col1">
                  <p class="">Work Details</p>
                </div>
                <div class="row3-col2">
                  <p class="">Time Left: 27:00 mins</p>  
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Work Completed Today --> 
      <p class="wc-header">Work Completed Today</p>
      <div v-for="n in 1" v-bind:key="n">
        <div class="box-wrapper">
          <div class="sh-left">
            <div class="box sh-bottom">
              <div class="row1">
                <div class="row1-col1">
                  <p class="row1-col1-one">Kitchen Cleaning</p>
                  <p class="row1-col1-two">Kanjirapally, Kottayam</p>
                </div>
                <div class="row1-col2">
                  <p class="row1-col2-one">11:30 AM</p>
                </div>
              </div>
              <div class="row2">
                <div class="wc-row2-col1">
                  <div class="wc-big-circle"></div>
                </div>
                <div class="row2-col2">
                  <div class="c-l-c">
                    <div class="wc-circle"></div>
                    <div class="wc-line"></div>
                    <div class="wc-circle"></div>
                    <div class="wc-line"></div>
                    <div class="wc-circle"></div>
                  </div>
                  <div class="status">
                    <p class="s-one">Arrived</p>
                    <p class="s-two">In Progress</p>
                    <p class="s-three">Done</p>
                  </div>
                </div>
                <div class="row2-col3"></div>
              </div>
              <div class="row3">
                <div class="row3-col1">
                  <p class="">Work Details</p>
                </div>
                <div class="row3-col2">
                  <p class="">Time Left: 27:00 mins</p>  
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>   
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .pw-body {
    padding-left: 30px;
    padding-top: 10px;
  }
  .wi-header {
    font-weight: bold;
    margin-bottom: -5px;
    font-size: 15px;
    color: #000;
  }  
  .box-wrapper {
    margin-top: 15px;
  }  
  .box {
    width: 90%;
    height: 210px;
    display: grid;
    grid-template-rows: 40% 45% 15%;  
    background-color: #fff;
    border: 1px solid #F5F5F5;    
  }
  .sh-bottom {
    box-shadow: 0 5px 5px -6px #707070;
  }  
  .sh-left {
    box-shadow: -5px 0 5px -6px #707070;
  } 
  .row1 {
    display: grid;
    grid-template-columns: 1fr 1fr;      
  }  
  .row1-col1 {
    padding-left: 20px;
    padding-top: 20px;    
  }
  .row1-col1-one {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
  .row1-col1-two {
    padding: 0;
    font-size: 14px;
    /*font-weight: bold;*/
    margin-top: -2px;
  }  
  .row1-col2 {
    text-align: end;
    padding-right: 20px;
    padding-top: 22px;      
  }
  .row1-col2-one {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  } 
  .row2 {
    display: grid;
    grid-template-columns: 20% 60% 20%;         
  } 
  .row2-col1 {
    text-align: center;
    padding-top: 10px;  
    /*background-color: aquamarine;*/      
  }
  .row2-col1-one {
    font-size: 35px;
    font-weight: bold;
  }
  .row2-col2 {
    display: grid;
    grid-template-rows: 1fr 1fr;        
  }   
  .c-l-c {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;   
    padding-top: 20px;
  }
  .wi-circle {
    width: 20px;
    height: 20px;
    background-color: #aaa;
    border-radius: 50%;
  }  
  .wi-line {
    margin-top: 10px;
    width: 247px;
    height: 2px;
    background-color: #aaa;
  }
  .status {
    display: grid;
    grid-template-columns: 3fr 3fr 1fr;
  }
  .s-one {
    margin-left: -10px;
  }
  .s-three {
    padding-left: 50px;
    margin-right: -10px;
  }
  .row2-col3 {
  
  }   
  .row3 {
    display: grid;
    grid-template-columns: 1fr 1fr;         
  }  
  .row3-col1 {
    font-size: 13px;
    padding-top: 5px;
    padding-left: 20px;
  }
  .row3-col2 {
    font-size: 13px;
    text-align: end;
    padding-right: 20px;
  }   
  .wc-header {
    font-weight: bold;
    margin-top: 50px;
    font-size: 15px;
    color: #000;
  }    
  .wc-circle {
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
  }  
  .wc-line {
    margin-top: 10px;
    width: 247px;
    height: 2px;
    background-color: #000;
  }  
  .wc-row2-col1 {
    padding-top: 5px;
    padding-left: 40px;  
    /*background-color: aquamarine;*/      
  }  
  /*.wc-big-circle {
    width: 70px;
    height: 70px;
    background-color: #000;
    border-radius: 50%;    
  }*/
  .wc-big-circle {
    height: 70px;
    width: 70px;
    background-image: url('../../assets/big-c-tick.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;      
  }
</style>