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

</style>