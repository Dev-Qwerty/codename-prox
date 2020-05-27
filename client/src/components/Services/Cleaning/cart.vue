<template>
  <div class="cart-wrapper">
    <div class="cart">
      <div class="top-box">
        <router-link class="arrowIcon" :to="{ path: '/services/cleaning/modal' }"></router-link>
      </div>
      <div class="cart-body">
        <div class="box1">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .cart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #fff;
  }
  .top-box {
    height: 50px;
    background-color: #000;
    width: 100%; 
    box-sizing: border-box;
    padding-left: 20px;
    padding-top: 10px;
    display: flex;
  }
  .arrowIcon {
    margin-top: 3px;
    width: 20px;
    height: 20px;
    background-image: url(../../../assets/arrow.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;    
  }   
  .cart-body {
    margin-left: 80px;;
    width: 90%;
    height: 500px;
    background-color: lawngreen;
  }
</style>