<template>
  <div class="Wrapper">
      <p class="hdn">Your Bookings</p>
      <div class="cards">
        <div class="box">
          <div class="r1">
            <p class="r1-1">Kitchen Cleaning</p>
            <div class="Line"></div>            
          </div>
          <div class="r2">
            <p class="r2-1">09:00 AM</p>
          </div>
          <div class="r3">
            <router-link :to="{ name: '' }">
            <p class="r3-1" @click="fn()">Track Your Booking</p>
            </router-link>
          </div>
        </div> 
        <div class="box">
          <div class="r1">
            <p class="r1-1">Plumbing</p>
            <div class="Line"></div>            
          </div>
          <div class="r2">
            <p class="r2-1">09:00 AM</p>
          </div>
          <div class="r3">
            <p class="r3-1">Scheduled</p>
          </div>
        </div>  
        <div class="box">
          <div class="r1">
            <p class="r1-1">Carpentry</p>
            <div class="Line"></div>            
          </div>
          <div class="r2">
            <p class="r2-1">09:00 AM</p>
          </div>
          <div class="r3">
            <p class="r3-1">Scheduled</p>
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
      window.location.href = "http://localhost:8080/customerdashboard/bchild";
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
    font-size: 24px;
    font-family: p-medium;
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
    border: 1px solid #F5F5F5;
    box-shadow: 0px 3px 5px #00000029;
    border-radius: 16px;
    display: grid;
    grid-template-rows: 1fr 1fr 0.9fr;
    opacity: 0.9;
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
    font-size: 23px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  }
  .Line {
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    width: 250px;
    background-color: #707070;
  }
  .r2 {
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
    margin-top: 0px;
    text-align: center;
  }
  .r3-1 {
    font-size: 20px;
    color: #0084E9;
    font-family: p-medium;
  } 
</style>