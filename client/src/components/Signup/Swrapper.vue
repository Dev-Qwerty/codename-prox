<template>
  <div class="wrapper">
    <div class="wcbox">
      <p class="wch">Are you a proffessional?</p>
      <div class="img"></div>
    </div>
  </div>  
</template>

<style scoped>
  .wrapper {
    margin-left: 5%;
    width: 90%;
    height: 630px;
    background-color: #eeefef;
    margin-bottom: 20px;
  }
  .wcbox {
    box-sizing: border-box;
    position: absolute;
    left: 75%;
    top: 15%;
    width: 15%;
    height: 15%;
    display: grid;
    grid-template-columns: 60% 40%;
    background-color: #fff;
  }
  .wch {
    font-size: 17px;
    padding-left: 10px;
    padding-top: 10px;
  }
  .img {
    margin: 0px;
    width: 100%;
    background-image: url(../../assets/Cworker.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;     
  }
</style>