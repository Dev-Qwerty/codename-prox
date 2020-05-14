<template>
  <div class="wr-wrapper">
    <div class="wr-grid">
      <div class="incomming-req">
        <p class="ir-header">Incomming Requests</p>
        <div class="ir-box">
          <div class="ir-box-one"></div>
          <div class="ir-box-two"></div>
          <div class="ir-box-three"></div>
          <div class="ir-box-four"></div>
        </div>
      </div>
      <div class="your-schedule"></div>
    </div>
  </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .wr-grid {
    width: 100%;
    height: 676px;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .incomming-req {
    padding-left: 50px;
  }
  .ir-header {
    margin-bottom: 5px;
    font-size: 15px;
    color: #000;
  }
  .ir-box {
    width: 95%;
    background-color: #fff;
    height: 70px;
    display: grid;
    grid-template-columns: 55% 25% 10% 10%;
  }
  .ir-box-one {
    border: 1px solid #aaa
  }
  .ir-box-two {
    border: 1px solid #aaa
  }
  .ir-box-three {
    border: 1px solid #aaa
  }
  .ir-box-four {
    border: 1px solid #aaa
  }
  .your-schedule {
    border: 1px solid #aaa
  }
</style>