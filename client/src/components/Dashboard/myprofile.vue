<template>
  <div class="mp-wrapper">
    <div class="mp-box">
      <div class="box-top-section">
        <p>My Profile</p>  
      </div>   
      <div class="box-body">
        <div class="flex-wrapper">
          <p>Name:</p>
          <p class="item2">{{ reqarr.name }}</p>
        </div>
        <div class="flex-wrapper">
          <p>Email:</p>
          <p class="item2">{{ reqarr.email }}</p>
        </div>
        <div class="flex-wrapper">
          <p>Phone No:</p>
          <p class="item2">{{ reqarr.phoneNo }}</p>
        </div>
        <div class="flex-wrapper">
          <p>Service:</p>
          <p class="item2">{{ reqarr.service }}</p>
        </div>       
        <div class="flex-wrapper">
          <p>Worker Type:</p>
          <p class="item2">{{ reqarr.workerType }}</p>
        </div>   
        <div class="flex-wrapper">
          <p>Rating:</p>
          <p class="item2">{{ reqarr.rating }}</p>
        </div>
        <div class="flex-wrapper">
          <p>Total Number of Works:</p>
          <p class="item2">{{ reqarr.totalWorks }}</p>
        </div>                                          
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
        //alert(JSON.stringify(this.reqarr))
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
    height: 700px
  }
  .mp-box {
    /*box-shadow: -5px 5px 5px #DBDBDB;*/
    box-shadow: 0 0 8px #DBDBDB;
    width: 60%;
    height: 500px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
  }
  .box-top-section {
    font-size: 15px;
    padding-left: 15px;
    padding-top: 10px;
    height: 40px;
    width: 100%;
    color: #fff;
    background-color: #000;
  }
  .box-body {
    margin-left: 35px;
    margin-top: 35px;
    color: #000;
  }
  .flex-wrapper {
    display: flex;
  }
  .item2 {
    margin-left: 10px;
  }
</style>