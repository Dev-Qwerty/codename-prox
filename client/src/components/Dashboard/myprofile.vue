<template>
  <div class="mp-wrapper">
    <div class="mp-box">
      <div class="top-hdn">
        <p>My Profile</p>  
      </div>      

    </div>
  </div>    
</template>

<script>

export default {
  data() {
    return {
      wid: this.$cookies.get("id"),
      wtoken: this.$cookies.get("pid"),
      reqarr: []
    }
  },
  methods: {
    apiCall() {
      //let url = 'http://localhost:3000/getCompleteProfile?id=' + this.wid + '&token=' + this.wtoken
      let url = 'http://localhost:3000/worker/getCompleteProfile?id=3c7eebb2088869c6a1d8b3f3b47bcd36336e2f5b52db771f953002eecb93c61c21a7e67c5e588db44aff6fd57ac37c37&token=4290c3d82149b68fbbe7266ba18df471'
      this.$http.get(url)
      .then((response) => {
        this.reqarr = response.data
        alert(JSON.stringify(this.reqarr))
      })
      .catch((error) => {
        alert(error);
      })     
    },
 
  },
  created() {
   this.apiCall()
  }
} 
</script>

  <style scoped>
  .mp-wrapper {
    width: 100%;
    height: 1000px
  }
  .mp-box {
    /*box-shadow: -5px 5px 5px #DBDBDB;*/
    box-shadow: 0 0 10px #DBDBDB;
    width: 60%;
    height: 500px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
  }
  .top-hdn {
    font-size: 15px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    height: 36px;
    width: 100%;
    color: #aaa;
    background-color: #000;
  }
</style>