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
      reqarr: []
    }
  },
  methods: {
    apiCall() {
      //let url = 'http://localhost:3000/worker/getCompleteProfile/f35ce2de4348f6943f9621bed9af307f'
      let url = 'http://localhost:3000/worker/getCompleteProfile/' + this.wid
      this.$http.get(url)
      .then((response) => {
        this.reqarr = response.data
        alert(this.reqarr)
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