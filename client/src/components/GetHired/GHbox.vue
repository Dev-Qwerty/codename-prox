<template>
  <div class="Container">
    <div class="box">
      <h1>GET A STEP FURTHER</h1>
      <h1>JOIN US.</h1>
    </div>
    <div class="workersimg">
    </div>
    <div class= "Wrapper">
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
    <div class="hrline">
      <hr>
    </div>
    <div class="FeatHeadings">
      <h2>Our Most Unique Features</h2>
      <h5>We support our team the best</h5>
    </div>
    <div class="row">
      <div class="col">
        <img id="pic1" src="../../assets/Graph.png" alt="">
        <h4>Grow your business like a pro</h4>
      </div>
      <div class="col">
        <img id="pic2" src="../../assets/accept.png" alt="">
        <h4>Work on your own terms</h4>
      </div>
      <div class="col">
        <img id="pic3" src="../../assets/warranty.png" alt="">
        <h4>Get verified customer request</h4>
      </div>            
    </div>
    <div class="hrline">
      <hr>
    </div>
    <div class="Grid1">
      <div class="Grid1-box1"></div>
      <div class="Grid2">
        <div class="Grid2-box1">
          <p>Get our patners app</p>
          <input type="submit" value="GET HIRED">
        </div>
        <div class="Grid3">
          <div class="Grid3-box1"></div>
          <div class="Grid4">
            <input type="text" value="contact number" class="Grid4-box1">
            <input type="submit" value="Get link" class="Grid4-box2">
          </div>
        </div>
      </div>
      <div class="Grid1-box2"></div>
    </div>  
  </div>  
</template>

<style scoped>
  .box {
    padding-top: 129px;
    padding-left: 100px;
    width: 100%;
    height:400px;
    background-color: #eeefef;
  }
  .box h1 {
    margin: 0px;
    padding-bottom: 2px;
    font-family: 'Times New Roman';
    font-size: 58px;
  }
  .workersimg {
    height: 380px;
    width: 100%;
    background-image: url('../../assets/Workers.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .Wrapper {
    margin-left: 100px;
    margin-top: 80px;
    margin-bottom: 0px;
    width: 100%;
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
    box-shadow: 3px 3px #dedee0;
  }    
  .heading {
    margin-bottom: 20px;
  }
  .img {
    margin-left: -100px;
    margin-top: -50px;
    height: 400px;
    flex-grow:1;
    overflow: hidden;
    perspective: 1px;
    background-image: url('../../assets/paint.png');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }  
  .hrline hr {
    margin-top: 40px;
    margin-bottom: 70px;
    height: 1px;
    border: 0;
    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);    
  }
  .FeatHeadings {
    margin-top: 50px;
    text-align: center;
  }
  .FeatHeadings h2 {
    margin-bottom: 10px;
    font-size: 35px;
    font-style: bold;    
  }
 .FeatHeadings h5 {
    margin: 0px;
  }
  .row {
    margin: 0px;
    padding-left: 35px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }
  .col {
    flex-basis: 300px;
    flex-grow: 0;
    flex-shrink: 0;  
    margin: 30px;
    height: 200px;
    border-radius: 10px;
    background-color: #eeefef;  
  }
  #pic1 {
    width: 90px;
    position: absolute;
    top: 15px;
    left: calc(50% - 50px);
  }
  #pic2 {
    width: 90px;
    position: absolute;
    top: 15px;
    left: calc(50% - 50px);
  }
  #pic3 {
    width: 90px;
    position: absolute;
    top: 15px;
    left: calc(50% - 50px);
  }
  .col h4 {
    text-align: center;
    margin-top: 120px;
  }
  .Grid1 {
    display: grid;
    grid-template-columns: 3fr 4fr 1fr;
    grid-auto-rows: minmax(400px, auto);
  }
  .Grid2 { 
    display: grid;
  }
  .Grid3 {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-auto-rows: 125px;
  }
  .Grid4 {
    padding-left: 10px;
    padding-bottom: 14px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }  
  .Grid1-box1 {
    background-image: url('../../assets/Phone.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .Grid1-box2 {
    background-image: url('../../assets/Cworker.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 400px;
    margin-bottom: 50px;
  }  
  .Grid2-box1 {
    padding: 0px;
    align-self: flex-end;
  }
  .Grid2-box1 p {
    font-size: 50px;
    color: #4d4d4f;
    font-style: bold;
    margin: 0px;
    padding-left: 14px;
    padding-bottom: 10px;
  }  
  .Grid2-box1 input[type="submit"] {
    border: none;
    background-color: #4d4d4f;
    color: #fff;
    width: 260px;
    height: 50px;
    font-family: Arial;
    font-size: 20px;
    box-shadow: 3px 3px #dedee0;
    margin-left: 14px;
  }  
  .Grid3-box1 {
    align-self: flex-end;
    width: 120px;
    height: 120px;
    background-image: url('../../assets/Qrcode.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;      
  }
  .Grid4-box1 {
    padding: 15px;
    align-self: flex-end;
    border: none;
    background-color: #dedee0;
    color: #aaa;
    width: 290px;
    height: 55px;
    font-family: Arial;
    font-size: 22px;
    font-size: 15px;
  }
  .Grid4-box2 {
    padding-left: 15px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;    
    align-self: flex-end;
    border: none;
    background-color: #4d4d4f;
    color: #fff;
    width: 110px;
    height: 55px;
    font-family: Arial;
    font-size: 22px;    
  }  
</style>