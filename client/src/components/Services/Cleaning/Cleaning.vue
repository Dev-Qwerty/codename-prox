<template>
  <div class="Container">
    <div class="top-box">
      <h3>Back to services</h3>
    </div>
    <div class="mid">
      <div class="mid-box">
        <h1>Quality Services</h1>
        <h1>Served with Hygeine.</h1> 
        <div class="Line"></div>
      </div>
      <div class="mid-img"></div>
    </div>
    <div class="bottom">
      <div class="b-heading">
        <h3>Cleaning Services</h3>
        <div class="Line-small"></div>
      </div>
      <div class="row">
        <div class="col">
          <!--<img id="pic1" src="../../../assets/Graph.png" alt="">
          <h4>Grow your business like a pro</h4>-->
        </div>
        <div class="col">
          <!--<img id="pic2" src="../../../assets/Accept.png" alt="">
          <h4>Work on your own terms</h4>-->
        </div>
        <div class="col">
          <!--<img id="pic3" src="../../../assets/Warranty.png" alt="">
          <h4>Get verified customer request</h4>-->
        </div>            
      </div>
    </div>
  </div>    
</template>

<style scoped>
  .top-box {
    height: 50px;
    background-color: #000;
    width: 100%; 
    box-sizing: border-box;
    padding-left: 20px;
    padding-top: 10px;
  }
  .top-box h3 {
    color: #aaa;
    font-style: italic;
    font-size: 21px;
  }
  .mid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: #eeefef;
    width: 100%;
    height:350px;
  }
  .mid-box {
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 40px;
  } 
  .mid-box h1 {
    margin: 0px;
    padding: 0px;
    font-size: 60px;
    color: #000;
    font-weight: bold;
  }  
  .Line {
    margin-top: 10px;
    width: 250px;
    height: 5px;
    background-color: #000;
  }
  .mid-img {
    margin-top: 5px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 340px;
    width: 340px;
    background-image: url(../../../assets/mbox.png);    
  }
  .bottom {
    width: 96%;
    height: 200px;
    margin-top: 10px;
    margin-left: 30px;    
    /*border: 2px solid #000;*/
  }
  .b-heading h3 {
    font-size: 23px;
    color: #000;
    font-weight: bold;
  }
  .Line-small {
    margin-top: 3px;
    width: 70px;
    height: 2px;
    background-color: #000;    
  }
  .row {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
  .col {
    box-sizing: border-box;
    border: 1px solid #000;
    margin: 8px;
    height: 200px;
    background-color: #eeefef;  
  }
  #pic1 {
    width: 90px;
    position: absolute;
    top: 15px;
    left: calc(50% - 50px);
  }
  #pic2 {
    width: 90px;
    position: absolute;
    top: 15px;
    left: calc(50% - 50px);
  }
  #pic3 {
    width: 90px;
    position: absolute;
    top: 15px;
    left: calc(50% - 50px);
  }
</style>