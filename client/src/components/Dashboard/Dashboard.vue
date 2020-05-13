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
          <div class="one">
            <div class="iOne"></div>
            <p>Work Requests</p>
          </div>
          <div class="two">
            <div class="iTwo"></div>
            <p>Pending Works</p>
          </div>
          <div class="three">
            <div class="iThree"></div>
            <p>My Works</p>
          </div>
          <div class="four">
            <div class="iFour"></div>
            <p>My Income</p>
          </div>
        </div>
        <div class="Line"></div>
        <div class="sBottom">
          <div class="sone">
            <div class="imgOne"></div>
            <p>My Profile</p>
          </div>
          <div class="stwo">
            <div class="imgTwo"></div>
            <p>Logout</p>
          </div>          
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
    height: 676px;
  }
  .SideNav {
    /*border: 1px solid #F5F5F5;*/
    border-left: 1px solid #00000029;    
    background-color: #fff;
    display: grid;
    grid-template-rows: 40% 32% 20px 20%;
  }
  .SideNav .sTop {
  }
  .SideNav .sMid {  
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  .SideNav .sMid .one {
    background-color: #000;
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;
  }   
  .SideNav .sMid .one .iOne {
    margin-top: 3px;
    margin-left: 10px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Wreq.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  } 
  .SideNav .sMid .one p {
    font-size: 15px;
    color: #fff;
  }     
  .SideNav .sMid .two {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;
  } 
  .SideNav .sMid .two .iTwo {
    margin-top: 3px;
    margin-left: 10px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Pwork.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }    
  .SideNav .sMid .two p {
    font-size: 15px;
    color: #000;
  }      
  .SideNav .sMid .three {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;    
  } 
  .SideNav .sMid .three .iThree {
    margin-top: 3px;
    margin-left: 10px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Mwork.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }    
  .SideNav .sMid .three p {
    font-size: 15px;
    color: #000;
  }      
  .SideNav .sMid .four {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;        
  } 
  .SideNav .sMid .four .iFour {
    margin-top: 3px;
    margin-left: 10px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Mincome.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }    
  .SideNav .sMid .four p {
    font-size: 15px;
    color: #000;
  }  
  .SideNav .Line {
    border-bottom: 1px solid #00000029;
  }    
  .SideNav .sBottom {
    display: grid;
    grid-template-rows: 35px 35px;  
  } 
  .SideNav .sBottom .sone {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;
  }     
  .SideNav .sBottom .sone .imgOne {
    margin-top: 3px;
    margin-left: 10px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Mprofile.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }   
  .SideNav .sBottom .sone p {
    font-size: 14px;
    color: #000;
  }  
  .SideNav .sBottom .stwo {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;
  }     
  .SideNav .sBottom .stwo .imgTwo {
    margin-top: 3px;
    margin-left: 10px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/LogOut.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }   
  .SideNav .sBottom .stwo p {
    font-size: 14px;
    color: #000;
  }              
  .Mid {
    background-color: #F5F5F5;
  }             
</style>