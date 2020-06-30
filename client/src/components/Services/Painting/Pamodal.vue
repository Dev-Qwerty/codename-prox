<template>
  <div class="Modal">
    <div class="Mbg">
      <div class="Mbox">
        <div class="Img">
          <router-link :to="{ path: '/services/painting' }" @click.native="closefn">
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
              <!-- <div class="btn">
                <input type="submit" value="ADD" @click="fn(sr)">
              </div> -->
              <button
                v-show="!inCart.includes(sr._id)"
                @click="fn(sr)"
                class="btn"
              >ADD</button>
              <button
                v-show="inCart.includes(sr._id)"
                @click="rm(sr)"
                class="btn"
              >REMOVE</button>
            </div>
            <p id="Vdetails">view details  <span id="Vspan">></span></p>
          </div>
        </div>        
      </div>
      <router-link class="cartbtn" :to="{name: 'cart'}" @click.native="cartfn">
        <input type="submit" value="cart">
      </router-link>    
      <router-view>
        <cart />  
      </router-view>  
    </div>
  </div>
</template>

<script>
import EventBus from '../../../event-bus.js'
import cart from '@/components/Checkout/cart.vue'

export default {
  name: 'Cmodal',
  components: {
    cart
  },
  data() {
    return {
      inCart: [],
      cartArr: [],
      sarray: this.$cookies.get("sarray")
    }   
  },
  methods: {
    fn(obj) {
      if(obj.quantity == 0) {
        obj.quantity = obj.quantity + 1
      }
      this.cartArr = []
      if(this.$cookies.get("cart") != null){
        for (let i = 0; i < JSON.parse(this.$cookies.get("cart")).length; i++) {
          this.cartArr.push(JSON.parse(this.$cookies.get("cart"))[i])
        }     
      }
      this.inCart.push(obj._id)
      this.cartArr.push(obj)
      this.$cookies.set("cart", JSON.stringify(this.cartArr), '1d')
      /*EventBus.$emit('sub-sub-service', obj)*/
    },
    rm(obj){
      this.cartArr = []
      if(this.$cookies.get("cart") != null){
        for (let i = 0; i < JSON.parse(this.$cookies.get("cart")).length; i++) {
          this.cartArr.push(JSON.parse(this.$cookies.get("cart"))[i])
        }     
      }
      this.inCart = this.inCart.filter(element => element != obj._id)
      this.cartArr = this.cartArr.filter(element => element._id != obj._id)
      this.$cookies.set("cart", JSON.stringify(this.cartArr), "id")
    },
    cartfn(){
      EventBus.$emit("routepath", "/services/painting/pamodal")
    },
    closefn() {
      this.$cookies.remove("cart") 
    }
  },
  created() {
    if(this.$cookies.get("cart") != null){
        for (let i = 0; i < JSON.parse(this.$cookies.get("cart")).length; i++) {
          this.inCart.push(JSON.parse(this.$cookies.get("cart"))[i]._id)
        }     
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
    height: 225%;
  }
  .cartbtn input[type="submit"]{
    margin-top: 20px;
    margin-left: 90%;
    width: 100px;
    height: 40px;
    border: 2px solid #fff;
    /*border: none;*/
    color: #fff;
    background-color: black;
    border-radius: 5px;
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
  /* .btn input[type="submit"] { */
  .btn {
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
    border-radius: 10px;
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