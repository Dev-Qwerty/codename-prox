<template>
  <div class="Modal">
    <div class="Mbg">
      <div class="Mbox">
        <div class="btns">
          <router-link :to="{ path: '/services/cleaning/modal/cart/checkout' }">
            <div class="cbtn"></div>
          </router-link>          
          <div>
            <router-link class="confirmbtn" :to="{ path: '/services/cleaning' }" @click.native="confirmfn">
              <input type="submit" value="Confirm">
            </router-link> 
          </div>
          <!--<div>
            <router-link class="cancelbtn" :to="{name: 'checkout'}" @click.native="cancelfn">
              <input type="submit" value="Cancel">
            </router-link>
          </div>-->
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
  .Mbg {
    position: absolute;
    top: 0%;
    left: 0%;
    background: rgb(128, 128, 128, 0.6);
    width: 100%;
    height: 100%;
  }
  .Mbox {
    position: absolute;
    top: 14%;
    left: 35%;
    width: 30%;
    height: 400px;
    background-color: #fff;
  }
  .cbtn {
    position: absolute;
    top: 4%;
    left: 90%;
    width: 30px;
    height: 30px;
    background-image: url(../../../assets/closebtn.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;        
  }    
  .btns {
    margin-top: 35%;
    margin-left: 37%;
  }  
  .confirmbtn input[type="submit"]{
    width: 40%;
    height: 45px;
    border: none;
    color: #fff;
    background-color: black;
    border-radius: 5px;
  }
  .cancelbtn input[type="submit"]{
    margin-top: 20px;
    width: 40%;
    height: 45px;
    border: none;
    color: #fff;
    background-color: black;
    border-radius: 5px;
  }    
</style>