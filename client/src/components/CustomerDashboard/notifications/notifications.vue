<template>
  <div class="Wrapper">
    <div class="box-wrapper">
      <div class="box">
        <div class="r1">
          <p class="r1-1">Kitchen Cleaning</p>
          <p class="r1-2">Order ID: OD785108104789069</p>        
        </div>
        <div class="r2">
          <p class="r2-1">START TOKEN: 4386</p>
        </div>
      </div>
      <div class="box">
        <div class="r1">
          <p class="r1-1">Full House Deep Cleaning</p>
          <p class="r1-2">Order ID: OD785108104789069</p>        
        </div>
        <div class="r2">
          <p class="r2-1">END TOKEN: 4386</p>
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
      narr: []
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
    width: 85%;
    height: 110px;
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
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }
  .r1-1 {
    border-right: 1px solid #00000029;
    padding-top: 10px;
    padding-left: 20px;
    font-size: 18px;
    font-family: p-medium;
    margin: 0px;
    color: #aaa;
  }
  .r1-2 {
    padding-left: 20px;
    padding-top: 10px;
    font-size: 17px;
    font-family: p-medium;
    margin: 0px;
    color: #aaa;
  }  
  .r2 {
    text-align: start;
    height: 100%;
  }
  .r2-1 {
    margin: 0;
    font-size: 23px;
    font-family: p-medium;
    padding-left: 40px;
    padding-top: 15px;
    color: #000;
  }
</style>