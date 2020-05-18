<template>
  <div class="pw-wrapper">
    <div class="pw-body">
      <p class="wi-header">Work Iteneries</p>
      <div class="wi-box-wrapper">
        <div class="sh-left">
          <div class="wi-box sh-bottom">
            <div class="wi-row1">
              <div class="wi-row1-col1"></div>
              <div class="wi-row1-col2"></div>
            </div>
            <div class="wi-row2">
              <div class="wi-row2-col1"></div>
              <div class="wi-row2-col2"></div>
              <div class="wi-row2-col3"></div>
            </div>
            <div class="wi-row3">
              <div class="wi-row3-col1"></div>
              <div class="wi-row3-col2"></div>              
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
  .pw-body {
    padding-left: 30px;
    padding-top: 10px;
  }
  .wi-header {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #000;
  }  
  .wi-box {
    margin-top: 10px;
    width: 90%;
    height: 200px;
    display: grid;
    grid-template-rows: 30% 50% 20%;  
    background-color: #fff;
    border: 1px solid #F5F5F5;    
  }
  .sh-bottom {
    box-shadow: 0 5px 5px -6px #707070;
  }  
  .sh-left {
    box-shadow: -5px 0 5px -6px #707070;
  } 
  .wi-row1 {
    display: grid;
    grid-template-columns: 1fr 1fr;      
  }  
  .wi-row1-col1 {
    background-color: blue;
  }
  .wi-row1-col2 {
    background-color: green;
  }
  .wi-row2 {
    display: grid;
    grid-template-columns: 20% 60% 20%;         
  } 
  .wi-row2-col1 {
    background-color: red;
  }
  .wi-row2-col2 {
    background-color: orange;
  }   
  .wi-row2-col3 {
    background-color: cornflowerblue;
  }   
  .wi-row3 {
    display: grid;
    grid-template-columns: 1fr 1fr;         
  }  
  .wi-row3-col1 {
    background-color: blue;
  }
  .wi-row3-col2 {
    background-color: brown;
  }   
</style>