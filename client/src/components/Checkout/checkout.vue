<template>
  <div class="Modal">
    <div class="Mbg">
      <div class="Mbox">
        <div class="mainheader">
          <div>
            <p class="header-p">CHECKOUT</p>
          </div>
          <div>
            <router-link :to="{ path: '/services/cart' }">
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
              <input class="input-box" type="text" name="uname" placeholder="Full Name" v-model="address.name">
            </div>
            <div>
              <input class="input-box" type="text" name="contactno" placeholder="Contact Number" v-model="address.phone">
            </div>
            <div>
              <input class="input-box" type="text" name="flatname" placeholder="Flat name/no." v-model="address.line1">
            </div>
            <div>
              <input class="input-box" type="text" name="saddr" placeholder="Street Address" v-model="address.line2">
            </div>
            <div>
              <input class="input-box" type="text" name="district" placeholder="District" v-model="address.district">
            </div>
            <div>
              <input class="input-box" type="text" name="pincode" placeholder="Pincode" v-model="address.pin">
            </div>                        
          </form>          
        </div> 
        <div class="td">
            <vc-date-picker
              class="tdfeild"
              v-model='date'
              :popover="{visibility: 'click'}"
              :input-props='{
                placeholder: "Date",
                readonly: true
              }'
              :min-date='new Date()'
              color='grey'
            />
            <VueCtkDateTimePicker class="tdfeild" id="TimePicker" v-model="time" only-time=true format="hh mm a" formatted="hh mm a" noHeader=true noButton=true noLabel=true label="Time" color="black"/>
        </div> 
        <div class="btns">
          <div>
            <router-link class="paynowbtn" :to="{name: 'processpayment'}">
              <input type="submit" value="Pay Now" @click="paynow">
            </router-link> 
          </div>
          <div>
            <router-link class="paylaterbtn" :to="{name: ''}">
              <input type="submit" value="Pay Later" @click="paylater">
            </router-link>
          </div> 
        </div>                 
      </div>
    </div>
  </div>  
</template>

<script>
import moment from 'moment'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import EventBus from '../../event-bus'

export default {
  name: 'checkout',
  components: {
    VueCtkDateTimePicker
  },
  data() {
    return {
      // cartArr: JSON.parse(this.$cookies.get("cart")),
      service: {
        serviceId: this.$cookies.get("sarray")._id,
        categories: JSON.parse(this.$cookies.get("cart"))
      },
      address: {
        name: '',
        phone: '',
        line1: '',
        line2: '',
        district: '',
        pin: ''
      },
      date: '',
      time: '' 
    }
  },
  methods: {
    paylaterfn(){},
    paylater() {
       this.date = moment(this.date).format('YYYY-M-D')
       let url = this.$serverURLI + "/orders/placeorder/pay-later"
       this.$http
        .post(url, {
          id: this.$cookies.get("id"),
          service: this.service,
          address: this.address,
          date: this.date,
          time: this.time
        }).then(response => {
          if(response.data.status == '01'){
            this.$cookies.remove("cart")
            window.location.href = 'http://localhost:8080/customerdashboard'
          } else {
            window.location.href = 'http://localhost:8080/orderstatus'
          }
        }).catch(error => {
          alert(error)
        })
    },
    paynow() {
      this.date = moment(this.date).format( 'YYYY-M-D')
      this.$cookies.remove("cart")
      let url = this.$serverURLI + "/orders/processpayment"
      this.$http
        .post(url, {
          id: this.$cookies.get("id"),
          service: this.service,
          address: this.address,
          date: this.date,
          time: this.time
        }).then (response => {
          EventBus.$emit("payment", response.data)
        }).catch(error => {
          alert(error)
        })
    }
  },
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
    background-image: url(../../assets/closebtn.png);
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
  .tdfeild {
    width: 200px;
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