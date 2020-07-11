<template>
  <div class="Container">
    <div class="top-box">
      <router-link class="arrowIcon" :to="{ path: '/services' }"></router-link>
      <h3>Back to services</h3>
    </div>
    <div class="mid">
      <div class="mid-box">
        <h1>Quality Services</h1>
        <h1>Served with Hygeine.</h1> 
        <div class="Line"></div>
      </div>
      <div class="mid-img"></div>
    </div>
    <div class="bottom">
      <div class="b-heading">
        <h3>Fabrication Services</h3>
        <div class="Line-small"></div>
      </div>
      <div class="row">
        <div v-for="service in subArr" v-bind:key="service._id">
          <div class="col">
            <div class="Btop">
              <img class="Bimg" v-bind:src="'' + service.imagePath" />
              <p>{{ service.name }}</p>
            </div>
            <div class="BLine"></div>
            <div class="Bbottom">
              <div id="Desc"><p>{{ service.description }}</p></div>
              <popper
                trigger="clickToToggle"
                :options="{
                  placement: 'right',
                  modifiers: { offset: { offset: '0,10px' } }
                }">
                <div class="popper">
                  <p>{{ service.moreDetail }}</p>    
                </div>
                <p id="Vdetails" slot="reference">view details</p>  
              </popper> 
              <div class="card-btn-wrapper">
                <!-- <router-link :to="{name: 'fmodal'}"> -->
                  <input type="submit" value="Add to cart" @click="fn(service)">
                <!-- </router-link> -->
              </div> 
            </div>
          </div> 
        </div>
      </div>
      <router-view>
        <Fmodal />
      </router-view> 
    </div>
       
  </div>    
</template>

<script>
import Vue from 'vue';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import Fmodal from '@/components/Services/Fabrication/Fmodal.vue'
/*import EventBus from '../../../event-bus.js'*/

export default {
  components: {
    Fmodal,
    'popper': Popper 
  },
  data() {
    return {
      subArr: [],
      cchecker: this.$cookies.get("category")
    }
  },
  methods: {
    fn(obj) {
      if(this.cchecker == null) {
        this.$cookies.set("sarray", JSON.stringify(obj), "id");
        this.$cookies.set("ccr", location.protocol + "//"+ location.host + this.$router.currentRoute.path, "id");
         Vue.$toast.open({
          message: "Please login to your account!",
          type: 'error',
          position: 'bottom-left'
        }); 
        setTimeout(function() {
          window.location.href = location.protocol + "//"+ location.host + "/login";
        }, 3000);       
      } else {
        if(this.cchecker == "Customer") {
          this.$cookies.set("sarray", JSON.stringify(obj), "id");
          window.location.href = location.protocol + "//"+ location.host + "/services/fabrication/fmodal"
        }
      } 
    },
    apiCall() {
      let url = 'http://localhost:3000/services/5ef8bfb0d213605c72b6192e'
      this.$http.get(url)
      .then((response) => {
        this.subArr = response.data
      })
      .catch((error) => {
        alert(error);
      })     
    }
  },
  created() {
    this.apiCall()
    /*EventBus.$on('sub-sub-service', (obj) => {     
    })*/
  
  }  
}
</script>

<style scoped>
  .top-box {
    height: 50px;
    background-color: #000;
    width: 100%; 
    box-sizing: border-box;
    padding-left: 20px;
    padding-top: 10px;
    display: flex;
  }
  .arrowIcon {
    margin-top: 3px;
    width: 20px;
    height: 20px;
    background-image: url(../../../assets/arrow.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;    
  }
  .top-box h3 {
    margin-top: 2px;
    margin-left: 15px;
    color: #aaa;
    font-style: italic;
    font-size: 21px;
  }   
  .mid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: #eeefef;
    width: 100%;
    height:420px;
  }
  .mid-box {
    padding-top: 125px;
    padding-bottom: 100px;
    padding-left: 60px;
  } 
  .mid-box h1 {
    margin: 0px;
    padding-bottom: 3px;
    padding-top: 0;
    padding-left: 0;
    font-size: 59px;
    color: #000;
    font-weight: bold;
  }  
  .Line {
    margin-top: 20px;
    width: 250px;
    height: 5px;
    background-color: #000;
  }
  .mid-img {
    margin-left: 0px;
    margin-top: 26px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 370px;
    width: 370px;
    background-image: url(../../../assets/mbox.png);    
  }
  .bottom {
    width: 85%;
    height: 200px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }
  .b-heading h3 {
    font-size: 29px;
    color: #000;
    font-weight: bold;
    margin-left: -20px;
  }
  .Line-small {
    margin-top: 0px;
    width: 110px;
    height: 2px;
    background-color: #000;    
  }
  .row {
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 35px;
  }
  .col {
    padding: 0PX;
    /*box-sizing: border-box;*/
    border: 1px solid #000;
    margin: 8px;
    /*height: 480px;*/
    background-color: #fff;  
  }
  .Btop {
    padding: 10px;
    height: 100px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 3fr; 
  }
  .Bimg {
    height: 80px;
    width: 80px;
  }
  .Btop p {
    margin-top: 20px;
    font-size: 23px;
  }
  .BLine {
    width: 100%;
    background-color: #000;
    height: 1px;
  }
  .Bbottom {
    padding: 10px;
  }
  .Bbottom p {
    font-size: 17px;
    margin-bottom: 0px;
  }
  #Vdetails {
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    border: 1px solid #000;
    width: 95px;
    padding-left: 8px;
  }
  #Vdetails:hover {
    cursor: pointer;
  }  
  .card-btn-wrapper {
    margin-top: 25px;
    text-align: center;
    margin-bottom: 10px;
  }  
  .Bbottom input[type="submit"] {
    border: none;
    background-color: #000;
    color: #fff;
    width: 120px;
    height: 50px;
    font-family: Arial;
    font-size: 17px;
    font-style: italic;
    box-shadow: 3px 3px #dedee0;
    border-radius: 10px;;
  }    
  .popper {
    padding-top: 10%;
    border: 1px solid #aaa;
    width: 90%;
    min-height: 60%;
    background-color: #fff;
    color: #000;
    opacity: 0.9;
    font-weight: bold;
  }    
</style>