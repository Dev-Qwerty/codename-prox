<template>
  <div class="Dwrapper">
    <div class="Top">
      <p>Associates Dashboard</p>
    </div>
    <div class="Midwrapper">
      <div class="SideNav">
        <div class="sTop">

        </div>
        <div class="sMid">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="four"></div>
        </div>
        <div class="sBottom">

        </div>
      </div>
      <div class="Mid">
      
      </div>
    </div>
  </div>  
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .Top {
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    background-color: #000;
    text-align: center;
    padding-top: 10px;;
  }
  .Top p {
    color: #aaa;
    font-size: 17px;
  }
  .Midwrapper {
    display: grid;
    grid-template-columns: 19% 81%;
    height: 680px;
  }
  .SideNav {
    background-color: #fff;
    display: grid;
    grid-template-rows: 2fr 2fr 1fr;
  }
  .Mid {
    background-color: #F5F5F5;
  }
  .SideNav .sTop {
    border: 1px solid #707070;
  }
  .SideNav .sMid {
    border: 1px solid #707070;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  .SideNav .sBottom {
    border: 1px solid #707070;
  }  
  .SideNav .sMid .one {
    border: 1px solid red;
  } 
  .SideNav .sMid .two {
    border: 1px solid red;
  }  
  .SideNav .sMid .three {
    border: 1px solid red;
  }  
  .SideNav .sMid .four {
    border: 1px solid red;
  }           
</style>