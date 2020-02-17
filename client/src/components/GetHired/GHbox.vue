<template>
  <div class="conatiner">
    <div class="box">
      <h1>GET A STEP FURTHUR</h1>
      <h1>JOIN US.</h1>
    </div>
    <div class="workersimg">
    </div>
    <div class="wrapper">
      <div class="textarea">
        <div class="heading">
          <h2>We've made a platform for you to</h2>
          <h2>connect with customers</h2> 
        </div>
        <p>Urban Company provides you an interface to meet with</p>
        <p>your customer to chat and make a deal to get their</p>
        <p>work done. So why waiting..</p>
        <input type="submit" value="GET HIRED">
      </div>
      <div class="img">
      </div>
    </div>
  </div>  
</template>

<style scoped>
  .box {
    padding: 100px;
    width: 100%;
    height:300px;
    background-color: #eeefef;
  }
  .box h1 {
    margin: 0px;
    padding: 0px;
    font-family: 'Times New Roman';
    font-size: 45px;
  }
  .workersimg {
    height: 380px;
    width: 100%;
    background-image: url('../../assets/Workers.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .wrapper {
    margin-left: 50px;
    margin-top: 80px;
    margin-bottom: 100px;
    display: flex;
  }
  .textarea h2 {
    margin: 0px;
    font-size: 35px;
    font-style: bold;
  }
  .textarea p {
    margin: 0px;
    font-size: 18px;
  }
  .textarea input[type="submit"] {
    border: none;
    background-color: #4d4d4f;
    color: #fff;
    margin-top: 30px;
    width: 210px;
    height: 50px;
    font-family: Arial;
    font-size: 22px;
  }    
  .heading {
    margin-bottom: 20px;
  }
  .img {
    height: 300px;
    flex-grow:1;
    overflow: hidden;
    perspective: 1px;
    background-image: url('../../assets/paint.png');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }  

</style>