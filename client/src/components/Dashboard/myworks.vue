<template>
  <div class="mw-wrapper">
    <div class="mw-body">
      <p class="ty-header">Today</p>
      <div class="box-wrapper">
        <div class="box sh-all">

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
  .mw-body {
    padding-top: 10px;
    padding-left: 30px;
  }
  .ty-header {
    font-weight: bold;
    margin-bottom: -5px;
    font-size: 15px;
    color: #000;    
  }
  .box-wrapper {
    margin-top: 10px;
  }
  .box {
    width: 25%;
    height: 200px;
    display: grid;
    background-color: #fff;
    border: 1px solid #F5F5F5;    
  } 
  .sh-all {
    box-shadow: 0 0 5px #DBDBDB;
  }    
</style>