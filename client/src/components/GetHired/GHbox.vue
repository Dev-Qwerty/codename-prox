<template>
  <div class="conatiner">
    <div class="box">
      <h1>GET A STEP FURTHER</h1>
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
    <div class="hrline">
      <hr>
    </div>
    <div class="FeatHeadings">
      <h2>Our Most Unique Features</h2>
      <h5>We support our team the best</h5>
    </div>
    <div class="row">
      <div class="col">
        <div class="Col1Content"></div>
      </div>
      <div class="col">
        <div class="Col2Content"></div>
      </div>
      <div class="col">
        <div class="Col3Content"></div>
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
  .hrline hr {
    margin-top: 40px;
    margin-bottom: 60px;
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
    height: 170px;
    border-radius: 10px;
    background-color: #eeefef;  
  }
  .Col1Content {
    background-image: url('../../assets/accept.png');
  }
  .Col2Content {
    text-align: center;
    background-image: url('../../assets/accept.png');
  }  
  .Col3Content {
    text-align: center;
    background-image: url('../../assets/accept.png');
  }      
</style>