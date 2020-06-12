<template>
  <div class = "box">
    <h4>Sign up</h4>
    <p id="one">Hello customer let's get started</p>
    <!--<div class="wrapper">
      <div class="col googleIcon"></div>
    </div>
    <p id="two">Sign up with your social network</p>-->
  </div>
</template>

<style scoped>    
  .box {
    width: 27%;
    height: 175px;
    background-color: #000;
    color: #fff;
    opacity: 0.9;
    top: 25%;
    left: 50%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding: 0px;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid #000;
    box-shadow: 7px 7px #eeefef;
    padding-top: 50px;
  }
  .box h4 {
    font-size: 30px;
    color: #fff;
    margin-bottom: 2px;
  }
  #one {
    margin-top: 0px;
    color: #aaa;
    font-size: 16px;
  }
  .wrapper {
    width: 25%;
    margin: 0px;
    padding-left: 0px;
    padding-right: 5px;
    padding-bottom: 0px;
    padding-top: 0px;    
    display: flex;
  }
  .col {
    margin-right: 15px;
    height: 25px;
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 2px; 
  }  
  .col.googleIcon {
    background-image: url('../../assets/Gicon.jpg');
  }
  #two {
    margin-top: 5px;
    color: #aaa;
    font-size: 13px;
  }
</style>