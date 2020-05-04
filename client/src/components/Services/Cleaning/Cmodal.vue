<template>
  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="Mcontent">
          <div class="topImg"></div>
          <p class="hding">{{ subArr[1].name }}</p>
          <div v-for="service in subArr" v-bind:key="service._id">
            <div class="Box">
              <div class="Flex">
                <p id="one">{{ service.category }}<p>
                <div class="Rs"></div>
                <p id="two">{{ service.amount }}</p>
                <input type="submit" value="ADD">
              </div>
              <p id="Vdetails">view details  <span id="Vspan">></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cmodal',
  props: ['subArr']
}
</script>

<style scoped>
  .modal-lg {
      margin-top: 50px;
      max-width: 47%;
  }
  .Mcontent {
      height: 1000px;
  }
  .topImg {
    margin: 0px;
    width: 100%;
    height: 340px;
    background-image: url(../../../assets/cimg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;        
  }
  .hding {
    color: #000;
    font-size: 28px;
    margin-top: 20px;
    text-align: center;
    margin-bottom: 0px;
  }
  .Box {
    margin-left: 35px;
    margin-top: 20px;
    width: 90%;
    border: 1px solid #000;
    height: 90px;
  }
  .Flex {
    display: flex;
  }
  #one {
    margin-top: 22px;
    margin-left: 20px;
    margin-bottom: 0px;
    font-weight: bold;
    font-size: 20px;;
  }
  .Rs {
    margin-bottom: 0px;
    margin-top: 35px;
    margin-left: 340px;
    width: 15px;
    height: 15px;
    background-image: url(../../../assets/rupee.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;       
  }
  #two {
    margin-bottom: 0px;
    margin-top: 27px;
    margin-left: 2px;
    font-weight: bold;
    font-size: 20px;    
  }
  .Bbottom input[type="submit"] {
    border: none;
    background-color: #000;
    color: #fff;
    margin-bottom: 0px;
    margin-left: 50px;
    margin-top: 22px;
    width: 80px;
    height: 40px;
    font-family: Arial;
    font-size: 15px;
    box-shadow: 3px 3px #dedee0;
    border-radius: 10px;;
  } 
  #Vdetails {
    margin-bottom: 0px;;
    margin-top: 1px;
    margin-left: 20px;
    font-weight: bold;
    font-size: 14px;
    color: blue;
  }  
</style>