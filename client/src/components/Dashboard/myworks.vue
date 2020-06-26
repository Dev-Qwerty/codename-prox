<template>
  <div class="mw-wrapper">
    <div class="mw-body">
      <p class="ty-header">Today's Work</p>
      <div class="box-wrapper">
        <div v-for="(sr, index) in myworksarr.todaysWork" :key="index">
          <div class="box sh-all">
            <div class="box-row1">
              <p class="row1-one">$99</p>
              <div class="Line"></div>
            </div>
            <div class="box-row2">
              <p class="row2-one">Kitchen Cleaning</p>
              <p class="row2-two">Kanjirappally, Kottayam</p>
            </div>
            <div class="box-row3">
              <p class="row3-one">8:30 AM</p>
            </div>
            <div class="box-row4">
              <p class="row4-one">Work Details</p>
            </div>
          </div>
        </div>
      </div>

      <p class="yd-header">Upcomming Works</p>
      <div class="box-wrapper">
        <div v-for="(sr, index) in myworksarr.upcommingWorks" :key="index">
          <div class="box sh-all">
            <div class="box-row1">
              <p class="row1-one">{{ sr.totalAmount }}</p>
              <div class="Line"></div>
            </div>
            <div class="box-row2">
              <p class="row2-one">Kitchen Cleaning</p>
              <p class="row2-two">Kanjirappally, Kottayam</p>
            </div>
            <div class="box-row3">
              <p class="row3-one">8:30 AM</p>
            </div>
            <div class="box-row4">
              <p class="row4-one">Work Details</p>
            </div>
          </div>
        </div>
      </div>

      <p class="yd-header">Completed Works</p>
      <div class="box-wrapper">
        <div v-for="(sr, index) in myworksarr.completedWorks" :key="index">
          <div class="box sh-all">
            <div class="box-row1">
              <p class="row1-one">$99</p>
              <div class="Line"></div>
            </div>
            <div class="box-row2">
              <p class="row2-one">Kitchen Cleaning</p>
              <p class="row2-two">Kanjirappally, Kottayam</p>
            </div>
            <div class="box-row3">
              <p class="row3-one">8:30 AM</p>
            </div>
            <div class="box-row4">
              <p class="row4-one">Work Details</p>
            </div>
          </div>
        </div>
      </div>      

    </div>
  </div>
</template>

<script>
//import Vue from 'vue';

export default {
  data() {
    return {
      wid: this.$cookies.get("id"),
      myworksarr: []
    }
  },
  methods: {
    apiCall() {
      let url = 'http://localhost:3000/worker/myworks/f35ce2de4348f6943f9621bed9af307f'
      this.$http.get(url)
      .then((response) => {
        this.myworksarr = response.data
      })
      .catch((error) => {
        alert(error);
      })     
    },   
  },
  created() {
   this.apiCall()
  }
} 
</script>

<style scoped>
  .mw-body {
    padding-top: 10px;
    padding-left: 30px;
  }
  .ty-header {
    font-weight: bold;
    margin-bottom: -5px;
    font-size: 20px;
    color: #000;    
  }
  .box-wrapper {
    width: 80%;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  } 
  .box {
    width: 250px;
    height: 200px;
    display: grid;
    grid-template-rows: 30% 25% 30% 15%;
    background-color: #fff;
    border: 1px solid #F5F5F5;    
  } 
  .sh-all {
    box-shadow: 0 0 5px #DBDBDB;
  }    
  .box-row1 {
    text-align: center;
  }
  .row1-one {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin: 0px;
  }
  .Line {
    margin-top: -5px;
    margin-left: 70px;
    height: 1px;
    width: 120px;
    background-color: #aaa;
  }
  .box-row2 {
    text-align: center;
  }
  .row2-one {
    font-size: 22px;
    font-weight: bold;
    margin: 0px;
  }
  .row2-two {
    margin-top: -6px;
    font-size: 14px;
    color: #aaa;
  }
  .box-row3 {
    text-align: center;
    padding-top: 5px;
  }
  .row3-one {
    font-size: 40px;
  }
  .box-row4 {
    text-align: center
  }
  .row4-one {
    font-size: 14px;
  }

  .yd-header {
    font-weight: bold;
    margin-top: 50px;
    font-size: 20px;
    color: #000;    
  }
</style>