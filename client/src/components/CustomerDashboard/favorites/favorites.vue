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
        </div>
        <div class="r3">

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
    height: 185px;
    background-color: #fff; 
    box-shadow: 0px 3px 6px #00000029;
    border: 0.5px solid #707070;
    display: grid;
    grid-template-rows: 1fr 1fr 0.6fr;
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
    background-color: orange;
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
    height: 1px;
    width: 100px;
    background-color: #707070;
  }
  .r2 {
    background-color: orchid;
    text-align: center;
    padding-top: 5px;
  }
  .r2-1 {
    font-size: 26px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  }
  .r3 {
    background-color: purple;
    margin-top: 0px;
    text-align: center;
  }
  .r3-1 {
    font-size: 20px;
    color: #0084E9;
    font-family: p-medium;
  }   
</style>