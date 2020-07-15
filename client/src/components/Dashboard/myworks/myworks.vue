<template>
  <div class="mw-wrapper">
    <div class="mw-body">
      <p class="ty-header">Today's Work</p>    
      <div class="box-wrapper">
        <div v-for="(sr, index) in myworksarr.todaysWork" :key="index">       
          <div class="box">
            <router-link :to="{ name: 'mwchild' }">
              <div @click="fn(sr)">
                <div class="box-row1">
                  <p class="row1-one"><span>$</span>{{ sr.totalAmount }}</p>
                  <div class="Line"></div>
                </div>
                <div class="box-row2">
                  <p class="row2-one">{{ sr.service.subserviceName }}</p>
                  <p class="row2-two">{{ sr.address.line2 }}, {{ sr.address.district }}</p>
                </div>
                <div class="box-row3">
                  <p class="row3-one">02:30 PM</p>
                  <p class="row3-two">{{ sr.date }}</p>
                </div>
              </div>
            </router-link>  
          </div>          
        </div>
      </div>

      <p class="yd-header">Upcomming Works</p>
      <div class="box-wrapper">
        <div v-for="(sr, index) in myworksarr.upcommingWorks" :key="index">       
          <div class="box">
            <router-link :to="{ name: 'mwchild' }">
              <div @click="fn(sr)">
                <div class="box-row1">
                  <p class="row1-one"><span>$</span>{{ sr.totalAmount }}</p>
                  <div class="Line"></div>
                </div>
                <div class="box-row2">
                  <p class="row2-one">{{ sr.service.subserviceName }}</p>
                  <p class="row2-two">{{ sr.address.line2 }}, {{ sr.address.district }}</p>
                </div>
                <div class="box-row3">
                  <p class="row3-one">02:30 PM</p>
                  <p class="row3-two">{{ sr.date }}</p>
                </div>
              </div>
            </router-link>  
          </div>          
        </div>
      </div>

      <p class="yd-header">Completed Works</p>
      <div class="box-wrapper">
        <div v-for="(sr, index) in myworksarr.completedWorks" :key="index">       
          <div class="box">
            <router-link :to="{ name: 'mwchild' }">
              <div @click="fn(sr)">
                <div class="box-row1">
                  <p class="row1-one"><span>$</span>{{ sr.totalAmount }}</p>
                  <div class="Line"></div>
                </div>
                <div class="box-row2">
                  <p class="row2-one">{{ sr.service.subserviceName }}</p>
                  <p class="row2-two">{{ sr.address.line2 }}, {{ sr.address.district }}</p>
                </div>
                <div class="box-row3">
                  <p class="row3-one">02:30 PM</p>
                  <p class="row3-two">{{ sr.date }}</p>
                </div>
              </div>
            </router-link>  
          </div>          
        </div>
      </div>     

    </div>
  </div>
</template>

<script>
//import Vue from 'vue';

export default {
  components: {
  },  
  data() {
    return {
      wid: this.$cookies.get("id"),
      myworksarr: []
    }
  },
  methods: {
    apiCall() {
      let url = this.$serverURLI +'/worker/myworks/' + this.wid
      this.$http.get(url)
      .then((response) => {
        this.myworksarr = response.data
      })
      .catch((error) => {
        alert(error);
      })     
    },
    fn(obj) {
      this.$cookies.set("wd-mw-child", JSON.stringify(obj), "1d");
      this.$cookies.set("xvar", "arrived", "1d");
      this.$cookies.set("yvar", "qw121", "1d");
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
    height: 220px;
    background-color: #fff;
    border: 1px solid #F5F5F5; 
    margin-bottom: 30px;
    box-shadow: -5px 5px 5px #DBDBDB;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }    
  a {
      text-decoration: none;
  }
  .box-row1 {
    text-align: center;
    margin-top: 20px;
  }
  .row1-one {
    text-align: center;
    font-size: 35px;
    font-family: lato-black;
    margin: 0px;
    color: #000;
  }
  .Line {
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    height: 2px;
    width: 200px;
    background-color: #aaa;
  }
  .box-row2 {
    text-align: center;
    margin-top: 5px;
  }
  .row2-one {
    font-size: 21px;
    font-family: lato-bold;
    margin: 0px;
    color: #000;
  }
  .row2-two {
    font-size: 15px;
    font-family: lato-light;
    margin-top: -5px;    
    color: #707070;
  }
  .box-row3 {
    margin-top: -20px;
    text-align: center;
    display: grid;
    grid-template-rows: 3fr 1fr;
  }
  .row3-one {
    font-size: 40px;
    color: #000;
    font-family: lato-light;
  }
  .row3-two {
    font-size: 15px;
    font-family: lato-light;
    margin-top: -20px;    
    color: #000;
  }
  .yd-header {
    font-weight: bold;
    margin-top: 30px;
    font-size: 20px;
    color: #000;    
  }   
</style>