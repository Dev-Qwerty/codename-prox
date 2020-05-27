<template>
  <div class="cart-wrapper">
    <div class="cart">
      <div class="top-box">
        <router-link class="arrowIcon" :to="{ path: '/services/cleaning/modal' }"></router-link>
      </div>
      <div class="cart-body">
        <div class="box1">
          <p>Shopping Cart</p>
        </div>
        <div class="box2 sh-all">
          <div class="b2-1">
            <p>ORDER SUMMARY</p>
          </div>
          <div class="Line"></div>
          <div class="b2-2"></div>
          <div class="Line"></div>
          <div class="b2-3"></div>
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
    margin-top: 50px;
    margin-left: 80px;;
    width: 90%;
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
  .box1 {
    height: 200px;
    /*background-color: aliceblue;*/
  }
  .box2 {
    height: 400px;
    background-color: #f2f2f2;
    display: grid;
    grid-template-rows: 15% 1px 55% 1px 30%;  
  }
  .sh-all {
    box-shadow: 0 0 3px #d9d9d9;
  } 
  .b2-1 {
 
  }
  .Line {
    margin-left: 15px;
    width: 90%;
    background-color: #cecece;
  }
  .b2-2 {

  }
  .b2-3 {

  }
</style>