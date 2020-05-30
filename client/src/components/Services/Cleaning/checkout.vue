<template>
  <div class="Modal">
    <div class="Mbg">
      <div class="Mbox">
        <div class="mainheader">
          <div>
            <p class="header-p">CHECKOUT</p>
          </div>
          <div>
            <router-link :to="{ path: '/services/cleaning/modal/cart' }">
              <div class="cbtn"></div>
            </router-link>
          </div>

        </div>
        <div>

        </div>
        <div class="address">
          <p class="addrheader">Address</p>
          <form class="addr" action="" method="">
            <div>
              <input class="input-box" type="text" name="uname" placeholder="Full Name" v-model="username">
            </div>
            <div>
              <input class="input-box" type="text" name="contactno" placeholder="Contact Number" v-model="password">
            </div>
            <div>
              <input class="input-box" type="text" name="flatname" placeholder="Flat name/no." v-model="username">
            </div>
            <div>
              <input class="input-box" type="text" name="saddr" placeholder="Street Address" v-model="password">
            </div>
            <div>
              <input class="input-box" type="text" name="district" placeholder="District" v-model="username">
            </div>
            <div>
              <input class="input-box" type="text" name="pincode" placeholder="Pincode" v-model="password">
            </div>                        
          </form>          
        </div> 
        <div class="td">
          <div>
            <p class="tdheader">Current date and time</p>
          </div>
          <div>
            <input type="datetime-local" class="tdfield" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00">
          </div>          
        </div> 
        <div class="btns">
          <div>
            <router-link class="paynowbtn" :to="{name: ''}" @click.native="paynowfn">
              <input type="submit" value="Pay Now">
            </router-link> 
          </div>
          <div>
            <router-link class="paylaterbtn" :to="{name: 'confirm'}" @click.native="paylaterfn">
              <input type="submit" value="Pay Later">
            </router-link>
          </div> 
        </div>                 
      </div>
      <router-view>
        <PayLaterConfirm />
      </router-view>
    </div>
  </div>  
</template>

<script>
import PayLaterConfirm from '@/components/Services/Cleaning/PayLaterConfirm.vue'

export default {
  name: 'checkout',
  components: {
    PayLaterConfirm 
  },
  data() {
    return {
      cartArr: JSON.parse(this.$cookies.get("cart"))
    }
  },
  methods: {
    paylaterfn() {
      /*alert(JSON.stringify(this.cartArr))*/
    }
  }
}
</script>

<style scoped>
  .Mbg {
    position: absolute;
    top: 0%;
    left: 0%;
    background: rgb(128, 128, 128, 0.6);
    width: 100%;
    height: 100%;
  }
  .Mbox {
    position: absolute;
    top: 5%;
    left: 25%;
    width: 50%;
    height: 610px;
    background-color: #fff;
  }
  .mainheader {
    width: 100%;
    height: 50px;
    background-color: #f2f2f2;
    display: grid;
    grid-template-columns: 1fr 1fr;    
  }
  .header-p {
    font-size: 20px;
    padding-left: 5%;
    padding-top: 3%;
    font-weight: bold;
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
  .address {
    margin-left: 100px;
    margin-top: 25px;
  }
  .addrheader {
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
  .input-box {
    font-size: 18px;
    width: 80%;
    margin-top: 20px;
    border-right: none;
    border-top: none;
    border-left: none; 
    border-bottom: 1px solid #aaa;
  }
  .td {
    margin-left: 100px;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 35% 65%;
  }  
  .tdheader {
    font-size: 18px;
  }
  .btns {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 23%;
  }  
  .paynowbtn input[type="submit"]{
    width: 40%;
    height: 45px;
    border: none;
    color: #fff;
    background-color: black;
    border-radius: 5px;
  }
  .paylaterbtn input[type="submit"]{
    width: 40%;
    height: 45px;
    border: none;
    color: #fff;
    background-color: black;
    border-radius: 5px;
  }    
</style>