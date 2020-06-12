<template>
  <div class="Wrapper">
    <div class="box">
      <p>Page under construction!</p>
      <div class="img"></div>
    </div>
  </div>
</template>

<style scoped>
  .box {
    margin-left: 100px;
    margin-top: 100px;
    width: 35%;
    height: 150px;
    background-color: #eeefef;   
    display: grid;
    grid-template-columns: 70% 30%; 
  }
  .box p {
    font-size: 32px;
    margin-top: 50px;
    margin-left: 20px;
  }
  .img {
    height: 75px;
    widows: 75px;  
    margin-left: 0px;
    margin-top: 32px;
    background-image: url(../../assets/c.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;        
  }
</style>