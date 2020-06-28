<template>
  <div class = "box">
    <h3>YOUR SERVICE EXPERT</h3>
    <h5>Get instant access to reliable</h5>
    <h5>and affordable services</h5>
    <!-- <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="location" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">search</button>
      </div>
    </div> -->
    
    <div  class="Grid4">
      <div class="Grid4-inner">
        <input type="text" @click="showSuggest = true" @keyup="autosuggest" v-model="keyword" class="Grid4-box1" placeholder="Search services">
        <!-- <input type="submit" value="search" class="Grid4-box2"> -->
      </div>
      <div @mouseleave="showSuggest=false" class="Grid4-inner2" v-show="showSuggest">
        <p v-if="!this.keyword && showSuggest">Most searched services</p>
        <div v-for="suggestion in suggestions" :key="suggestion">
          <p @click="showService(suggestion)">{{ suggestion }}</p>
        </div>  
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      suggestions: [],
      showSuggest: false
    }
  },
  methods: {
    autosuggest: function() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        let url = "http://localhost:3000/autosuggest"
        this.$http
          .post(url,{
            query: this.keyword
          }).then(responce => {
            this.suggestions = responce.data;
          })
      },300)
    },
    showService(service){
      let serviceroute = "";
      if(this.keyword == ""){
       serviceroute = service.split(" ").join("-").toLowerCase();
      }else {
       serviceroute = this.suggestions[0].split(" ").join("-").toLowerCase();
      }
      this.showSuggest = false;
      window.location.href = "http://localhost:8080/services/"+serviceroute;
    }
  },
  created: function(){
    let url = "http://localhost:3000/autosuggest"
    this.$http
      .post(url,{
        query: this.keyword
      }).then(responce => {
        this.suggestions = responce.data;
      })
  },
  watch:{
    keyword: function(){
      if(this.keyword == ""){
        let url = "http://localhost:3000/autosuggest"
        this.$http
          .post(url,{
            query: this.keyword
          }).then(responce => {
            this.suggestions = responce.data;
          })
      }
    }
  }
}
</script>

<style scoped>    
  .box {
    width: 670px;
    height: 370px;
    background-color: #fff;
    opacity: 0.9;
    top: 55%;
    left: 25%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 90px;
    padding-bottom: 5px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 20px;
  }

  .box h3 {
    color: #000;
    padding-bottom: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 33px;
  }
  .box h5 {
    margin: 0;
    color: #000;
    padding-bottom: 0px;
    text-align: center;
  }
  /* .input-group {
    padding-top: 40px;
  } */
  .Grid4 {
    height: 38px;
    padding-left: 20px;
    margin: 25px;
    display: grid;
    border: 1px solid #dedee0;
    border-radius: 30px;
    box-shadow: 2px 4px #dedee0;
  }   
  .Grid4-inner {
    display: grid;
    grid-template-columns: 4fr 1fr;
  }
  .Grid4-box1 {
    border: none;
    background-color: #fff;
    color: #aaa;
    font-family: Arial;
    font-size: 17px;
    padding: 5px;
  }
  .Grid4-box2 {
    /* border: 1px solid #aaa; */
    border: none;
    background-color: #fff;
    width: 70px;
    font-family: Arial;
    font-size: 17px;   
  }   
  .Grid4-inner2 {
    display: flex;
    max-height: 230px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 15px;
    padding-left: 20px;
    overflow-y: auto;
    position: fixed;
    width: 76%;
    top: 264px;
  }
  .Grid4-inner2 > p {
    font-weight: bold;
    margin-left: -16px;
  }
  .Grid4-inner2 > div > p {
    cursor: pointer;
  }

</style>