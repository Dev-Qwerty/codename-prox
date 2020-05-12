<template>
  <div class="Container">
    <div class="top-box">
      <router-link class="arrowIcon" :to="{ path: '/services' }"></router-link>
      <h3>Back to services</h3>
      <router-link class="cartbtn" :to="{name: 'cart'}" @click.native="cartfn">
        <input type="submit" value="cart">
      </router-link>
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
        <h3>Cleaning Services</h3>
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
              <router-link :to="{name: 'modal', params: { sarray: service }}" @click.native="fn">
                <input type="submit" value="Add to cart">
              </router-link>
            </div>
          </div> 
        </div>
      </div>
      <router-view>
        <modal />
        <cart />
      </router-view>
    </div>
  </div>    
</template>

<script>
import modal from '@/components/Services/Cleaning/Cmodal.vue'
import cart from '@/components/Services/Cleaning/Ccart.vue'
import EventBus from '../../../event-bus.js'

export default {
  components: {
    modal,
    cart
  },
  data() {
    return {
      subArr: [],
      cartArr: []
    }
  },
  methods: {
    cartfn() {
      window.scrollTo(0,0)
    },
    fn() {
      window.scrollTo(0,0)
    },
    apiCall() {
      let url = 'http://localhost:3000/services/5ea50d377c154d280cf37efb'
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
    EventBus.$on('sub-sub-service', (obj) => { 
      this.cartArr.push(obj)
      this.$cookies.set("cart", JSON.stringify(this.cartArr), '1d')    
    })
  
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
  .cartbtn input[type="submit"]{
    margin-top: 0px;
    margin-left: 1000px;
    width: 100px;
    height: 30px;
    border: 2px solid #fff;
    color: #fff;
    background-color: black;
    border-radius: 5px;
  }    
  .mid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: #eeefef;
    width: 100%;
    height:350px;
  }
  .mid-box {
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 40px;
  } 
  .mid-box h1 {
    margin: 0px;
    padding: 0px;
    font-size: 60px;
    color: #000;
    font-weight: bold;
  }  
  .Line {
    margin-top: 10px;
    width: 250px;
    height: 5px;
    background-color: #000;
  }
  .mid-img {
    margin-top: 5px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 340px;
    width: 340px;
    background-image: url(../../../assets/mbox.png);    
  }
  .bottom {
    width: 96%;
    height: 200px;
    margin-top: 10px;
    margin-left: 30px;
  }
  .b-heading h3 {
    font-size: 23px;
    color: #000;
    font-weight: bold;
  }
  .Line-small {
    margin-top: 3px;
    width: 70px;
    height: 2px;
    background-color: #000;    
  }
  .row {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  .col {
    padding: 0PX;
    box-sizing: border-box;
    border: 1px solid #000;
    margin: 8px;
    height: 460px;
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
  #Vspan {

  }
  .Bbottom input[type="submit"] {
    border: none;
    background-color: #000;
    color: #fff;
    margin-top: 17px;
    margin-left: 130px;
    width: 120px;
    height: 50px;
    font-family: Arial;
    font-size: 17px;
    font-style: italic;
    box-shadow: 3px 3px #dedee0;
    border-radius: 10px;;
  }   
  .tbtn input[type="submit"] {
    border: none;
    background-color: #000;
    color: #fff;
    margin-top: 10px;
    margin-left: 10px;
    width: 120px;
    height: 50px;
    font-family: Arial;
    font-size: 17px;
    font-style: italic;
    box-shadow: 3px 3px #dedee0;
    border-radius: 10px;;
  }   
</style>