<template>
  <div class = "box">
    <h3>YOUR SERVICE EXPERT</h3>
    <h5>Get instant access to reliable</h5>
    <h5>and affordable services</h5>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="location" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">search</button>
      </div>
    </div>
  </div>
</template>

<style scoped>    
  .box {
    width: 600px;
    height: 300px;
    background-color: #fff;
    opacity: 0.9;
    top: 60%;
    left: 30%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 30px;
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
  .input-group {
    padding-top: 40px;
  }
</style>