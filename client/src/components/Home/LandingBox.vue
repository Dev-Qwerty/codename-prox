<template>
  <div class = "box">
    <h3>YOUR SERVICE EXPERT</h3>
    <h5>Get instant access to reliable</h5>
    <h5>and affordable services</h5>
    <!-- <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="location" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">search</button>
      </div>
    </div> -->
    <div class="Grid4">
      <input type="text" value="location" class="Grid4-box1">
      <input type="submit" value="search" class="Grid4-box2">
    </div>    
  </div>
</template>

<style scoped>    
  .box {
    width: 600px;
    height: 300px;
    background-color: #fff;
    opacity: 0.9;
    top: 55%;
    left: 22%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 60px;
    padding-bottom: 5px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 20px;
  }

  .box h3 {
    color: #000;
    padding-bottom: 0px;
    text-align: center;
    font-weight: bold;
  }
  .box h5 {
    margin: 0;
    color: #000;
    padding-bottom: 0px;
    text-align: center;
  }
  /* .input-group {
    padding-top: 40px;
  } */
  .Grid4 {
    height: 35px;
    padding-left: 20px;
    margin: 25px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    border: 1px solid #dedee0;
    border-radius: 30px;
    box-shadow: 2px 4px #dedee0;
  }   
  .Grid4-box1 {
    border: none;
    background-color: #fff;
    color: #aaa;
    font-family: Arial;
    font-size: 17px;
    padding: 5px;
  }
  .Grid4-box2 {
    /* border: 1px solid #aaa; */
    border: none;
    background-color: #fff;
    color: #aaa;
    width: 70px;
    font-family: Arial;
    font-size: 17px;   
  }   
</style>