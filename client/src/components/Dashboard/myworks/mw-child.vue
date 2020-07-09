<template>
  <div class="Wrapper">
    <div class="a">
      <div class="aa">
        <div class="aaa">
          <p>{{ sr.service.subserviceName }}</p>
          <p><span>Amount: </span>{{ sr.totalAmount }}</p>
        </div>
        <div class="aab">
          <div class="aab-top">
            <p>Categories</p>
          </div>
          <div class="aab-body">
            <div class="aab-boxes">
              <div class="aab-box">
                <div class="aab-box-col1">
                  <p>{{ sr.service.categories[0].category }}</p>
                </div>
                <div class="aab-box-col2">
                  <p>{{ sr.service.categories[0].quantity }}</p>
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
          <p>02:30 PM</p>
          <p>{{ sr.date }}</p>
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
    width: 95%;
    display: grid;
    grid-template-columns: 60% 40%;
  }
  .aa {
    display: grid;
    grid-template-rows: 150px max-content;
    margin-right: 20px;
  }
  .aaa {
    /*box-shadow: 0 0 8px #DBDBDB;*/
    box-shadow: -5px 5px 5px #DBDBDB;
    background-color: #fff;
    color: #000;
    padding-left: 10%;
    padding-top: 5%;
    margin-bottom: 20px;
  }
  .aab {
    background-color: #fff;
    box-shadow: -5px 5px 5px #DBDBDB;
  }
  .aab-top {
    width: 20%;
    height: 35px;
    background-color: #000;
    color: #fff;
    padding-left: 5px;
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
    padding-left: 5%;
    padding-top: 10px;
  }
  .ab {
    height: 450px;
    grid-template-rows: 80% 20%;
    display: grid;
  }
  .aba {
    /*border: 1px solid #000*/
    box-shadow: -5px 5px 5px #DBDBDB;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .aba-top {
    width: 35%;
    height: 35px;
    background-color: #000;
    color: #fff;
    padding-left: 5px;
    padding-top: 5px;
  }
  .aba-body {
    padding-left: 5%;
    padding-top: 5%;
  }
  #pin {
    margin-right: 5px;
  }
  #phone {
    margin-right: 5px;
  }
  .abb {
    box-shadow: -5px 5px 5px #DBDBDB;
    background-color: #fff;
  }
  .happy-code {
    margin-top: 30px;
  }
  .hc-line {
    width: 95%;
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