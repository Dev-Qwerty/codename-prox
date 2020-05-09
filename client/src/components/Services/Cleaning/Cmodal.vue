<template>
  <div class="Modal">
    <div class="Mbg">
      <div class="Mbox">
        <div class="Img">
          <router-link :to="{ path: '/services/cleaning' }">
            <div class="cbtn"></div>
          </router-link>
        </div>
        <p class="Heading">{{ sarray.name }}</p>
        <div v-for="sr in sarray.categories" v-bind:key="sr._id">
          <div class="sBox">
            <div class="Flex">
              <p id="one">{{ sr.category }}<p>
              <div class="Rs"></div>
              <p id="two">{{ sr.amount }}</p>
              <div class="btn">
                <input type="submit" value="ADD" @click="fn(sr._id)">
              </div>
            </div>
            <p id="Vdetails">view details  <span id="Vspan">></span></p>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../../event-bus.js'

export default {
  name: 'Cmodal',
  data() {
    return {
      sarray: this.$route.params.sarray
    }   
  },
  methods: {
    fn(id) {
      //this.$root.$emit('clickk', id)
      EventBus.$emit('clickk', id)
    }
  }
}
</script>

<style scoped>
  .Mbg {
    position: absolute;
    top: 0%;
    left: 0%;
    background: rgb(128, 128, 128, 0.8);
    width: 100%;
    height: 197%;
  }
  .Mbox {
    position: absolute;
    top: 8%;
    left: 25%;
    width: 50%;
    height: 900px;
    background-color: #fff;
  }
  .Img {
    margin: 0px;
    width: 100%;
    height: 340px;
    background-image: url(../../../assets/cimg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;        
  }
  .cbtn {
    position: absolute;
    top: 2%;
    left: 94%;
    width: 30px;
    height: 30px;
    background-image: url(../../../assets/closebtn.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;        
  }  
  .Heading {
    color: #000;
    font-size: 28px;
    margin-top: 20px;
    text-align: center;
    margin-bottom: 0px;
  }
  .sBox {
    margin-left: 35px;
    margin-top: 20px;
    width: 90%;
    border: 1px solid #000;
    height: 90px;
  } 
  .Flex {
    display: flex;
  }
  #one {
    margin-top: 22px;
    margin-left: 20px;
    margin-bottom: 0px;
    font-weight: bold;
    font-size: 20px;;
  }
  .Rs {
    margin-bottom: 0px;
    margin-top: 35px;
    margin-left: 340px;
    width: 15px;
    height: 15px;
    background-image: url(../../../assets/rupee.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;       
  }
  #two {
    margin-bottom: 0px;
    margin-top: 27px;
    margin-left: 2px;
    font-weight: bold;
    font-size: 20px;    
  }
  .btn input[type="submit"] {
    border: none;
    background-color: #000;
    color: #fff;
    margin-bottom: 0px;
    margin-left: 50px;
    margin-top: 22px;
    width: 80px;
    height: 40px;
    font-family: Arial;
    font-size: 15px;
    box-shadow: 3px 3px #dedee0;
    border-radius: 10px;;
  } 
  #Vdetails {
    margin-bottom: 0px;;
    margin-top: 1px;
    margin-left: 20px;
    font-weight: bold;
    font-size: 14px;
    color: blue;
  }    
</style>