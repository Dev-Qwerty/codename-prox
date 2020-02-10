<template>
  <div class="container">
    <h4>Recommended Services</h4>
    <div class="row1">
      <div class="col one">
      </div>
      <div class="col two">
      </div>
      <div class="col three">
      </div>
    </div>

    <h4>Photography</h4>
    <div class="row2">
      <div class="col four">
      </div>
      <div class="col five">
      </div>
    </div>

    <h4>Cleaning Services</h4>
    <div class="row3">
      <div class="col six">
      </div>
      <div class="col seven">
      </div>
    </div>      
  </div>    
</template>

<style scoped>
  .container {
    margin-top: 60px;
    margin-left: 40px;
    margin-right: 40px;
    padding: 0px;
  }
  .row1 {
    width: 100%;
    margin:0px;
    padding-left: 35px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .row2 {
    width: 69%;
    margin:0px;
    padding-left: 35px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .row3 {
    width: 69%;
    margin:0px;
    padding-left: 35px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .col {
    flex-grow:1;
    margin: 10px;
    height: 170px;
    border-radius: 15px;
    overflow: hidden;
    perspective: 1px;
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;    
  }
  .col.one {
    background-image: url('../assets/Plumber.png');
  }
  .col.two {
    background-image: url('../assets/Plumber.png');
  }      
  .col.three {
    background-image: url('../assets/Plumber.png');
  }
  .col.four {
    background-image: url('../assets/Wedding.jpg');
  }
  .col.five {
    background-image: url('../assets/Photo.jpg');
  }
  .col.six {
    background-image: url('../assets/Sprayer.jpg');
  }    
  .col.seven {
    background-image: url('../assets/Sprayer1.jpg');
  }
</style>