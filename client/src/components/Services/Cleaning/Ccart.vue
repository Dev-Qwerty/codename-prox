<template>
  <div class="Modal">
    <div class="Mbg">
      <div class="Mbox">
        <div class="Img">
          <router-link :to="{ path: '/services/cleaning/modal' }">
            <div class="cbtn"></div>
          </router-link>
        </div>
        <div v-for="sr in cartArr" v-bind:key="sr._id">
          <div class="sBox">
            <p id="one">{{ sr.category }}</p>
          </div>
        </div>   
        <router-link class="checkoutbtn" :to="{name: 'cart'}" @click.native="checkoutfn">
          <input type="submit" value="checkout">
        </router-link>             
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Cmodal',
  data() {
    return {
      cartArr: JSON.parse(this.$cookies.get("cart"))
    }   
  },
  methods: {
  
  },
  created() {
  }   
}
</script>

<style scoped>
  .Mbg {
    position: absolute;
    top: 0%;
    left: 0%;
    background: rgb(128, 128, 128, 0.5);
    width: 100%;
    height: 100%;
  }
  .Mbox {
    position: absolute;
    top: 6%;
    left: 25%;
    width: 50%;
    height: 900px;
    background-color: #fff;
  }
  .Img {
    margin: 0px;
    width: 100%;
    height: 340px;
    background-image: url(../../../assets/Cimg1.jpg);
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
    height: 60px;
  } 
  .Flex {
    display: flex;
  }
  #one {
    margin-top: 13px;
    margin-left: 20px;
    margin-bottom: 0px;
    font-weight: bold;
    font-size: 20px;;
  }
  .checkoutbtn input[type="submit"]{
    margin-top: 20px;
    margin-left: 40%;
    width: 100px;
    height: 45px;
    border: none;
    color: #fff;
    background-color: black;
    border-radius: 5px;
 }  
</style>