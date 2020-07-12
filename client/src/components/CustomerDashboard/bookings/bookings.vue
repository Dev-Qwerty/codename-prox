<template>
  <div class="Wrapper">
      <p class="hdn">Your Bookings</p>
      <div class="cards">
        
        <!--<div class="box">
          <router-link :to="{ name: '' }">
            <div @click="fn(sr)">
              <div class="box-row1">
                <p class="row1-one">Kitchen Cleaning</p>
                <div class="Line"></div>
              </div>
              <div class="box-row2">
                <p class="row2-one">09:00 AM</p>
              </div>
              <div class="box-row3">
                <p class="row3-one">Track Your Booking</p>
              </div>
            </div>
          </router-link>  
        </div>-->
        <div class="box">
          <div class="r1">
            <p class="r1-1">Kitchen Cleaning</p>
            <div class="Line"></div>            
          </div>
          <div class="r2">
            <p class="r2-1">09:00 AM</p>
          </div>
          <div class="r3">
            <p class="r3-1">Track Your Booking</p>
          </div>
        </div>       
      
      </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    }
  },
  methods: { 
    fn() {
    }
  }   
}       
</script>

<style scoped>
  .Wrapper {
    padding-left: 3%;
    padding-top: 4%;
  }
  .hdn {
    font-size: 25px;
    font-family: p-medium;
  }
  .cards {
    padding-left: 2%;
  }
  .box {
    width: 350px;
    height: 200px;
    background-color: #fff;
    border: 1px solid #F5F5F5;
    box-shadow: 0px 3px 5px #00000029;
    border-radius: 16px;
    display: grid;
    grid-template-rows: 30% 30% 40%;
    opacity: 0.9;
  }    
  a {
    text-decoration: none;
  }
  .r1 {
    background-color: aqua;
    text-align: center;
    margin-top: 5px;
  }
  .r1-1 {
    text-align: center;
    font-size: 24px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  }
  .Line {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    width: 250px;
    background-color: #707070;
  }
  .r2 {
    background-color: orange;    
    text-align: center;
    margin-top: 0px;
  }
  .r2-1 {
    font-size: 26px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  }
  .r3 {
    background-color: red;    
    margin-top: 0px;
    text-align: center;
  }
  .r3-1 {
    font-size: 23px;
    color: #000;
    font-family: p-medium;
  } 
</style>