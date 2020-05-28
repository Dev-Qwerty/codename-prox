<template>
  <div class="cart-wrapper">
    <div class="cart">
      <div class="top-row">
        <router-link class="arrowIcon" :to="{ path: '/services/cleaning/modal' }"></router-link>
      </div>
      <div class="cart-body">
        <div class="col1">
          <p>Shopping Cart</p>
        </div>
        <div class="col2 sh-all">
          <div class="col2-row1">
            <p class="col2-row1-p">ORDER SUMMARY</p>
          </div>
          <div class="Line"></div>
          <div class="col2-row2">
            <div v-for="n in 3" v-bind:key="n">
              <div class="items-wrapper">
                <div class="col2-row2-col1">
                  <p class="col2-row2-col1-p">items 1</p>
                </div>
                <div class="col2-row2-col2">
                  <p class="col2-row2-col2-p">$299.00</p>
                </div>
              </div>
            </div>
          </div>
          <div class="Line"></div>
          <div class="col2-row3">
            <div class="items-wrapper">
              <div class="col2-row3-col1">
                <p class="col2-row3-col1-p">items 1</p>
              </div>
              <div class="col2-row3-col2">
                <p class="col2-row3-col2-p">$299.00</p>
              </div>
            </div>            
          </div>
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
    height: 100%;
    background-color: #fff;
  }
  .top-row {
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
  .col1 {
    height: 200px;
    /*background-color: aliceblue;*/
  }
  .col2 {
    height: 400px;
    background-color: #f2f2f2;
    display: grid;
    grid-template-rows: 15% 1px 55% 1px 30%;  
  }
  .sh-all {
    box-shadow: 0 0 3px #d9d9d9;
  } 
  .col2-row1 {
    padding-left: 15px;
    padding-top: 26px;
  }
  .col2-row1-p {
    font-size: 17px;
    font-weight: bold;
  }
  .Line {
    margin-left: 15px;
    width: 90%;
    background-color: #cecece;
  }
  .col2-row2 {
    padding-top: 10px;
    padding-left: 15px;
  }
  .items-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 10px;    
  }
  .col2-row2-col1-p {
    font-size: 16;
    margin: 0px;
  }
  .col2-row2-col2-p {
    font-size: 16;
    margin: 0px;
  }  
  .col2-row3 {

  }
</style>