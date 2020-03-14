<template>
  <div class="Container">
    <div class="box">
      <h1>QUALITY SERVICES</h1>
      <h1>SERVED WITH PRIDE.</h1>     
    </div>

    <div class="Bwrapper">
      <div class="grid1">
        <div class="hrr"></div>
        <div class="heading1">
          <h3>SERVICES</h3>
        </div>
        <div class="hrr"></div>      
      </div>
      <div class="grid2">
        <div class="b">
          <div class="b1"></div>
        </div>
        <div class="b">
          <div class="b1"></div>
        </div>
        <div class="b">
          <div class="b1"></div></div>      
      </div>
      <div class="grid3">
        <div class="b">
          <div class="b1"></div>
        </div>
        <div class="b">
          <div class="b1"></div>
        </div>
        <div class="b">
          <div class="b1"></div></div>      
      </div>   
      <div class="grid4">
        <div class="b">
          <div class="b1"></div>
        </div>
        <div class="b">
          <div class="b1"></div>
        </div>
        <div class="b">
          <div class="b1"></div>
        </div>      
      </div>
      <div class="grid5">
        <div class="hrr1"></div>
        <div class="heading1">
          <h3>OFFERS</h3>
        </div>
        <div class="hrr1"></div>      
      </div> 
      <div class="grid6">
        <div class="b">
          <div class="b1"></div>
        </div>
        <div class="b">
          <div class="b1"></div>
        </div>      
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
  .Bwrapper {
    margin-top: 50px;
    margin-left: 70px;
    margin-right: 70px;
  }
  .grid1 {
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    margin-bottom: 20px;
  }
  .grid2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  }
  .grid3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  } 
  .grid4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  }     
  .grid5 {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    margin-bottom: 20px;
  }   
  .grid6 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  }       
  .b {
    border: 1px solid #aaa;
  }
  .b1 {
    border-radius: 10px;
    background-color: #aaa;
    margin-left: 80px;
    margin-top: 55px;
    height: 60%;
    width: 60%;
  }
  .hrr {
    border: 1px solid #aaa;
    height: 0px;
  }
  .hrr1 {
    border: 1px solid #aaa;
    height: 0px;
    background-color: #aaa;
  }
  .heading1 {
    margin-top: -15px;
    margin-left: 10px;
    margin-right: 10px; 
  }
</style>