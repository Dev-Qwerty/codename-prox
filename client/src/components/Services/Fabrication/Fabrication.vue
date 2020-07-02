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
              <p id="Vdetails">view details  <span id="Vspan">></span></p>  
              <router-link :to="{name: 'fmodal'}">
                <input type="submit" value="Add to cart" @click="fn(service)">
              </router-link>
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
import Fmodal from '@/components/Services/Fabrication/Fmodal.vue'
/*import EventBus from '../../../event-bus.js'*/

export default {
  components: {
    Fmodal
  },
  data() {
    return {
      subArr: []
    }
  },
  methods: {
    cartfn() {
      window.scrollTo(0,0)
    },
    fn(obj) {
      this.$cookies.set("sarray", JSON.stringify(obj), "id")
      //window.scrollTo(0,0)
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
    margin-left: 80px;
  }
  .b-heading h3 {
    font-size: 30px;
    color: #000;
    font-weight: bold;
  }
  .Line-small {
    margin-top: 0px;
    width: 90px;
    height: 2px;
    background-color: #000;    
  }
  .row {
    margin-left: 20px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 35px;
  }
  .col {
    padding: 0PX;
    box-sizing: border-box;
    border: 1px solid #000;
    margin: 8px;
    height: 480px;
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
    margin: 0px;
    font-weight: bold;
    font-size: 15px;
  }
  
  .Bbottom input[type="submit"] {
    border: none;
    background-color: #000;
    color: #fff;
    margin-top: 5px;
    margin-left: 130px;
    width: 120px;
    height: 50px;
    font-family: Arial;
    font-size: 17px;
    font-style: italic;
    box-shadow: 3px 3px #dedee0;
    border-radius: 10px;;
  }    
</style>