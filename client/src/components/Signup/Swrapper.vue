<template>
  <div class="wrapper">
    <router-link class="" :to="{ path: '/gethired' }">
      <div class="wcbox">
        <p class="wch">Join with us as Associates!</p>
        <div class="img"></div>
      </div>
    </router-link>      
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
    width: 16%;
    height: 15%;
    display: grid;
    grid-template-columns: 60% 40%;
    background-color: #fff;
    box-shadow: 3px 3px #ceced1;
    border-radius: 6px;
  }
  .wch {
    margin-left: 8px;
    font-size: 18px;
    padding-left: 15px;
    padding-top: 30px;
    color: #000;
  }
  .img {
    margin-left: -5px;
    margin-bottom: 10px;
    width: 100%;
    background-image: url(../../assets/Cworker.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;     
  }
</style>