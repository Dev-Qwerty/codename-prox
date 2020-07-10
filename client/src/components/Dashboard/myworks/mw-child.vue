<template>
  <div class="Wrapper">
    <div class="a">
      <div class="aa">
        <div class="aaa">
          <p class="aaa-p1">{{ sr.service.subserviceName }}</p>
          <p class="aaa-p2"><span>Amount:  </span><span>$</span>{{ sr.totalAmount }}</p>
        </div>
        <div class="aab">
          <div class="aab-top">
            <p>Categories</p>
          </div>
          <div class="aab-body">
            <div class="aab-boxes">
              <div v-for="(arr, index) in sr.service.categories" :key="index">
                <div class="aab-box">
                  <div class="aab-box-col1">
                    <p>{{ arr.category }}</p>
                  </div>
                  <div class="aab-box-col2">
                    <p>{{ arr.quantity }}</p>
                  </div>
                </div> 
              </div>              
            </div>                                                                                      
          </div>
        </div>
      </div>
      <div class="ab">
        <div class="aba">
          <div class="aba-top">
            <p>Contact Details</p>
          </div>
          <div class="aba-body">
            <p>{{ sr.address.name }}</p>
            <p>{{ sr.address.line1 }}</p>
            <p>{{ sr.address.line1 }}</p>
            <p>{{ sr.address.district }}</p>
            <p><span id="pin">Pin:</span>{{ sr.address.pin }}</p>
            <p><span id="phone">Phone:</span>{{ sr.address.phone }}</p>
          </div>
        </div>
        <div class="abb">
          <p>{{ sr.date }}</p>
          <p>02:30 PM</p>
        </div>
      </div>
    </div>
    <div class="happy-code">
      <div class="hc-line"></div>
      <input type="submit" value="Arrived" class="btn">
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      sr: this.$cookies.get("wd-mw-child")
    }
  },
  methods: { 
    fn() {
    }
  }   
}       
</script>

<style scoped>
  .Wrapper {
    padding-left: 5%;
    padding-top: 5%;
  }
  .a {
    width: 90%;
    display: grid;
    grid-template-columns: 60% 40%;
  }
  .aa {
    display: grid;
    grid-template-rows: 150px max-content;
    margin-right: 25px;
  }
  .aaa {
    /*box-shadow: 0 0 8px #DBDBDB;*/
    box-shadow: -5px 5px 5px #DBDBDB;
    border: 1px solid #DBDBDB;
    background-color: #fff;
    color: #000;
    padding-left: 10%;
    padding-top: 5%;
    margin-bottom: 25px;
  }
  .aaa-p1 {
    font-family: lato-bold;
    font-size: 22px;
  }
  .aaa-p2 {
    margin-top: -8px;
    font-size: 16px;
  }
  .aab {
    background-color: #fff;
    box-shadow: -5px 5px 5px #DBDBDB;
    border: 1px solid #DBDBDB;
  }
  .aab-top {
    width: 22%;
    height: 35px;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding-top: 5px;
  }
  .aab-body {
    padding-left: 5%;
    padding-top: 5%;
  }
  .aab-boxes {
    margin-bottom: 40px;
  }
  .aab-box {
    width: 80%;
    height: 50px;
    border: 1px solid #DBDBDB;
    box-shadow: -5px 5px 5px #DBDBDB;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
  .aab-box-col1 {
    border-right: 1px solid #DBDBDB;
    padding-left: 5%;
    padding-top: 10px;
  }
  .aab-box-col2 {
    padding-left: 10%;
    padding-top: 10px;
  }
  .ab {
    height: 400px;
    grid-template-rows: 75% 25%;
    display: grid;
  }
  .aba {
    /*border: 1px solid #000*/
    box-shadow: -5px 5px 5px #DBDBDB;
    border: 1px solid #DBDBDB;
    background-color: #fff;
    margin-bottom: 25px;
  }
  .aba-top {
    width: 40%;
    height: 35px;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding-top: 5px;
  }
  .aba-body {
    padding-left: 5%;
    padding-top: 5%;
  }
  .aba-body p {
    margin-bottom: 10px;
  }
  #pin {
    margin-right: 5px;
  }
  #phone {
    margin-right: 5px;
  }
  .abb {
    box-shadow: -5px 5px 5px #DBDBDB;
    border: 1px solid #DBDBDB;
    background-color: #fff;
    padding-left: 5%;
    padding-top: 5%;
  }
  .abb p {
    margin-bottom: 8px;
  }
  .happy-code {
    margin-top: 30px;
  }
  .hc-line {
    width: 90%;
    height: 3px;
    background-color: #DBDBDB;
  }
  .btn {
    margin-top: 10px;
    width: 180px;
    height: 40px;
    background-color: #000;
    color: #fff;
    border-right: 20px;
    box-shadow: -4px 4px 4px #DBDBDB;
    /*border: 1px solid #DBDBDB;*/
  }
</style>