<template>
  <div class="Modal">
    <div class="Mbg">
      <div class="Mbox">
        <div class="mainheader">
          <router-link :to="{ path: '/services/cleaning/modal/cart' }">
            <div class="cbtn"></div>
          </router-link>
        </div>
        <div class="address">
          <form action="" method="">
            <div>
              <input class="input-box" type="text" name="uname" placeholder="USERNAME" v-model="username">
            </div>
            <div>
              <input class="input-box" type="Password" name="password" placeholder="PASSWORD" v-model="password">
            </div>
            <div>
              <input class="input-box" type="text" name="uname" placeholder="USERNAME" v-model="username">
            </div>
            <div>
              <input class="input-box" type="Password" name="password" placeholder="PASSWORD" v-model="password">
            </div>
            <div>
              <input class="input-box" type="text" name="uname" placeholder="USERNAME" v-model="username">
            </div>
            <div>
              <input class="input-box" type="Password" name="password" placeholder="PASSWORD" v-model="password">
            </div>                        
          </form>          
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
    top: 6%;
    left: 25%;
    width: 50%;
    height: 600px;
    background-color: #fff;
  }
  .mainheader {
    width: 100%;
    height: 50px;
    background-color: #f2f2f2;
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
  .btns {
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