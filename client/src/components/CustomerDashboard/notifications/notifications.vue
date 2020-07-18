<template>
  <div class="Wrapper">
    <div class="box-wrapper">

      <div v-for="srr in arr" v-bind:key="srr.orderID">

        <div class="box">
          <div class="r1">
            <p class="r1-1">{{ srr.serviceName }}</p>
            <p class="r1-2"><span>Order ID: </span>{{ srr.orderID }}</p>
            <p class="r1-3"><span>Status: </span>{{ srr.status }}</p>         
          </div>
          <div class="r2">
            <p v-if="srr.startToken" class="r2-1"><span  class="r2-1-1"> START TOKEN: </span><span class="r2-1-2">{{ srr.startToken }}</span></p>
            <!--<p v-if="this.arr.completeToken" class="r2-1"><span> END TOKEN: </span>{{ this.arr.completeToken }}</p>-->
          </div>
        </div>    

      </div>
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
      let url = this.$serverURLI +'/customer/notifications/' + this.cid 
      this.$http.get(url)
      .then((response) => {
        this.arr = response.data
        alert(JSON.stringify(this.arr))
      })
      .catch((error) => {
        alert(error);
      })     
    },
    fn() {

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
  .box-wrapper {
  }   
  .box {
    width: 90%;
    height: 90px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #00000029;
    box-shadow: 0px 3px 5px #00000029;
    display: grid;
    grid-template-rows: 0.7fr 1fr;
    margin-bottom: 20px;
  }    
  a {
    text-decoration: none;
  }
  .r1 {
    border-bottom: 1px solid #00000029;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
  }
  .r1-1 {
    border-right: 1px solid #00000029;
    padding-top: 6px;
    padding-left: 15px;
    font-size: 16px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  }
  .r1-2 {
    padding-top: 6px;
    padding-left: 15px;
    font-size: 16px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  } 
  .r1-3{
    border-left: 1px solid #00000029;
    padding-top: 6px;
    padding-left: 15px;
    font-size: 16px;
    font-family: p-medium;
    margin: 0px;
    color: #000;
  }       
  .r2 {
    text-align: start;
    height: 100%;
  }
  .r2-1 {
    margin: 0;
    font-family: p-medium;
    padding-left: 40px;
    padding-top: 10px;
    color: #000;
  }
  .r2-1-1 {
    font-size: 20px;
  }  
  .r2-1-2 {
    border: 1px solid #aaa;
    border-radius: 5px;
    font-size: 20px;
    margin-left: 10px;
  }
</style>