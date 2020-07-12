<template>
  <div class="Wrapper">
    <div class="cards">
      <!--<div class="box">
        <div class="r1">
          <p class="r1-1"></p>
          <div class="Line"></div>            
        </div>
        <div class="r2">
          <p class="r2-1"></p>
        </div>
        <div class="r3">
          <p class="r3-1" @click="fn()"></p>
        </div>  
      </div>-->   
      <div class="box">
        <div class="r1">
          <p class="r1-1"><span>$</span>99</p>
          <div class="Line"></div>   
        </div>
        <div class="r2">
          <p class="r2-1">Kitchen Cleaning</p>
          <p class="r2-2">Service Details</p>
        </div>
        <div class="r3">
          <p class="r3-1" @click="fn()">Book Now</p>
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
  .cards {
    padding-left: 2%;
    width: 90%;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  
  }   
  .box {
    width: 320px;
    height: 200px;
    background-color: #fff; 
    box-shadow: 0px 3px 6px #00000029;
    border: 0.5px solid #707070;
    display: grid;
    grid-template-rows: 1fr 0.8fr 1.2fr;
    opacity: 0.9;
    border-radius: 50px;
    overflow: hidden;
  }    
  a {
    text-decoration: none;
  }
  .r1 {
    text-align: center;
    padding-top: 15px;
  }
  .r1-1 {
    text-align: center;
    font-size: 35px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  }
  .Line {
    margin-top: -5px;
    margin-left: auto;
    margin-right: auto;
    height: 2px;
    width: 150px;
    background-color: #000;
  }
  .r2 {
    text-align: center;
    padding-top: 10px;
  }
  .r2-1 {
    font-size: 27px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  }
  .r2-2 {
    font-size: 18px;
    font-family: p-medium;
    margin-top: -2px;
    color: #000;
  }  
  .r3 {
    margin-top: 0px;
    text-align: center;
  }
  .r3-1 {
    margin-top: -5px;
    font-size: 23px;
    color: #0084E9;
    font-family: p-medium;
  }   
</style>