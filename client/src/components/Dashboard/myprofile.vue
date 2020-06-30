<template>
  <div class="wr-wrapper">
    <div class="wr-grid">


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
  .wr-grid {
    width: 100%;
    height: 1500px;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

</style>