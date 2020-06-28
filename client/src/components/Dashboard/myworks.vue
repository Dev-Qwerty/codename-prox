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
              <div class="row4-one">
                <popper
                  trigger="clickToToggle"
                  :options="{
                    placement: 'right',
                    modifiers: { offset: { offset: '0,10px' } }
                  }">
                  <div class="popper">
                    <p>popper content</p>
                    <p>popper content</p>
                    <p>popper content</p>
                  </div>
              
                  <button slot="reference">
                    Work Details
                  </button>
                </popper>                 
              </div>  
            </div>
          </div>
        </div>
      </div>

      <p class="yd-header">Upcomming Works</p>
      <div class="box-wrapper">
        <div v-for="(sr, index) in myworksarr.upcommingWorks" :key="index">
          <!--<div class="box sh-all">
            <div class="box-row1">
              <p class="row1-one"><span>$</span>{{ sr.totalAmount }}</p>
              <div class="Line"></div>
            </div>
            <div class="box-row2">
              <p class="row2-one">{{ sr.service.subserviceName }}</p>
            </div>
            <div class="box-row3">
              <p class="row3-one">{{ sr.date }}</p>
            </div>            
          </div>-->          
          <div class="box">
            <div class=""> 
              <div class="box-row1">
                <p class="row1-one"><span>$</span>{{ sr.totalAmount }}</p>
                <div class="Line"></div>
              </div>
              <div class="box-row2">
                <p class="row2-one">{{ sr.service.subserviceName }}</p>
                <p class="row2-two">Kanjirappally, Kottayam</p>
              </div>
              <div class="box-row3">
                <p class="row3-one">{{ sr.date }}</p>
              </div>
              <div class="box-row4">
                <div class="row4-one">
                  <popper
                    trigger="clickToToggle"
                    :options="{
                      placement: 'right',
                      modifiers: { offset: { offset: '0,10px' } }
                    }">
                    <div class="popper">
                      <p class="row2-one">{{ sr.service.subserviceName }}</p>
                      <p class="row1-one"><span>$</span>{{ sr.totalAmount }}</p>
                      <p>popper content</p>
                      <p>popper content</p>
                    </div>
                
                    <button slot="reference" class="popper-btn">
                      DETAILS
                    </button>
                  </popper>                 
                </div>                        
              </div>
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
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
  components: {
    'popper': Popper
  },  
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
    fnn() {

    }   
  },
  created() {
   this.apiCall()
  }
} 
</script>

<style scoped>
  .mw-body {
    padding-top: 10px;
    padding-left: 50px;
    height: 2000px;
  }
  .ty-header {
    font-weight: bold;
    margin-bottom: -5px;
    font-size: 20px;
    color: #000;    
  }
  .box-wrapper {
    width: 85%;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  } 
  .box {
    width: 300px;
    height: 230px;
    display: grid;
    grid-template-rows: 30% 25% 30% 15%;
    background-color: #fff;
    border: 1px solid #F5F5F5; 
    margin-bottom: 30px;
    box-shadow: -5px 5px 5px #DBDBDB;
  }     
  .box-row1 {
    text-align: center;
    margin-top: 15px;
  }
  .row1-one {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin: 0px;
  }
  .Line {
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    width: 150px;
    background-color: #aaa;
  }
  .box-row2 {
    text-align: center;
    margin-top: 15px;
  }
  .row2-one {
    font-size: 21px;
    font-weight: bold;
    margin: 0px;
  }
  .box-row3 {
    text-align: center;
    margin-top: -10px;
  }
  .row3-one {
    font-size: 30px;
    color: #aaa;
  }
  .box-row4 {
    text-align: center
  }
  .row4-one {
    margin-top: -10px;
    font-size: 14px;
  }
  .yd-header {
    font-weight: bold;
    margin-top: 30px;
    font-size: 20px;
    color: #000;    
  }
  .popper {
    background-color: #000;
    color: #fff;
    width: 350px;
    height: 300px;
    padding: 10px;
    border: none;
  }
  .popper-btn {
    padding: 5px;
    background-color: #000;
    color: #fff;
    border: none;
    width: 80px;
    height: 30px;
    border-radius: 5px;
  }
</style>