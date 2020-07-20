<template>
  <div class="Wrapper">
      <p class="hdn">Your Bookings</p>
      
      <div class="cards">
        
        <div v-for="srr in arr" v-bind:key="srr.orderID">
          <div class="box">
            <div class="r1">
              <p class="r1-1">{{ srr.service.subserviceName }}</p>
              <div class="Line"></div>            
            </div>
            <div class="r2">
              <p class="r2-1">{{ srr.date }}</p> 
              <p class="r2-2">{{ srr.time }}</p>
            </div>
            <div class="r3">
              <!--<router-link :to="{ name: '' }">-->
              <p class="r3-1" @click="fn(srr)">Track Your Booking</p>
              <!--</router-link>-->
            </div>
          </div>
        </div>

        <!--<div class="box">
          <div class="r1">
            <p class="r1-1">Plumbing</p>
            <div class="Line"></div>            
          </div>
          <div class="r2">
            <p class="r2-1">09:00 AM</p>
          </div>
          <div class="r3">
            <p class="r3-1">Scheduled</p>
          </div>
        </div>  
        <div class="box">
          <div class="r1">
            <p class="r1-1">Carpentry</p>
            <div class="Line"></div>            
          </div>
          <div class="r2">
            <p class="r2-1">09:00 AM</p>
          </div>
          <div class="r3">
            <p class="r3-1">Scheduled</p>
          </div>
        </div>-->                      
      </div>
  
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      cid: this.$cookies.get("id"),
      arr: []      
    }
  },
  methods: {

    apiCall() {
      let url = this.$serverURLI +'/customer/bookings/' + this.cid 
      this.$http.get(url)
      .then((response) => {
        this.arr = response.data
      })
      .catch((error) => {
        alert(error);
      })     
    },

    fn(obj) {
      this.$cookies.set("cd-b-child", JSON.stringify(obj), "1d");
      this.$cookies.set("orderstatus", JSON.stringify({"placed": false, "accepted": false, "arrived": false, "started": false, "completed": false, "payment": false}), "1d");
      window.location.href = "http://localhost:8080/customerdashboard/bchild";
    }
  },

  created() {
   this.apiCall()
  }        
}       
</script>

<style scoped>
  .Wrapper {
    padding-left: 3%;
    padding-top: 4%;
  }
  .hdn {
    font-size: 24px;
    font-family: p-medium;
  }
  .cards {
    padding-left: 2%;
    width: 90%;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  
  }   
  .box {
    margin-bottom: 20px;
    width: 320px;
    height: 185px;
    background-color: #fff;
    border: 1px solid #F5F5F5;
    box-shadow: 0px 3px 5px #00000029;
    border-radius: 16px;
    display: grid;
    grid-template-rows: 0.8fr 1fr 1fr;
    opacity: 0.9;
  }    
  a {
    text-decoration: none;
  }
  .r1 {
    text-align: center;
    padding-top: 18px;
  }
  .r1-1 {
    text-align: center;
    font-size: 22px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  }
  .Line {
    margin-top: 2px;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    width: 250px;
    background-color: #707070;
  }
  .r2 {
    text-align: center;
    padding-top: 10px;
  }
  .r2-1 {
    font-size: 26px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  } 
  .r2-2 {
    font-size: 20px;
    font-family: p-medium;
    margin-left: auto;
    margin-right: auto;
    color: #aaa;
  }  
  .r3 {
    margin-top: -12px;
    text-align: center;
  }
  .r3-1 {
    font-size: 20px;
    color: #0084E9;
    font-family: p-medium;
  } 
  .r3-1:hover {
    cursor: pointer;
  }
</style>