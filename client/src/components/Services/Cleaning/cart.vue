<template>
  <div class="cart-wrapper">
    <div class="cart">
      <div class="top-row">
        <router-link class="arrowIcon" :to="{ path: '/services/cleaning/modal' }"></router-link>
      </div>
      <div class="cart-body">
        <div class="col1-cart">
          <p class="c1-p">Shopping Cart</p>
          <div class="c1-box">
            <div class="c1-box-line1"></div>
            <div class="c1-box-hgrid">
              <div class="c1-box-c1">
                <p>Category</p>
              </div>
              <div class="c1-box-c2">
                <p>Quantity</p>
              </div>
              <div class="c1-box-c3">
                <p>Price</p>
              </div>
              <div class="c1-box-c4">
                <p>Total</p>
              </div>
            </div>
            <div class="c1-box-line2"></div>
            <div class="c1-box-dgrid-wrapper">
              <div v-for="sr in cartArr" v-bind:key="sr._id">
                <div class="c1-box-dgrid">
                  <div class="c1-box-col1">
                    <!--<p>Full House Deep Cleaning</p>
                    <p>2:45 PM</p>-->
                    <p>{{ sr.category }}</p>
                  </div>
                  <div class="c1-box-col2">
                    <!--<p>{{ sr.category }}</p>-->
                  </div>
                  <div class="c1-box-col3">
                    <p>{{ sr.amount }}</p>
                  </div>
                  <div class="c1-box-col4">
                    <p>$299</p>
                  </div>
                </div> 
              </div>
            </div>
            <div class="c1-box-line3"></div>
          </div>
        </div>
        <div class="col2-checkout-box sh-all">
          <div class="col2-row1">
            <p class="col2-row1-p">ORDER SUMMARY</p>
          </div>
          <div class="Line"></div>
          <div class="col2-row2">
            <div v-for="n in 3" v-bind:key="n">
              <div class="items-wrapper">
                <div class="col2-row2-col1">
                  <p class="col2-row2-col1-p">item 1</p>
                </div>
                <div class="col2-row2-col2">
                  <p class="col2-row2-col2-p">$299.00</p>
                </div>
              </div>
            </div>
          </div>
          <div class="Line"></div>
          <div class="col2-row3">
            <div class="totcost-wrapper">
              <div class="col2-row3-col1">
                <p class="col2-row3-col1-p">Total Cost</p>
              </div>
              <div class="col2-row3-col2">
                <p class="col2-row3-col2-p">$299.00</p>
              </div>
            </div> 
            <router-link class="" :to="{name: 'checkout'}" @click.native="checkoutfn">
              <div class="c2-r3-btn">
                <p class="c3-r3-p">CHECKOUT</p>
              </div>  
            </router-link>  
            <div class="c2-r3-pcode">
              <p class="c2-r3-p">PROMOTIONAL CODE</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
    <router-view>
      <checkout />
    </router-view>    
  </div>
</template>

<script>
import checkout from '@/components/Services/Cleaning/checkout.vue'

export default {
  name: 'cart',
  components: {
    checkout
  },
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
  .cart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .top-row {
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
  .cart-body {
    margin-top: 80px;
    margin-left: 80px;;
    width: 90%;
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
  .col1-cart {
    height: 200px;
  }
  .c1-p {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .c1-box {
    height: 350px;
    display: grid;
    grid-template-rows: 2px 17% 2px 83% 2px;
  }
  .c1-box-line1 {
    width: 90%;
    height: 2px;
    background-color: #cecece;
  }  
  .c1-box-hgrid {
    height: 60px;
    width: 90%;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    font-size: 20px;
  }
  .c1-box-c1 {
    padding-left: 10px;
    padding-top: 10px;
  }
  .c1-box-c2 {
    /*padding-left: 10px;*/
    padding-top: 10px;
  }
  .c1-box-c3 {
    /*padding-left: 10px;*/
    padding-top: 10px;
  }
  .c1-box-c4 {
    /*padding-left: 10px;*/
    padding-top: 10px;
  }
  .c1-box-line2 {
    width: 90%;
    height: 2px;
    background-color: #cecece;
  }    
  .c1-box-dgrid {
    margin-top: 10px;
    padding-top: 10px;
    height: 60px;
    width: 90%;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    font-size: 18px;
  }
  .c1-box-col1 {
    padding-left: 10px;
  }
  .c1-box-col1 p {
    margin: 0px;
    padding-top: 10px; 
  }
  .c1-box-col2 {
   padding-top: 10px; 
  }
  .c1-box-col3 {
   padding-top: 10px; 
  }
  .c1-box-col4 {
    padding-top: 10px;
  }  
  .c1-box-line3 {
    width: 90%;
    height: 2px;
    background-color: #cecece;
  }   
  .col2-checkout-box {
    height: 450px;
    background-color: #f2f2f2;
    display: grid;
    grid-template-rows: 15% 1px 52% 1px 33%;  
  }
  .sh-all {
    box-shadow: 0 0 3px #d9d9d9;
  } 
  .col2-row1 {
    padding-left: 15px;
    padding-top: 26px;
  }
  .col2-row1-p {
    font-size: 19px;
    font-weight: bold;
  }
  .Line {
    margin-left: 15px;
    width: 90%;
    background-color: #cecece;
  }
  .col2-row2 {
    padding-top: 10px;
    padding-left: 15px;
  }
  .items-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 10px;  
    font-size: 18px;  
  }
  .col2-row2-col1-p {
    margin: 0px;
  }
  .col2-row2-col2-p {
    margin: 0px;
  }  
  .totcost-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 10px;    
  }  
  .col2-row3 {
    padding-top: 10px;
    padding-left: 15px;
  }
  .col2-row3-col1-p {
    font-size: 19px;
    margin: 0px;
  }
  .col2-row3-col2-p {
    font-size: 19px;
    margin: 0px;
  }    
  .c2-r3-btn {
    width: 94%;
    height: 40px;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding-top: 6px;
  }
  .c3-r3-p {
    font-size: 16px;
    font-weight: bold;
  }
  .c2-r3-pcode {
    padding-top: 10px;
  }
  .c2-r3-p {
    font-size: 14px;
  }
</style>